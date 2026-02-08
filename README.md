# Кабанчик — лендинг

Статический сайт на Next.js (App Router) с экспортом в `out/` для GitHub Pages.

## Быстрый старт

```bash
npm install
npm run dev
```

`npm run dev` теперь автоматически чистит `.next` и `out`, чтобы не ловить ошибки про отсутствующие чанки.

Сборка:

```bash
npm run build
```

Готовый статический сайт окажется в `out/`.

## Кастомный домен

1. Откройте `site.config.json`.
2. Замените значение `customDomain` на свой домен (например, `kabanchik.ai`).
3. Выполните `npm run build` — скрипт создаст `public/CNAME` и он попадет в `out/`.
4. В настройках GitHub Pages укажите домен и настройте DNS.

## Примечание

Если используете GitHub Pages для проекта (а не user/organization pages), может понадобиться `basePath` в `next.config.js`.
