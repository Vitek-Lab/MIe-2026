# May Institute Essentials 2026 (MIe2026)

Website for **May Institute Essentials** — a condensed, fully virtual version of the May Institute.
November 2–6, 2026, online, 10:00 a.m.–12:30 p.m. EST.

Plain static HTML/CSS/JS — no build step. Intended to deploy to GitHub Pages from the
**Vitek-Lab** organization as the repository **MIe2026**.

> Status: in development, kept local only for now. Not yet published.

## Structure

```
index.html          Landing page: about, schedule, cost, sponsors
instructors.html    Instructors (MSstats, Cardinal), organizing, and support
details.html        Technical details stub (format, software, recordings)
assets/
  css/styles.css    Design system + layout (Lato + Inter, Northeastern red accent)
  js/main.js        Mobile navigation toggle
  img/
    logos/          Wordmark (mie-logo.svg)
    speakers/       Headshots
```

## Previewing locally

Open `index.html` directly in a browser, or serve the folder:

```bash
python3 -m http.server 8000
```

Then visit http://localhost:8000.

## Before deploying

- Remove the `.draft-banner` element from `index.html` and `speakers.html`.
- Confirm the schedule day/instructor mapping.
- Add rights-cleared logo and headshot assets under `assets/img/`.
- Wire the "Registration opens soon" button to the real registration link.

## Design

- Fonts: **Lato** (headings), **Inter** (body/UI), via Google Fonts.
- Accent: Northeastern red `#C8102E` on a light, neutral base.
- All asset paths are relative, so the site works from any base URL.

## Links

- May Institute: https://computationalproteomics.khoury.northeastern.edu
- Olga Vitek Lab: https://olga-vitek-lab.khoury.northeastern.edu
- Contact: mayinstitute@northeastern.edu
