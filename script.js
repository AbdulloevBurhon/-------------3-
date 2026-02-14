const data = [
  {
    title: "Git Bash — Команды",
    type: "bash",
    rows: [
      // ===== НАВИГАЦИЯ =====
      { desc: "Показать файлы", normal: "ls", fast: "ls -a" },
      { desc: "Текущая директория", normal: "pwd", fast: "PUSTO" },
      { desc: "Зайти в папку", normal: "cd folder", fast: "cd f" },
      { desc: "Назад", normal: "cd ..", fast: "cd -" },
      {
        desc: "В домашнюю директорию",
        normal: "cd ~/Desktop/test",
        fast: "cd ~",
      },

      // ===== СОЗДАНИЕ =====
      { desc: "Создать папку", normal: "mkdir folder", fast: "mkdir f" },
      {
        desc: "Создать и зайти в папку",
        normal: "mkdir folder && cd folder",
        fast: "mkdir f && cd f",
      },
      { desc: "Создать файл", normal: "touch file.js", fast: "> file.js" },

      // ===== ПЕРЕМЕЩЕНИЕ =====
      {
        desc: "Переместить файл",
        normal: "mv file.js src/",
        fast: "mv f.js s/",
      },
      {
        desc: "Копировать файл",
        normal: "cp file.js backup/",
        fast: "cp f.js b/",
      },

      // ===== УДАЛЕНИЕ =====
      { desc: "Удалить файл", normal: "rm file.js", fast: "rm f*" },
      {
        desc: "Удалить папку",
        normal: "rm -r folder",
        fast: "rm -rf folder",
        danger: true,
      },

      // ===== ОЧИСТКА =====
      { desc: "Очистить терминал", normal: "clear", fast: "Ctrl + L" },
    ],
  },

  {
    title: "React — Основные библиотеки",
    type: "react",
    rows: [
      { desc: "Создание проекта", cmd: "npm create vite@latest" },
      { desc: "Router", cmd: "npm i react-router-dom" },
      { desc: "Axios", cmd: "npm i axios" },
      {
        desc: "Tailwind установка",
        cmd: "npm install tailwindcss @tailwindcss/vite",
      },
      { desc: "Подключение Tailwind", cmd: "@import 'tailwindcss';" },
      { desc: "Инициализация", cmd: "tailwindcss()" },
      { desc: "Lucide Icons", cmd: "npm install lucide-react" },
      { desc: "Redux Toolkit", cmd: "npm install @reduxjs/toolkit" },
    ],
  },
  {
    title: "Git / GitHub — Основные команды",
    type: "react",
    rows: [
      { desc: "Инициализация репозитория", cmd: "git init" },
      { desc: "Проверить статус", cmd: "git status" },
      { desc: "Добавить все файлы", cmd: "git add ." },
      { desc: "Добавить конкретный файл", cmd: "git add file.js" },
      { desc: "Создать коммит", cmd: "git commit -m 'message'" },
      { desc: "Просмотреть историю", cmd: "git log" },
      { desc: "Создать ветку", cmd: "git branch dev" },
      { desc: "Переключиться на ветку", cmd: "git checkout dev" },
      { desc: "Создать и перейти в ветку", cmd: "git checkout -b dev" },
      { desc: "Слить ветку", cmd: "git merge dev" },
      {
        desc: "Добавить удалённый репозиторий",
        cmd: "git remote add origin URL",
      },
      { desc: "Отправить в GitHub", cmd: "git push -u origin main" },
      { desc: "Обновить проект", cmd: "git pull origin main" },
      { desc: "Клонировать репозиторий", cmd: "git clone URL" },
    ],
  },
];

const container = document.getElementById("tables");

data.forEach((block) => {
  const table = document.createElement("table");

  if (block.type === "bash") {
    table.innerHTML = `
      <thead>
        <tr>
          <th>Описание</th>
          <th>Обычная</th>
          <th>Быстрая</th>
        </tr>
      </thead>
      <tbody>
        ${block.rows
          .map(
            (row) => `
          <tr>
            <td>${row.desc}</td>
            <td><span class="code-box">${row.normal}</span></td>
            <td>
              <span class="code-box ${row.danger ? "danger" : ""}">
                ${row.fast}
              </span>
            </td>
          </tr>
        `,
          )
          .join("")}
      </tbody>
    `;
  }

  if (block.type === "react") {
    table.innerHTML = `
      <thead>
        <tr>
          <th>Описание</th>
          <th>Команда</th>
        </tr>
      </thead>
      <tbody>
        ${block.rows
          .map(
            (row) => `
          <tr>
            <td>${row.desc}</td>
            <td>
              <span class="code-box">
                ${row.cmd}
              </span>
            </td>
          </tr>
        `,
          )
          .join("")}
      </tbody>
    `;
  }

  const title = document.createElement("h2");
  title.style.color = "#22c55e";
  title.style.marginBottom = "20px";
  title.textContent = block.title;

  container.appendChild(title);
  container.appendChild(table);
});
document.getElementById("themeToggle").addEventListener("click", function () {
  document.body.classList.toggle("light");

  this.textContent = document.body.classList.contains("light")
    ? "🌞 Светлая тема"
    : "🌙 Тёмная тема";
});
