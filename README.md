# Автоматическая сборка Node.js

Автор: Мельник А.А.

Простое приложение Express возвращает `Hello World` по адресу `/` и состояние сервера по адресу `/health`.

## Проверка и локальный запуск

```sh
npm ci
npm test
npm start
```

Адрес: http://localhost:4000.

## Docker

```sh
docker build -t melnik-node-ci:1.0 .
docker run -d --name melnik-node-ci -p 127.0.0.1:4000:4000 melnik-node-ci:1.0
```

## GitHub Actions

Файл `.github/workflows/main.yml` запускается при push в main, pull request и вручную. Сначала выполняются тесты, затем сборка. При push в main и ручном запуске образ отправляется в Docker Hub.

В репозитории используются секреты `DOCKERHUB_USERNAME` и `DOCKERHUB_TOKEN`. Секретные значения хранятся в GitHub Actions, в исходные файлы они не включены.

Репозиторий: https://github.com/makintosh1337/melnik-node-ci

Образ: `makintosh1337/melnik-node-ci:latest`.
