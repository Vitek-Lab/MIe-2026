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
sitemap.xml         The five page URLs, for search engines
llms.txt            Plain-text program summary for AI tools
assets/
  css/styles.css    Design system + layout (Lato + Inter, Northeastern red accent)
  js/main.js        Mobile navigation toggle
  img/
    logos/          Wordmark (mie-logo.svg) + sponsor logos
    scenes/         Section photography
    speakers/       Headshots
    backgrounds/    Hero / background imagery
    favicon/        Site icons
    social/         1200x630 link-preview image (og:image)
```

## Search and sharing metadata

Each page carries a `<link rel="canonical">`, Open Graph and Twitter card tags,
and a unique title/description. `index.html`, `msstats.html`, and
`cardinal.html` also carry JSON-LD structured data (`EducationEvent` and
`Course`) so search engines and AI tools can read the dates, price, and
instructors directly.

When the program content changes, update these alongside it:

- **Dates, times, price, or instructors** — the JSON-LD block in the affected
  page's `<head>`, and `llms.txt`.
- **Registration opening** — `offers.availability` in the JSON-LD (`PreOrder`
  becomes `InStock`), `offers.url`, and the registration line in `llms.txt`.
- **Adding or removing a page** — `sitemap.xml` (including `lastmod`) and the
  page list in `llms.txt`.
- **Moving to a custom domain** — the absolute URLs in `sitemap.xml`,
  `llms.txt`, and every page's canonical, `og:url`, `og:image`, and JSON-LD.

Validate JSON-LD changes with the
[Rich Results Test](https://search.google.com/test/rich-results) and link
previews with [opengraph.dev](https://opengraph.dev).

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
- Get the site linked from the May Institute, Vitek Lab, MSstats, and Cardinal
  sites. Inbound links matter more for discoverability than any on-page change.
- Verify the site in Google Search Console and submit `sitemap.xml` directly.
  There is no `robots.txt`: crawlers only read one from a host root, which this
  project-page subpath is not. Nothing here is disallowed, which is the default.
- Confirm the schedule day/instructor mapping.

## Design

- Fonts: **Lato** (headings), **Inter** (body/UI), via Google Fonts.
- Accent: Northeastern red `#C8102E` on a light, neutral base.
- All asset paths are relative, so the site works from any base URL (including the `/MIe-2026/` Pages subpath).

## Links

- May Institute: https://computationalproteomics.khoury.northeastern.edu
- Olga Vitek Lab: https://olga-vitek-lab.khoury.northeastern.edu
- Contact: mayinstitute@northeastern.edu
