# Mukul Basu — Portfolio Website

A static portfolio website for an Instructional Designer.

## Folder Structure

```
portfolio-website/
├── index.html          ← Main page (open this in a browser to preview)
├── css/
│   └── style.css       ← All styles
├── js/
│   └── main.js         ← Accordion + scroll animations
├── images/             ← Drop your photos here
│   └── (empty — add hero.jpg and contact.jpg)
└── README.md
```

---

## Adding Your Photos

1. Copy your photo(s) into the `images/` folder.
2. Open `index.html` in a text editor.
3. Search for the comment `<!-- <img class="hero-photo"` — delete the `<div class="hero-photo-placeholder">` block above it and uncomment the `<img>` tag.
4. Repeat for the contact section (`<!-- <img class="c-photo"`).

Recommended sizes: **hero photo** — tall portrait, min 800 × 1000 px. **Contact photo** — portrait, min 600 × 800 px.

---

## Updating Work Cards

Each work card in the **My Work** section has a placeholder link (`href="#"`).  
When you're ready to publish a project:

1. Open `index.html`.
2. Find the card (search for `Card 1`, `Card 2`, etc.).
3. Replace `href="#"` with your project URL.
4. Update the `w-title` and `w-desc` text.

---

## Publishing Options

### Option A — GitHub Pages (free, recommended)
1. Create a free account at github.com.
2. Create a new repository (e.g. `mukul-portfolio`).
3. Upload all files in this folder (keep the folder structure intact).
4. Go to **Settings → Pages → Source** and select the `main` branch, root `/`.
5. Your site will be live at `https://yourusername.github.io/mukul-portfolio/`.

### Option B — Netlify (free, drag-and-drop)
1. Go to netlify.com and sign up for free.
2. In the dashboard click **Add new site → Deploy manually**.
3. Drag and drop the entire `portfolio-website` folder onto the page.
4. Netlify gives you a live URL instantly (e.g. `https://mukul-basu.netlify.app`).
5. You can connect a custom domain later from the same dashboard.

### Option C — Vercel (free)
1. Go to vercel.com and sign up.
2. Click **Add New → Project → Upload** and upload this folder.
3. Live in under a minute.

### Option D — Open locally
Double-click `index.html` to open it directly in any web browser — no server needed.

---

## Customisation Quick Reference

| What to change | Where |
|---|---|
| Name, bio, experience | `index.html` — Profile section |
| Skill tags | `index.html` — `.skill-row` div |
| Work card titles & descriptions | `index.html` — Works section |
| Contact details | `index.html` — Contact section |
| Colours | `css/style.css` — `:root` variables (`--bg`, `--dark`) |
| Fonts | `index.html` — Google Fonts `<link>` tag + `css/style.css` `font-family` |
| Accordion behaviour | `js/main.js` |