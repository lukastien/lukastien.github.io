# lukastien.github.io

Personal portfolio for **Lukas Tien** — UC Berkeley student studying Statistics, Data Science, and Economics.

## Run locally

```bash
python3 -m http.server 8000
```

Then visit [http://localhost:8000](http://localhost:8000).

Or open `index.html` directly in a browser.

## Deploy to GitHub Pages

Push to `main`. Site: [https://lukastien.github.io](https://lukastien.github.io)

If needed: **Settings → Pages → Source → Deploy from branch → `main` / root**.

## Customize

| What | Where in `index.html` |
|------|------------------------|
| Projects | `#projects` — copy a `article.timeline-item` |
| Project GitHub links | `.timeline-repo` — set `href`, remove `hidden` |
| Work experience | `#experience` — edit or duplicate the placeholder entry |
| About Me | `#about` |
| LinkedIn & email | `#contact` — search for `TODO` |
| Colors / type | `styles.css` — `:root` |

## Files

- `index.html` — structure & content
- `styles.css` — layout & design
- `script.js` — mobile nav & header behavior
