# lukastien.github.io

Personal portfolio for **Lukas Tien** — UC Berkeley student studying Statistics, Data Science, and Economics.

## Run locally

Open `index.html` in a browser, or serve the folder:

```bash
# Python
python3 -m http.server 8000

# Node (if you have npx)
npx serve .
```

Then visit [http://localhost:8000](http://localhost:8000).

## Deploy to GitHub Pages

This repo is named `lukastien.github.io`, so pushing to `main` publishes the site automatically:

1. Commit your changes
2. Push to `origin/main`
3. Site live at [https://lukastien.github.io](https://lukastien.github.io)

If Pages is not enabled yet: **Settings → Pages → Source → Deploy from branch → `main` / root**.

## Customize

| What | Where |
|------|--------|
| LinkedIn & email | `index.html` — contact links (search for `TODO`) |
| Projects | `index.html` — `#projects` section |
| Copy / bio | `index.html` — hero & about sections |
| Colors & type | `styles.css` — `:root` variables |

## Files

- `index.html` — structure & content
- `styles.css` — layout & design
- `script.js` — mobile nav & header behavior
