# May Institute Essentials 2026 (MIe2026)

Website for **May Institute Essentials** — a condensed, fully virtual version of the May Institute.
November 2–6, 2026, online, 10:00 a.m.–12:30 p.m. EST.

Plain static HTML/CSS/JS — no build step.

> **Live:** https://vitek-lab.github.io/MIe-2026/
> Published via GitHub Pages from the **Vitek-Lab/MIe-2026** repository (private repo, public site).

## Structure

```
index.html          Landing page: about, schedule, cost, sponsors
instructors.html    Instructors (MSstats, Cardinal), organizing, and support
details.html        Technical details (format, software, recordings)
msstats.html        MSstats course page
cardinal.html       Cardinal course page
assets/
  css/styles.css    Design system + layout (Lato + Inter, Northeastern red accent)
  js/main.js        Mobile navigation toggle
  img/
    logos/          Wordmark (mie-logo.svg) + sponsor logos
    scenes/         Section photography
    speakers/       Headshots
    backgrounds/    Hero / background imagery
    favicon/        Site icons
```

## Previewing locally

Open `index.html` directly in a browser, or serve the folder:

```bash
python3 -m http.server 8000
```

Then visit http://localhost:8000.

## Deploying

Pages rebuilds automatically on every push to `main` — just commit and push:

```bash
git push origin main
```

The live site updates a minute or so after the build completes.

## Still to do

- Wire the "Registration opens soon" button to the real registration link once it opens.
- Confirm the schedule day/instructor mapping.

## Design

- Fonts: **Lato** (headings), **Inter** (body/UI), via Google Fonts.
- Accent: Northeastern red `#C8102E` on a light, neutral base.
- All asset paths are relative, so the site works from any base URL (including the `/MIe-2026/` Pages subpath).

## Links

- May Institute: https://computationalproteomics.khoury.northeastern.edu
- Olga Vitek Lab: https://olga-vitek-lab.khoury.northeastern.edu
- Contact: mayinstitute@northeastern.edu
