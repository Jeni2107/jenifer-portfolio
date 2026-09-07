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

## Step 7: Deploy

### Option A: Deploy to GitHub Pages (Free)

1. **Initialize git and push to GitHub:**

```bash
git init
git add .
git commit -m "Initial portfolio commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/jenifer-portfolio.git
git push -u origin main
```

2. **Install Angular GitHub Pages helper:**

```bash
npm install -g angular-cli-ghpages
```

3. **Build and deploy:**

```bash
ng build --base-href "https://YOUR_USERNAME.github.io/jenifer-portfolio/"
npx angular-cli-ghpages --dir=dist/jenifer-portfolio/browser
```

4. In your GitHub repo: **Settings → Pages → Source: `gh-pages` branch**

Your site will be live at: `https://YOUR_USERNAME.github.io/jenifer-portfolio/`

---

### Option B: Deploy to Netlify (Free, Easiest)

1. Push your code to GitHub (see Option A, step 1).
2. Go to [https://netlify.com](https://netlify.com) and sign up.
3. Click **Add new site → Import an existing project**.
4. Connect your GitHub repo.
5. Set build settings:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist/jenifer-portfolio/browser`
6. Click **Deploy**.

Netlify gives you a free URL like `https://your-site.netlify.app`.

---

### Option C: Deploy to Vercel (Free)

1. Push code to GitHub.
2. Go to [https://vercel.com](https://vercel.com) and import your repo.
3. Vercel auto-detects Angular. Set:
   - **Output Directory:** `dist/jenifer-portfolio/browser`
4. Click **Deploy**.

---

### Option D: Deploy to AWS S3 + CloudFront

1. Build the project: `npm run build`
2. Create an S3 bucket with static website hosting enabled.
3. Upload contents of `dist/jenifer-portfolio/browser/` to the bucket.
4. Set bucket policy for public read access.
5. (Optional) Add CloudFront CDN for HTTPS and faster delivery.

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

---

## Troubleshooting

| Problem | Solution |
|---------|----------|
| `ng: command not found` | Use `npx ng serve` instead of `ng serve` |
| Port 4200 in use | Run `ng serve --port 4300` |
| Photo not showing | Check file path in `portfolio.data.ts` and that the image is in `public/assets/images/` |
| Build fails | Delete `node_modules` and run `npm install` again |

---

## Contact

- **Email:** 2020jeniferk@gmail.com
- **LinkedIn:** https://www.linkedin.com/in/jenifer-k
