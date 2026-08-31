# Running the site locally

The site is plain static HTML/CSS/JS. To edit the text and see changes reload
automatically, use one of the two options below. Both serve the site at:

**http://localhost:3000**

Edit any `.html` file (or anything under `assets/`), save, and the browser reloads
on its own.

---

## Option 1 — Docker (recommended)

Matches a container-based workflow and needs nothing installed except Docker.

Start it:

```bash
docker compose up
```

Then open http://localhost:3000. Leave the terminal running while you work.

Stop it:

```bash
docker compose down
```

Notes:
- The first run downloads dependencies (needs internet) and caches them in a
  Docker volume, so later runs are fast and work offline. If you want the site
  ready to demo without waiting, run `docker compose up` once beforehand.
- Live reload uses file polling, which is reliable for edits made on the Mac
  side while the server runs in the container.

---

## Option 2 — Node directly (no Docker)

Node is already installed on this machine.

First time only:

```bash
npm install
```

Then, each time you want to work:

```bash
npm run dev
```

Or, without installing anything:

```bash
npx browser-sync start --config bs-config.js
```

---

## Editing the content

- **Landing page:** `index.html` — hero, about, schedule, cost, sponsors.
- **Instructors:** `instructors.html`.
- **Technical details:** `details.html`.
- **Course pages:** `msstats.html` and `cardinal.html` — background, audience,
  installation instructions, and links. Reached from the schedule on the landing page.
- **Styles:** `assets/css/styles.css`.
- **Logo:** `assets/img/logos/mie-logo.svg` (editable text).
- **Photos:** `assets/img/scenes/` and `assets/img/speakers/`.

Text lives directly in the HTML files — search for the words you want to change.

## Before publishing

- ~~Remove the `<div class="draft-banner">…</div>` line from each HTML page.~~ (done)
- Replace the "Registration opens soon" button (`index.html`, `#register`) with the
  real registration link once registration opens.
- Fill in the real lecture titles/topics in the schedule (currently
  "to be announced" / placeholder topics).
