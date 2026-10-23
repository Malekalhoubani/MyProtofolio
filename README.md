# Malek Alhoubani — Portfolio

A modern, responsive portfolio built with Angular standalone components. It presents Malek's professional experience, selected projects, technical skills, education, community work, and contact information without a contact form.

## Highlights

- Angular 21 standalone component architecture
- Responsive desktop, tablet, and mobile layouts
- Dark and light themes
- Subtle scroll, reveal, orbit, and hover animations
- Accessibility-friendly navigation and reduced-motion support
- Downloadable PDF résumé
- Production-ready static build

## Run locally

Requirements: Node.js 20.19+ (Node 22 or 24 recommended) and npm.

```bash
npm install
npm start
```

Open `http://localhost:4200/`.

## Production build

```bash
npm run build
```

The deployable files are generated in `dist/MyProtofolio/browser/`.

## Publish on GitHub Pages

1. Create an empty GitHub repository (for example, `malek-portfolio`).
2. Push this project to the repository.
3. Build with the repository name as the base path:

```bash
npm run build -- --base-href /malek-portfolio/
```

4. Deploy the generated `dist/MyProtofolio/browser/` folder with GitHub Actions or the `angular-cli-ghpages` package.

For a user site repository named `<username>.github.io`, build with the default `/` base path instead.

## Push to GitHub

```bash
git init
git add .
git commit -m "Build modern Angular portfolio"
git branch -M main
git remote add origin https://github.com/<username>/<repository>.git
git push -u origin main
```

Replace the placeholder values with the GitHub username and repository name. The project contains no secrets or environment variables.

## Content

Portfolio content is derived from Malek Alhoubani's résumé. The downloadable file lives at `public/Malek_Alhoubani_CV.pdf`.
