# lukastien.github.io

Personal portfolio for **Lukas Tien** — UC Berkeley student studying Statistics, Data Science, and Economics.

Live site: [https://lukastien.github.io](https://lukastien.github.io)

## Run locally

```bash
python3 -m http.server 8000
```

Then visit [http://localhost:8000](http://localhost:8000).

## Deploy to GitHub Pages

Push to `main`. **Settings → Pages → Source → Deploy from branch → `main` / root**.

## Site structure

- `index.html` — homepage: hero, featured project, clickable project timeline, work experience, about, contact
- `styles.css` — shared layout & design system (colors/type in `:root`)
- `script.js` — mobile nav & header behavior (shared by all pages)
- `case-study.css` / `case-study.js` — shared case-study styles + screenshot lightbox (all project pages)
- `projects/<slug>/index.html` — one case-study page per project (see `sitemap.xml` for all routes)
- `assets/` — favicon and project images (`assets/nintendo/`, `assets/markov/`)

## Adding a project

1. Add an `article.timeline-item` to `#projects` in `index.html`, linking the title and "View Project" link to the new route.
2. Create `projects/<slug>/index.html` using an existing case-study page as the template (shared `../../styles.css`, `../../case-study.css`, `../../script.js`, `../../case-study.js`).
3. Add the route to `sitemap.xml` and wire up previous/next navigation on the neighbouring pages.
