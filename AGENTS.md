# AGENTS.md

Static HTML site for pngu.org. No build system, no package.json, no tests, no CI. The site is served directly from this git repo (`origin: ssh://git@pngu.org/site`), so `git push` to `master` is the deploy — never run a build, there is none.

## Adding or editing a page

- Every page is a hand-written HTML file. Start from `template.html` or an existing page (e.g. `artix_laptop.html`).
- A page **must** include `<script src="header.js"></script>` in `<head>` (injects `style.css` + favicons) and `<script src="frame.js"></script>` before `</body>` (injects highlight.js and auto-highlights `<code>` / `div.code` blocks — trim the content's leading/trailing newline, HTML-escape everything inside).
- Subpages link back via `<a href="content.html">&lt;--</a>` at the top and `<p><i>YYYY-MM-DD</i></p>` after the `<h2>`. `content.html` is the index; link any new page there.
- Keep ASCII art untouched: `index.html`'s obfuscated email span is marked `<!-- biome-ignore format: cannot format -->`.

## Formatting

Repo is formatted with Biome using the global config at `~/.config/biome/biome.json` (2-space indent, multiline attributes). Match that style when writing new HTML; run a format pass if possible. HTML attribute values use double quotes.

## Images (`images.js`)

- Single click-to-enlarge: class `lightbox-trigger inline-image` **and** a `<div class="lightbox-overlay" id="lightbox">` at the end of the body **and** `<script src="images.js"></script>` before `frame.js`.
- Click-to-cycle gallery: `data-images='["url", "url"]'` (JSON in single quotes) on the element wrapping the `<img>`; no lightbox markup needed.
- Assets live in `data/` (images, `lspci`/`lscpu` text dumps, the favicon set referenced by `header.js`); remote images are often raw GitHub URLs.

## Gotchas

- `header.js`/`frame.js` use `document.writeln`, so their script tags must be in exactly those two positions per page or styling/helpers silently break.
- `data/lspci`, `data/lscpu` are plain text dumps linked directly, not generated.
- `fonts/` holds Liberation Mono/Serif families declared in `style.css`.
