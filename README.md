# MKP Website

Корпоративный SPA-сайт на `React + TypeScript + Vite`.

## Что в проекте

- Фронтенд: `React 19`, `TypeScript`, `Vite`
- Стили: обычные CSS + Tailwind в зависимостях
- Тип приложения: SPA (клиентская маршрутизация)
- Прод-артефакт: папка `dist/` после `npm run build`

## Требования

- Node.js `20+` (лучше `22 LTS`)
- npm `10+`
- Linux-сервер (в примере ниже: Ubuntu + Nginx)
- Домен, направленный на ваш сервер

## Быстрый запуск локально

```bash
npm install
npm run dev
```

Открыть: `http://localhost:5173`

## Сборка для продакшена

```bash
npm run build
```

Проверить локально прод-сборку:

```bash
npm run preview
```

## Важно для SPA: fallback на `index.html`

Этот сайт использует клиентские маршруты (`/about`, `/services/...`, `/articles/...`).  
На сервере обязательно нужен fallback:

```nginx
try_files $uri $uri/ /index.html;
```

Если его нет, при обновлении страницы на внутренних URL будет `404`.

---

## Полный деплой на VPS (Ubuntu + Nginx + HTTPS)

Ниже инструкция, которую можно повторять буквально по шагам.

### 1. Настройка DNS

У регистратора домена создайте записи:

- `A` для `your-domain.com` -> `IP_СЕРВЕРА`
- `A` для `www.your-domain.com` -> `IP_СЕРВЕРА`

Проверка:

```bash
dig +short your-domain.com
dig +short www.your-domain.com
```

### 2. Подготовка сервера

Подключитесь по SSH и установите базовые пакеты:

```bash
sudo apt update
sudo apt install -y nginx git curl ufw
```

Откройте порты и включите firewall:

```bash
sudo ufw allow OpenSSH
sudo ufw allow 'Nginx Full'
sudo ufw enable
sudo ufw status
```

### 3. Установка Node.js через nvm

```bash
curl -fsSL https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.1/install.sh | bash
source ~/.nvm/nvm.sh
nvm install --lts
nvm use --lts
node -v
npm -v
```

### 4. Клонирование и первая сборка

```bash
sudo mkdir -p /var/www/mkp
sudo chown -R "$USER:$USER" /var/www/mkp
cd /var/www/mkp

git clone <URL_ВАШЕГО_РЕПОЗИТОРИЯ> .
npm ci
npm run build
```

После этого должна появиться папка `/var/www/mkp/dist`.

### 5. Переменные окружения (если нужны)

В проекте есть `.env.example`:

```env
VITE_YANDEX_MAPS_API_KEY=your_yandex_maps_api_key_here
```

Если используете переменные в проде:

```bash
cp .env.example .env.local
nano .env.local
npm run build
```

Сейчас карта в проекте подключена через iframe-конструктор Яндекс, поэтому ключ может не использоваться.

### 6. Конфиг Nginx

Создайте файл:

```bash
sudo nano /etc/nginx/sites-available/mkp
```

Вставьте:

```nginx
server {
    listen 80;
    server_name your-domain.com www.your-domain.com;

    root /var/www/mkp/dist;
    index index.html;

    # SPA fallback
    location / {
        try_files $uri $uri/ /index.html;
    }

    # Кэш ассетов Vite
    location /assets/ {
        expires 30d;
        add_header Cache-Control "public, max-age=2592000, immutable";
        try_files $uri =404;
    }

    # Базовые security headers
    add_header X-Content-Type-Options nosniff always;
    add_header X-Frame-Options SAMEORIGIN always;
    add_header Referrer-Policy strict-origin-when-cross-origin always;
}
```

Активируйте конфиг:

```bash
sudo ln -s /etc/nginx/sites-available/mkp /etc/nginx/sites-enabled/mkp
sudo rm -f /etc/nginx/sites-enabled/default
sudo nginx -t
sudo systemctl reload nginx
```

### 7. HTTPS (Let's Encrypt)

```bash
sudo apt install -y certbot python3-certbot-nginx
sudo certbot --nginx -d your-domain.com -d www.your-domain.com
```

Проверить автообновление сертификата:

```bash
sudo certbot renew --dry-run
```

### 8. Проверка после запуска

Проверьте:

- `https://your-domain.com` открывается
- прямой вход по внутреннему URL работает (`https://your-domain.com/about`)
- перезагрузка внутренних URL не дает `404`
- в DevTools нет ошибок загрузки `assets`

---

## Регулярное обновление сайта

Каждый раз после изменений:

```bash
cd /var/www/mkp
git pull
npm ci
npm run build
sudo systemctl reload nginx
```

## Удобный скрипт деплоя (опционально)

Создайте `deploy.sh` в корне проекта:

```bash
#!/usr/bin/env bash
set -euo pipefail

cd /var/www/mkp
git pull
npm ci
npm run build
sudo systemctl reload nginx

echo "Deploy complete"
```

Сделайте исполняемым:

```bash
chmod +x deploy.sh
```

Запуск:

```bash
./deploy.sh
```

---

## Откат на предыдущую версию

Вариант через Git (если деплой из `main`):

```bash
cd /var/www/mkp
git log --oneline -n 10
git checkout <COMMIT_HASH>
npm ci
npm run build
sudo systemctl reload nginx
```

Потом можно вернуть текущую ветку:

```bash
git checkout main
```

---

## Альтернатива: деплой через Docker (кратко)

Если хотите изолированный деплой:

1. Собираете `dist` в image.
2. Отдаете статику через Nginx внутри контейнера.
3. Публикуете `80/443` и подключаете сертификаты.

Для этого можно добавить `Dockerfile` + `nginx.conf` + `docker-compose.yml`, но для текущего проекта обычный Nginx на сервере проще и надежнее.

---

## Частые проблемы

### При обновлении страницы получаю `404`

Проверьте, что в `location /` стоит:

```nginx
try_files $uri $uri/ /index.html;
```

### После деплоя видна старая версия

- Сделайте hard reload (`Ctrl+Shift+R`)
- Проверьте, что новая сборка реально создалась (`dist/assets` обновились)
- Убедитесь, что Nginx указывает на правильный `root`

### Белый экран

- Проверьте `npm run build` на ошибки
- Откройте DevTools Console/Network
- Убедитесь, что ассеты доступны по URL `/assets/...`

### Сборка не проходит на сервере

Проверьте версию Node:

```bash
node -v
```

Нужно `20+`.

---

## Команды проекта

```bash
npm run dev      # локальная разработка
npm run build    # production сборка
npm run preview  # локальный просмотр production сборки
npm run lint     # проверка линтером
```
