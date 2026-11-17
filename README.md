# Personal portfolio · Vue 3

A responsive, Apple-inspired portfolio with separate HTML, CSS, and JavaScript. Vue is included locally; no package installation, CDN connection, or build step is needed.

## Personalize

Edit `app.js`: replace `profile`, `education`, `skills`, and `interests`. All current biographical content is sample content. Add your email to enable the contact button. The résumé opens as an accessible dialog and can be printed or saved as a PDF. Replace the Experience placeholder with your actual experience. Edit the résumé markup in `index.html` if you need more sections. Change the title and description in `index.html` for search engines, and edit `styles.css` for visual styling.

## Preview

Open `index.html` directly in your browser, or serve this folder using any static web server. No Node installation required.

## Host on GitHub Pages

1. Create a GitHub repository and upload the **contents** of this folder (so `index.html` is at the repository root).
2. In the repository, go to Settings → Pages.
3. Under Build and deployment, choose Deploy from a branch, select `main` and `/ (root)`, then Save.
4. GitHub will show your published address when deployment finishes.

All asset paths are relative, so both username sites and project sites work. The `.nojekyll` file keeps delivery as plain static files. A GitHub account/repository was not supplied, so this project has not been uploaded or published.

## Included

- Responsive layout with locally rendered CSS artwork and no external fonts or image tracking.
- Vue interest/hobby filters and a native résumé dialog with print styling.
- Keyboard navigation, visible focus indicators, reduced-motion support, and a skip link.
- Vendored Vue 3.5.13, distributed under the MIT license (see `vendor/LICENSE.txt`).
