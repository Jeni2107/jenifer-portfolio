# Jenifer K — Portfolio Website

A modern, responsive personal portfolio built with **Angular 19**, showcasing backend development skills, work experience, projects, and education.

## Features

- Single-page responsive design
- Hero section with profile photo
- About, Skills, Experience, Projects, Education, and Contact sections
- Smooth scroll navigation
- Mobile-friendly hamburger menu
- Dark theme with teal accents

---

## Prerequisites

Install these before running the project:

| Tool | Minimum Version | Download |
|------|----------------|----------|
| Node.js | 18.x or 20.x | https://nodejs.org |
| npm | 9.x+ | Comes with Node.js |

Verify installation:

```bash
node --version
npm --version
```

---

## Step 1: Navigate to the Project

```bash
cd /home/lenovo/MyPortfolio/jenifer-portfolio
```

---

## Step 2: Install Dependencies

```bash
npm install
```

This downloads all required Angular packages (only needed once, or after pulling new changes).

---

## Step 3: Add Your Profile Photo

1. Save your photo as a JPG or PNG file.
2. Copy it to:

```
public/assets/images/profile.jpg
```

3. Open `src/app/data/portfolio.data.ts` and update the image path:

```typescript
profileImage: 'assets/images/profile.jpg',
```

> A placeholder SVG is included at `public/assets/images/profile.svg` until you add your photo.

**Tips for best results:**
- Use a square image (at least 400×400 pixels)
- Prefer a professional headshot with good lighting
- Keep file size under 500 KB

---

## Step 4: Run Locally (Development)

Start the development server:

```bash
npm start
```

Or:

```bash
ng serve
```

Open your browser at: **http://localhost:4200**

The app auto-reloads when you edit files.

To stop the server, press `Ctrl + C` in the terminal.

---

## Step 5: Build for Production

Create an optimized production build:

```bash
npm run build
```

Output is generated in:

```
dist/jenifer-portfolio/browser/
```

---

## Step 6: Preview Production Build Locally

```bash
npx http-server dist/jenifer-portfolio/browser -p 8080
```

Open: **http://localhost:8080**

---

## Customizing Content

All portfolio content is in one file:

```
src/app/data/portfolio.data.ts
```

Edit name, summary, skills, experience, projects, education, and contact details there.

---

## Project Structure

```
jenifer-portfolio/
├── public/
│   └── assets/images/       # Profile photo
├── src/
│   ├── app/
│   │   ├── components/      # UI sections
│   │   │   ├── navbar/
│   │   │   ├── hero/
│   │   │   ├── about/
│   │   │   ├── skills/
│   │   │   ├── experience/
│   │   │   ├── projects/
│   │   │   ├── education/
│   │   │   ├── contact/
│   │   │   └── footer/
│   │   ├── data/
│   │   │   └── portfolio.data.ts   # All resume content
│   │   └── app.component.ts
│   ├── styles.scss          # Global styles
│   └── index.html
├── angular.json
└── package.json
```

## Contact

- **Email:** 2020jeniferk@gmail.com
- **LinkedIn:** https://www.linkedin.com/in/jenifer-k
