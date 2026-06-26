# ❄️ ManentiOS

A personal web operating system built with React and TailwindCSS, featuring a winter-tech visual identity, draggable windows, desktop apps, customization, and an interactive portfolio experience.

## 🔗 Live Demo

[Open ManentiOS](https://manenti-os.vercel.app/)

## 📸 Preview

![ManentiOS Screenshot](./public/screenshot.png)

---

## ✨ About the Project

**ManentiOS** is a personal WebOS that runs directly in the browser.
Instead of being a traditional portfolio website, it simulates a small operating system where users can open apps, move windows, explore projects, customize the interface, and interact with different parts of the desktop.

The project has a **winter-tech** visual identity, mixing dark cold colors, rainy forests, snowy landscapes, glassmorphism, cyan highlights, and a modern desktop-inspired interface.

---

## 🧊 Main Features

* Login-style onboarding screen
* Desktop interface with winter-themed wallpaper
* Top bar with live clock
* Draggable, closable, and reopenable windows
* Multiple desktop apps
* Desktop icons with app launching
* Window layering with z-index behavior
* **IceDock** bottom dock for quick app access
* **Command Palette** with `Ctrl + K`
* **Settings App** for visual customization
* Ambient effects: snow, rain, or none
* Portfolio app to showcase my projects
* Calculator app
* FrostLog journal app

---

## 🖥️ Apps Included

### 🌧️ FrostLog

A winter-tech journal/log app where I can display notes, thoughts, and development updates inside ManentiOS.

### 🧮 Calculator

A functional calculator app with basic operations, designed to feel like a native utility inside the OS.

### 🗂️ Projects

A portfolio app that showcases some of my best projects, including web apps, bots, hardware projects, and full-stack experiments.

### ⚙️ Settings

A customization app where users can change the visual mode and ambient effect of ManentiOS.

---

## 🧭 Navigation Features

### IceDock

The **IceDock** is a bottom dock that works as a quick launcher for apps.
It also shows which apps are currently open.

### Command Palette

Press:

```bash
Ctrl + K
```

to open the Command Palette, search for apps, and launch them quickly from anywhere on the desktop.

---

## 🎨 Visual Theme

ManentiOS follows a **winter + nature + technology** aesthetic inspired by:

* Snowy forests
* Rainy landscapes
* Cold dark colors
* Foggy mountains
* Glass-style panels
* Cyan and blue tech accents
* Minimal futuristic interfaces

The goal is to make the interface feel like a calm digital cabin inside a rainy winter forest.

---

## 🛠️ Built With

* React
* Vite
* TailwindCSS
* JavaScript
* HTML
* CSS

---

## 🚀 Running Locally

Clone the repository:

```bash
git clone https://github.com/noname697/ManentiOS.git
```

Enter the project folder:

```bash
cd ManentiOS
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open the local URL shown in your terminal, usually:

```bash
http://localhost:5173
```

---

## 📁 Project Structure

```txt
src/
├─ assets/
├─ data/
│  └─ osApps.js
├─ components/
│  ├─ Apps/
│  │  ├─ CalculatorApp.jsx
│  │  ├─ FrostLogApp.jsx
│  │  ├─ ProjectsApp.jsx
│  │  └─ SettingsApp.jsx
│  ├─ Desktop/
│  │  ├─ AmbientLayer.jsx
│  │  ├─ CommandPalette.jsx
│  │  ├─ Desktop.jsx
│  │  ├─ DesktopApps.jsx
│  │  ├─ DesktopIcon.jsx
│  │  ├─ Dock.jsx
│  │  ├─ OSWindow.jsx
│  │  ├─ TopBar.jsx
│  │  └─ WelcomeWindow.jsx
│  └─ Onboarding/
│     ├─ ActionButton.jsx
│     ├─ Onboarding.jsx
│     └─ ProfileImage.jsx
├─ App.jsx
└─ main.jsx
```

---

## 🎯 Project Goal

The goal of ManentiOS is to create a fun and creative portfolio experience while practicing:

* React componentization
* State management
* Interactive UI behavior
* TailwindCSS styling
* Draggable windows
* App-based interface design
* Desktop-like user experience

This project was built as part of the Hack Club WebOS workshop, but customized with my own theme, apps, interface, and design direction.

---

## 🧠 What I Learned

While building ManentiOS, I learned how to simulate several operating-system-like behaviors in a web browser, such as:

* Opening and closing windows
* Dragging windows around the desktop
* Managing which window appears on top
* Creating reusable app components
* Building a dock and command palette
* Designing a consistent visual identity
* Organizing a React project into scalable components

---

## 🤖 AI Assistance

I used AI as support during the development of ManentiOS, mainly to generate theme ideas, plan the component structure, create README/devlog texts, improve the project’s visual identity, and generate banners.

The code and final decisions were adapted and implemented by me according to the project’s style and goals.

---

## 👤 Author

Built by [noname697](https://github.com/noname697).
