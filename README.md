# Personal GitHub Portfolio

A futuristic, high-performance developer portfolio built as a production-grade software project using **React 18**, **TypeScript 5**, **Vite 6**, and **Tailwind CSS 3**. Features an automated **GitHub Actions CI/CD pipeline** deploying directly to **GitHub Pages**.

![License: MIT](https://img.shields.io/badge/License-MIT-8b5cf6.svg)
![TypeScript](https://img.shields.io/badge/TypeScript-5.7-3178c6.svg)
![React](https://img.shields.io/badge/React-18.3-61dafb.svg)
![Tailwind](https://img.shields.io/badge/Tailwind_CSS-3.4-38bdf8.svg)
![CI/CD](https://img.shields.io/badge/CI%2FCD-GitHub_Actions-emerald.svg)

---

## ⚡ Primary Featured Project

This portfolio website is architected and built as the **primary featured project** itself. It serves not only as a personal profile, but as tangible evidence of software engineering capabilities:

* **Futuristic Dark-Themed UI:** Near-black background (`#07080d`), electric violet (`#8b5cf6`), and blue/cyan accents (`#06b6d4`), code-inspired terminal mockups, and subtle glowing details.
* **Responsive Single-Page Layout:** Fluid layout built mobile-first, adapting seamlessly from mobile phones (320px) to ultra-wide displays (4K).
* **Interactive Project Showcase:** Dynamic category filtering, tags, direct GitHub repository links, live demos, and a deep architectural specification modal.
* **Technical Skills Matrix:** Categorized skills (Frontend, Languages, Backend, Cloud & DevOps, Tools) with proficiency visualizers.
* **About Me & Philosophy:** Clear engineering narrative, guiding principles, and code quality benchmarks.
* **Education & Experience Timeline:** Chronological career and academic milestones with key achievements.
* **Interactive Contact Section:** Working contact form with client-side validation and instant copy-to-clipboard email with visual feedback.
* **Résumé Viewer & Downloader:** Built-in modal viewer with instant print / PDF export.
* **Automated CI/CD:** Zero-configuration GitHub Actions workflow (`.github/workflows/deploy.yml`) that tests, builds, and deploys to GitHub Pages on every push to `main`.

---

## 🛠️ Tech Stack

| Technology | Purpose |
| :--- | :--- |
| **React 18** | Modular, reusable component architecture |
| **TypeScript 5** | Strict type safety, clean data interfaces, and zero runtime type errors |
| **Vite 6** | Ultra-fast local dev server with Hot Module Replacement (HMR) and optimized esbuild |
| **Tailwind CSS 3** | Utility-first CSS with customized cyber theme, glassmorphism, and glow utilities |
| **GitHub Actions** | Automated CI/CD pipeline building and publishing to GitHub Pages |

---

## 📂 Project Structure

```text
portfolio/
├── .github/
│   └── workflows/
│       └── deploy.yml            # Automated GitHub Actions deployment to Pages
├── src/
│   ├── components/               # Modular, reusable UI components
│   │   ├── About.tsx             # Developer narrative & core standards
│   │   ├── Contact.tsx           # Contact form & copy-to-clipboard email
│   │   ├── FeaturedProject.tsx   # Centerpiece featured project showcase
│   │   ├── Footer.tsx            # Git status, quick links & back-to-top
│   │   ├── Hero.tsx              # Terminal mockup, headline & CTAs
│   │   ├── Icons.tsx             # Lightweight, self-contained SVG icon library
│   │   ├── Navbar.tsx            # Glassmorphic header with scroll spy & mobile menu
│   │   ├── ProjectModal.tsx      # Deep architectural specs modal for projects
│   │   ├── Projects.tsx          # Filterable project showcase grid
│   │   ├── ResumeModal.tsx       # Printable résumé modal
│   │   ├── Skills.tsx            # Categorized skills matrix
│   │   └── Timeline.tsx          # Education & experience timeline
│   ├── data/
│   │   └── portfolioData.ts      # Centralized source of truth for all personal details
│   ├── types/
│   │   └── portfolio.ts          # Strict TypeScript interfaces
│   ├── App.tsx                   # Main layout container
│   ├── index.css                 # Cyber theme, custom scrollbar & glow utilities
│   └── main.tsx                  # Application bootstrap entry point
├── index.html                    # HTML5 shell with preconnected fonts & SEO meta tags
├── package.json                  # Dependencies and build scripts
├── postcss.config.js             # PostCSS plugins (Tailwind, Autoprefixer)
├── tailwind.config.js            # Custom color palette, glows & keyframes
├── tsconfig.json                 # TypeScript compiler options
├── vite.config.ts                # Vite bundler configuration with relative pathing
└── README.md                     # Documentation
```

---

## 🚀 Quick Start Guide

### 1. Prerequisites
Ensure you have **Node.js** (v18 or higher) and **npm** installed on your system. Verify with:
```bash
node -v
npm -v
```

### 2. Navigate to Project Directory
```bash
cd C:\portfolio
```

### 3. Install Dependencies
```bash
npm install
```

### 4. Start Local Development Server
```bash
npm run dev
```
Open your browser and navigate to `http://localhost:5173` (or the URL displayed in the terminal). Hot Module Replacement is active, so any edits you make will reflect immediately.

### 5. Create Production Build
```bash
npm run build
```
This runs TypeScript checking and compiles an optimized, minified bundle into the `dist/` directory.

To test the production build locally:
```bash
npm run preview
```

---

## ✏️ How to Customize with Your Own Details

All personal information, projects, skills, education, experience, and links are **centralized in a single file**:

📄 **[`src/data/portfolioData.ts`](file:///C:/portfolio/src/data/portfolioData.ts)**

You do **not** need to dig through component code to update your info! Simply edit:

1. **`profileData`**: Update your name, GitHub handle, role, bio paragraphs, social links (GitHub, LinkedIn, Email), and location.
2. **`projectsData`**: Add or modify projects. Update the repository URLs to point to your real GitHub repositories.
3. **`skillsData`**: Adjust your technical stack, proficiency levels, and categories.
4. **`timelineData`**: Add your real education degrees, bootcamps, jobs, and milestones.

Because of strict TypeScript interfaces in [`src/types/portfolio.ts`](file:///C:/portfolio/src/types/portfolio.ts), your IDE will provide autocomplete and alert you if any required field is missing.

---

## 🌐 Deploying to GitHub Pages (Automated CI/CD)

The project includes an official GitHub Actions workflow in [`.github/workflows/deploy.yml`](file:///C:/portfolio/.github/workflows/deploy.yml).

### Step 1: Initialize Git and Push to GitHub
```bash
cd C:\portfolio
git init
git add .
git commit -m "feat: initial commit of personal github portfolio"
git branch -M main
git remote add origin https://github.com/<YOUR_GITHUB_USERNAME>/<YOUR_REPOSITORY_NAME>.git
git push -u origin main
```

### Step 2: Enable GitHub Pages in Repository Settings
1. Go to your repository on GitHub: `https://github.com/<YOUR_GITHUB_USERNAME>/<YOUR_REPOSITORY_NAME>`
2. Click **Settings** (top navigation).
3. In the left sidebar, click **Pages**.
4. Under **Build and deployment** > **Source**, choose:  
   👉 **GitHub Actions** *(NOT "Deploy from a branch")*.

### Step 3: Automated Deployment
* Every push to `main` triggers the workflow.
* Within ~1–2 minutes, your website will be live at:  
  `https://<YOUR_GITHUB_USERNAME>.github.io/<YOUR_REPOSITORY_NAME>/`

---

## 🔒 Engineering Standards & Honesty

- **No Fabricated Information:** The template contains structured placeholders and real software architecture patterns. Update the GitHub repository links to your actual repositories.
- **Accessible & Performant:** Semantic HTML, ARIA labels, responsive typography, and lightweight SVG icons ensure high Lighthouse scores and screen-reader accessibility.
- **Maintainable:** Clear component boundaries adhering to the Single Responsibility Principle.

---

## 📄 License
This project is open-source under the [MIT License](LICENSE).
