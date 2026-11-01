# Jones Project Portal

A responsive, single-page launchpad for the websites built by [jouzan](https://github.com/jouzan/).

**Live website:** https://jouzan.github.io/project-portal/

Includes Aurora Calculator, Crosswind Quick Calc, The Markets, Freedom Retirement, VFR Flight Planner, and AWS Security Checklist. Search by project name or filter by Aviation, Finance, and Cloud. Each project's **Open website** link goes directly to the original site in the same tab.

## Preview locally

No dependencies or build step required:

```sh
python3 -m http.server 8080
```

Open http://localhost:8080. You can also open `index.html` directly. Google Fonts is optional; system fonts provide fallbacks.

## Edit the collection

Update the project `<article>` entries in `index.html`. Keep each entry's `data-category`, `data-search`, description, launch URL, and accessible link label in sync. When adding projects, update category counts, numbering, and the intro total. Styling is in `styles.css`; search and filtering are in `app.js`.

## Deployment

The GitHub Actions workflow deploys the four public files to GitHub Pages whenever `main` changes. In repository Settings → Pages, the source must be **GitHub Actions**.
