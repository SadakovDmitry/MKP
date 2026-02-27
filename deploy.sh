#!/usr/bin/env bash
set -euo pipefail

APP_DIR="$(cd -- "$(dirname -- "${BASH_SOURCE[0]}")" && pwd)"
WEB_ROOT="${WEB_ROOT:-/var/www/mkp}"
NGINX_SITE_NAME="${NGINX_SITE_NAME:-mkp}"
UPDATE_NGINX_CONF="${UPDATE_NGINX_CONF:-1}"

NGINX_AVAILABLE_CONF="/etc/nginx/sites-available/${NGINX_SITE_NAME}"
NGINX_ENABLED_CONF="/etc/nginx/sites-enabled/${NGINX_SITE_NAME}"

as_root() {
  if [[ "${EUID}" -eq 0 ]]; then
    "$@"
  else
    sudo "$@"
  fi
}

require_cmd() {
  if ! command -v "$1" >/dev/null 2>&1; then
    echo "Error: command '$1' not found" >&2
    exit 1
  fi
}

require_cmd git
require_cmd npm
require_cmd rsync
require_cmd nginx

cd "${APP_DIR}"

echo "[1/6] Pull latest code..."
git pull --ff-only

echo "[2/6] Install dependencies..."
npm ci

echo "[3/6] Build app..."
npm run build

if [[ "${UPDATE_NGINX_CONF}" == "1" ]]; then
  echo "[4/6] Update nginx config..."
  NGINX_TEMPLATE="deploy/nginx/mkp.conf"

  if nginx -V 2>&1 | grep -qi brotli; then
    NGINX_TEMPLATE="deploy/nginx/mkp-brotli.conf"
  fi

  as_root cp "${APP_DIR}/${NGINX_TEMPLATE}" "${NGINX_AVAILABLE_CONF}"
  as_root ln -sfn "${NGINX_AVAILABLE_CONF}" "${NGINX_ENABLED_CONF}"
else
  echo "[4/6] Skip nginx config update (UPDATE_NGINX_CONF=${UPDATE_NGINX_CONF})..."
fi

echo "[5/6] Deploy static files to ${WEB_ROOT}/dist..."
as_root mkdir -p "${WEB_ROOT}/dist"
as_root rsync -a --delete "${APP_DIR}/dist/" "${WEB_ROOT}/dist/"
as_root chown -R www-data:www-data "${WEB_ROOT}"

echo "[6/6] Validate and reload nginx..."
as_root nginx -t
as_root systemctl reload nginx

echo "Deploy complete"
