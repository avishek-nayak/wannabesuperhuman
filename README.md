# Avishek Nayak — Resume

A single-page personal resume for a sports community-building role. Designed as a poster, not a doc.

**Live:** `https://<your-username>.github.io/<repo-name>/`

## Stack

Plain HTML, CSS, and a small JS block. No build step, no framework, no dependencies. Fonts pulled from Google Fonts CDN.

## Files

```
.
├── index.html     ← markup
├── style.css      ← all styling (CSS variables at top)
├── script.js      ← open/close logic for the "Read my story" overlay
└── README.md
```

## Deploy on GitHub Pages

1. Create a new public repo on GitHub (any name — e.g. `resume`).
2. Upload all four files to the root of the repo (drag-and-drop in the web UI works fine).
3. In the repo → **Settings** → **Pages**.
4. Under "Build and deployment", set **Source** to `Deploy from a branch`, **Branch** to `main` (or `master`), folder `/ (root)`. Save.
5. Wait ~30 seconds. URL appears at the top of the Pages settings.

That's it. Any future commit to `main` redeploys automatically.

## Local preview

Open `index.html` directly in a browser — that works for everything except the story overlay's hash-based deep link, which needs a local server. If you want the full thing locally:

```bash
# Python (most machines have it)
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Editing

- **Copy / dates / names** — edit `index.html`. Each section is wrapped in `<section>` with an id like `01 At a glance`. Search by the visible label.
- **Colors / fonts / spacing** — edit `style.css`. The five colors live in `:root` at the top (`--paper`, `--ink`, `--pop-pink`, `--pop-yellow`, etc.). Change them in one place, everything updates.
- **Story content** — edit the `<aside class="story-overlay">` block at the bottom of `index.html`.

## Print

`Cmd/Ctrl + P` → "Save as PDF". A print stylesheet kicks in: A4 page, no shadows, no overlay, no decorative noise. Comes out as a clean recruiter-ready PDF.

## Hosted dependencies

Three Google Fonts:

- **Fraunces** — display serif (headings, italics, pull quotes)
- **Instrument Sans** — body
- **JetBrains Mono** — labels, dates, tags

These load from `fonts.googleapis.com`. If you ever go offline-only or want to self-host, download them from [fonts.google.com](https://fonts.google.com) and swap the `<link>` for local `@font-face` rules.

---

Built one prompt at a time. Edit the same way.
