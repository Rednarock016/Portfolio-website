# 🌐 Ranjit Hazra — Personal Portfolio Website

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)
![AOS](https://img.shields.io/badge/AOS-Animate%20on%20Scroll-blueviolet?style=flat)
![FontAwesome](https://img.shields.io/badge/Font%20Awesome-528DD7?style=flat&logo=fontawesome&logoColor=white)

A clean, responsive, single-page personal portfolio website built with pure HTML5, CSS3, and Vanilla JavaScript — showcasing the skills, projects, and contact information of **Ranjit Hazra**, a passionate aspiring full-stack developer from Howrah, India.

---

## 📋 Table of Contents

- [Live Demo](#-live-demo)
- [Project Overview](#-project-overview)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Sections](#-sections)
- [Projects Showcased](#-projects-showcased)
- [Skills Listed](#-skills-listed)
- [Folder Structure](#-folder-structure)
- [Getting Started](#-getting-started)
- [Dependencies](#-dependencies)
- [Social Links](#-social-links)
- [License](#-license)

---

## 🚀 Live Demo

> _Add your deployed URL here (e.g., GitHub Pages, Netlify, Vercel)_
> 
> **[View Live →](#)**

---

## 📌 Project Overview

This is a fully hand-coded, single-page portfolio website designed to serve as a professional digital presence. It includes a hero section with a typing animation, skill progress bars, an animated project grid, and a contact section with social media links — all wrapped with a smooth dark/light mode toggle and a custom animated preloader.

---

## ✨ Features

- **Animated Preloader** — Letter-by-letter "Generating..." animation before the page loads
- **Dark / Light Mode Toggle** — A sun/moon toggle switch that saves preference via `localStorage`
- **Typing Role Animation** — Auto-cycling display of roles: `{Developer.}`, `{BackEnd.}`, `{FrontEnd.}`
- **Smooth Scroll Navigation** — Fixed header with anchor-based section navigation
- **Hamburger Menu** — CSS-only responsive mobile navigation (no JS required)
- **Scroll-triggered Animations** — Powered by AOS (Animate On Scroll) library
- **Skill Progress Bars** — Visual CSS-variable-based proficiency bars
- **Project Cards with Hover Overlay** — Each card reveals description, tech stack, and links on hover
- **Back to Top Button** — Appears after scrolling 300px
- **Social Media Buttons** — Animated hover-effect buttons for Facebook, Instagram, X, LinkedIn, and GitHub
- **Fully Responsive** — Mobile-first design that adapts across all screen sizes

---

## 🛠 Tech Stack

| Technology | Purpose |
|---|---|
| HTML5 | Page structure and semantic markup |
| CSS3 | Styling, layout (Grid/Flexbox), animations, CSS variables |
| Vanilla JavaScript | Theme toggle, preloader, back-to-top button, AOS init |
| [AOS v2.3.1](https://michalsnik.github.io/aos/) | Scroll-triggered entrance animations |
| [Font Awesome 6.3.0](https://fontawesome.com/) | Icons throughout the UI |
| [Google Fonts — Poppins](https://fonts.google.com/specimen/Poppins) | Typography |

> ⚠️ No frameworks, no build tools, no bundlers — pure vanilla web technologies.

---

## 📂 Sections

### 1. 🏠 Home (Hero)
The landing section features a greeting, name, animated typing role display (`{Developer.}`, `{BackEnd.}`, `{FrontEnd.}`), a short bio, and social media links. A profile image is displayed alongside the text.

### 2. 👤 About Me
A brief personal introduction including background story, hobby note, and structured detail cards covering:
- **Experience:** 1+ Years
- **Education:** BCA Specialization in Data Science
- **Location:** Howrah, India

### 3. 💡 Skills
Horizontal progress bar UI showing proficiency levels in:

| Skill | Level |
|---|---|
| HTML5 | 80% |
| Python | 60% |
| CSS3 | 50% |
| C | 40% |
| JavaScript | 10% |
| C++ | 10% |
| PHP | ~1% |
| React JS | Learning (0%) |

### 4. 🗂 Projects
A 6-card animated project grid. Each card shows a thumbnail image, project name, and on hover reveals the description, tech stack badges, and links to live demo and GitHub.

### 5. 📬 Contact
A contact section containing the same social media button set as the hero — Facebook, Instagram, X (Twitter), LinkedIn, and GitHub — for easy outreach.

---

## 🚧 Projects Showcased

| Project | Description | Stack |
|---|---|---|
| **Portfolio Website** | This very site — personal showcase | HTML5, CSS3, JS |
| **ProGEN** | Secure password generator & manager | Python, HTML, CSS, JS, Flask |
| **TaskMaster App** | Daily task productivity manager | Python, Django |
| **Weather Dashboard** | Real-time weather via public API | JavaScript, REST API |
| **E-Commerce UI** | Responsive frontend for an online store | HTML5, Tailwind CSS |
| **Chat Application** | Real-time messaging with web sockets | React, Socket.IO |

---

## 📁 Folder Structure

```
Portfolio-website/
├── portfolio.html                              # Main HTML file (single page)
├── style.css                                   # All styles (layout, animations, themes)
├── Ranjit_Hazra_RK__Flyers__...-preview.png   # Logo image used in header
├── Profile pic.png                             # Hero section profile photo
├── Prortfolio website.png                      # Project card thumbnail — Portfolio
├── ProGEN.png                                  # Project card thumbnail — ProGEN
├── img3.jpg                                    # Project card thumbnail — TaskMaster
├── img4.jpg                                    # Project card thumbnail — Weather Dashboard
├── img5.jpg                                    # Project card thumbnail — E-Commerce UI
└── img6.jpg                                    # Project card thumbnail — Chat Application
```

> All images are referenced locally. Make sure all image files are present in the same directory as `portfolio.html` before opening in a browser.

---

## 🏁 Getting Started

No build process or installation needed. Just clone and open.

### 1. Clone the Repository

```bash
git clone https://github.com/Rednarock016/Portfolio-website.git
cd Portfolio-website
```

### 2. Open in Browser

Simply open `portfolio.html` in any modern browser:

```bash
# On macOS
open portfolio.html

# On Linux
xdg-open portfolio.html

# On Windows
start portfolio.html
```

> Or drag and drop `portfolio.html` directly into your browser window.

### 3. (Optional) Serve Locally

For a more realistic experience with correct asset loading:

```bash
# Using Python
python -m http.server 8080

# Using Node.js (npx)
npx serve .
```

Then visit `http://localhost:8080` in your browser.

---

## 📦 Dependencies

All external dependencies are loaded via CDN — no `npm install` required.

| Library | Version | CDN |
|---|---|---|
| Font Awesome | 6.3.0 | cdnjs.cloudflare.com |
| AOS (Animate On Scroll) | 2.3.1 | unpkg.com |
| Google Fonts (Poppins) | — | fonts.googleapis.com |

---

## 🌐 Social Links

| Platform | Handle / URL |
|---|---|
| 📘 Facebook | [Ranjit Hazra](https://www.facebook.com/profile.php?id=100039845799332) |
| 📸 Instagram | [@rednarock](https://www.instagram.com/rednarock) |
| 🐦 X (Twitter) | [@anyuse069](https://x.com/anyuse069) |
| 💼 LinkedIn | [ranjit-hazra-64b341323](https://www.linkedin.com/in/ranjit-hazra-64b341323) |
| 🐙 GitHub | [@rednarock016](https://github.com/rednarock016) |

---

## 🎨 Theming

The site supports **Light Mode** (default) and **Dark Mode**, toggled via the sun/moon switch in the top-right corner. Theme preference is persisted in `localStorage` across sessions.

CSS custom properties (variables) power the entire theme system:

```css
/* Light Mode */
:root {
  --light: #eaecee;
  --color-text: #3c3e41;
  --gradient-bg: linear-gradient(-45deg, #D000F7, #24BAE3);
}

/* Dark Mode */
.dark-mode {
  --light: #1e1e24;
  --color-text: #faf8f8;
  --gradient-bg: linear-gradient(-45deg, #FF007A, #7928CA);
}
```

---

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).

---

> Built with ❤️ by [Ranjit Hazra](https://github.com/rednarock016) — Howrah, India
