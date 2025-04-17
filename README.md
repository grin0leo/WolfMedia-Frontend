# 🦊 WolfMedia - Учебный проект на Next.js

Этот проект был выполнен в рамках стажировки как учебное задание. Он построен с использованием [Next.js](https://nextjs.org) и демонстрирует работу с различными возможностями современного фронтенда: статическая генерация, инкрементальная генерация, работа с глобальным состоянием и внешними API.

## 🚀 Стек технологий

- [Next.js App Router](https://nextjs.org/docs/app)
- [TypeScript](https://www.typescriptlang.org/)
- [PostCSS](https://postcss.org/)
- [Axios](https://axios-http.com/)
- [Redux Toolkit](https://redux-toolkit.js.org/)
- [CSS Modules](https://nextjs.org/docs/app/building-your-application/styling/css-modules)
- [next/font + локальные шрифты](https://nextjs.org/docs/app/building-your-application/optimizing/fonts)

## 📄 Страницы

- `/` — **Главная страница**. Отрендерена с помощью **Static Site Generation (SSG)**.
- `/cases` — **Страница "Кейсы"**. Используется **Incremental Static Regeneration (ISR)** с `revalidate`, чтобы периодически пересобирать данные.
  - Для получения и хранения данных используется **Redux Toolkit** и `createSlice`.

## 🧑‍💻 Запуск проекта

```bash
# Установка зависимостей
npm install

# Запуск в dev-режиме
npm run dev
