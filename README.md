# MKP Website

Корпоративный SPA-сайт на `React + TypeScript + Vite`.

## Стек

- `react`, `react-dom`
- `typescript`
- `vite`
- `tailwindcss` (в проекте также есть обычные CSS-файлы)

## Требования

- Node.js `20+` (рекомендуется `22 LTS`)
- npm `10+`
- Linux-сервер (для деплоя ниже используется Ubuntu + Nginx)

## Локальный запуск

```bash
npm install
npm run dev
```

Сайт будет доступен на `http://localhost:5173`.

## Прод-сборка

```bash
npm run build
```

Готовые файлы появляются в папке `dist/`.

Проверка локально:

```bash
npm run preview
```

## Важный момент про маршруты (SPA)

Сайт использует клиентскую навигацию (History API), поэтому на сервере **обязательно** нужен fallback:

- любой путь (`/about`, `/services/audit`, `/articles/...`) должен отдавать `index.html`;
- иначе при обновлении страницы будет `404`.

Ниже в конфиге Nginx это реализовано через:

```nginx
try_files $uri $uri/ /index.html;
```

---

## Пошаговый деплой на VPS (Ubuntu + Nginx + HTTPS)

### 1) Подготовить сервер

```bash
sudo apt update
sudo apt install -y nginx git curl
```

Проверить, что Nginx запущен:

```bash
systemctl status nginx
```

### 2) Установить Node.js (через nvm)

```bash
curl -fsSL https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.1/install.sh | bash
source ~/.nvm/nvm.sh
nvm install --lts
nvm use --lts
node -v
npm -v
```

### 3) Забрать проект и собрать

```bash
cd /var/www
sudo mkdir -p /var/www/mkp
sudo chown -R $USER:$USER /var/www/mkp
cd /var/www/mkp

git clone <URL_ВАШЕГО_РЕПОЗИТОРИЯ> .
npm ci
npm run build
```

После сборки должна быть папка `/var/www/mkp/dist`.

### 4) Настроить Nginx

Создайте файл:

```bash
sudo nano /etc/nginx/sites-available/mkp
```

Содержимое:

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

    # Кэш для статических ассетов Vite
    location /assets/ {
        expires 30d;
        add_header Cache-Control "public, max-age=2592000, immutable";
        try_files $uri =404;
    }
}
```

Активируйте сайт и перезапустите Nginx:

```bash
sudo ln -s /etc/nginx/sites-available/mkp /etc/nginx/sites-enabled/mkp
sudo nginx -t
sudo systemctl reload nginx
```

Если включен дефолтный сайт, можно отключить:

```bash
sudo rm -f /etc/nginx/sites-enabled/default
sudo nginx -t
sudo systemctl reload nginx
```

### 5) Подключить HTTPS (Let's Encrypt)

```bash
sudo apt install -y certbot python3-certbot-nginx
sudo certbot --nginx -d your-domain.com -d www.your-domain.com
```

Проверка автообновления сертификата:

```bash
sudo certbot renew --dry-run
```

---

## Обновление сайта после изменений

На сервере:

```bash
cd /var/www/mkp
git pull
npm ci
npm run build
sudo systemctl reload nginx
```

Этого достаточно, потому что Nginx напрямую раздает актуальную папку `dist`.

---

## Частые проблемы и решения

### 1) При обновлении страницы `404`

Причина: не настроен SPA fallback.  
Решение: в `location /` должен быть `try_files $uri $uri/ /index.html;`.

### 2) Открывается старая версия сайта

Причина: кэш браузера.  
Решение:
- сделать hard reload (`Ctrl+Shift+R`);
- проверить, что в `dist/assets` появились новые файлы;
- убедиться, что `npm run build` выполнился без ошибок.

### 3) Сборка падает на сервере

Проверьте версию Node:

```bash
node -v
```

Нужен `20+`.

### 4) Белый экран после деплоя

Проверьте:
- успешность `npm run build`;
- ошибки в DevTools Console;
- доступность файлов из `/assets/...`;
- корректность `root` в Nginx (`/var/www/mkp/dist`).

---

## Переменные окружения

В репозитории есть `.env.example`:

```env
VITE_YANDEX_MAPS_API_KEY=your_yandex_maps_api_key_here
```

Сейчас карта на сайте подключена через iframe-конструктор Яндекс и не требует API-ключа.  
Если позже перейдете на JS API Яндекс.Карт, создайте `.env.local` и используйте ключ через `import.meta.env`.

---

## Полезные команды

```bash
# локальная разработка
npm run dev

# проверка линтера
npm run lint

# прод-сборка
npm run build

# локальный просмотр прод-сборки
npm run preview
```
