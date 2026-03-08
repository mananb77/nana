# Nana Memorial Site — Content Checklist

This site is currently an exact duplicate of **Dadi's** site. Every item below needs to be reviewed and replaced with Nana's content.

---

## index.html
- [ ] `<title>` — Change from "Dadi" to "Nana"
- [ ] `<meta name="description">` — Update name, years, and description
- [ ] `og:title` — Update name
- [ ] `og:description` — Update description
- [ ] `og:image` — Replace with Nana's photo URL
- [ ] `og:url` — Change from `/dadi/` to `/nana/`
- [ ] `<link rel="preload">` — Update hero photo path

---

## App.jsx — Hero Section
- [ ] Hero photo `src` — Replace `/dadi/photos/...` with Nana's photo
- [ ] Hero photo `alt` — Update name
- [ ] Name in Hindi (e.g. कल्पना भार्गव → Nana's name in Hindi)
- [ ] Name in English
- [ ] Birth & death years
- [ ] Hero subtitle (e.g. "A Life of Purpose, Strength, & Devotion")
- [ ] Hero subtitle in Hindi
- [ ] Hero quote (English & Hindi)
- [ ] "Read Her Life Story" → "Read His Life Story" (or appropriate)
- [ ] YouTube video link (or remove)
- [ ] Best Photos Google Photos link (or remove)
- [ ] WhatsApp share text — Update name and URL
- [ ] "Leave a Memory" link text (keep or update)

## App.jsx — Nav
- [ ] "Her Life" / "His Life" — Update gender
- [ ] "Her Story" / "His Story" — Update gender
- [ ] Section nav links — Add/remove sections as needed (e.g. Spiritual, Creative)

## App.jsx — Bio Section
- [ ] Section title ("Her Life" → appropriate)
- [ ] Section title Hindi
- [ ] Bio paragraph (English) — Full rewrite with Nana's story
- [ ] Bio paragraph (Hindi) — Full rewrite
- [ ] Bio cards (6 trait cards) — Update all labels, Hindi, and descriptions
- [ ] "Read Her/His Full Life Story" CTA text

## App.jsx — Family Tree Section
- [ ] Parents names (English & Hindi)
- [ ] Siblings — All names (English & Hindi)
- [ ] Center couple — Nana & spouse names
- [ ] Children branches — All names (English & Hindi)
- [ ] Grandchildren — All names (English & Hindi)
- [ ] Spouse/partner labels

## App.jsx — Journey / Timeline Section
- [ ] Section title & Hindi
- [ ] Each timeline item:
  - [ ] Year
  - [ ] City / label (English & Hindi)
  - [ ] Description (English)
  - [ ] Description (Hindi)
- [ ] Add/remove timeline items as needed

## App.jsx — Wisdom / Quotes Section
- [ ] Section title & Hindi
- [ ] Each quote card:
  - [ ] Quote in Hindi
  - [ ] Quote in English
  - [ ] Context line (English & Hindi)
- [ ] Add/remove quotes as needed

## App.jsx — Values Section
- [ ] Section title & Hindi
- [ ] Each value card:
  - [ ] Label (English & Hindi)
  - [ ] Description (English)
  - [ ] Description (Hindi)
- [ ] Add/remove value cards as needed

## App.jsx — Gallery Section
- [ ] Section title & Hindi
- [ ] All `<img>` src paths — Replace with Nana's photos
- [ ] All `<img>` alt text
- [ ] "View Full Photo Album" link — Update Google Photos URL
- [ ] Album link Hindi text

## App.jsx — Closing Section
- [ ] Closing tribute paragraph (English) — years, description
- [ ] Closing tribute paragraph (Hindi)
- [ ] Diya label — "Light a diya for Dadi" → "Light a diya for Nana"
- [ ] Diya label Hindi
- [ ] Om Shanti text (keep as-is or customize)
- [ ] Birth–death years

## App.jsx — Footer
- [ ] Footer links — Update as needed
- [ ] WhatsApp share link — Update name and URL
- [ ] Family name (e.g. "The Bhargava Family" → appropriate family name)
- [ ] Family name Hindi

## App.jsx — Diya Component
- [ ] "Diya lit for Dadi" → "Diya lit for Nana"
- [ ] Hindi label for diya

---

## Memories.jsx
- [ ] Google Sheet ID (`SHEET_ID`) — Create new Google Sheet for Nana
- [ ] Google Form URL (`GOOGLE_FORM_URL`) — Create new Google Form
- [ ] Hero title & Hindi
- [ ] Subtitle text — Replace "Kalpana" with Nana's name
- [ ] Subtitle Hindi text
- [ ] "Share a Memory or Condolence" button text

## PersonalMemories.jsx
- [ ] Decide: Keep, rewrite, or remove this section entirely
- [ ] If keeping: Update all personal memory content
- [ ] Nav title — "Manan's Memories with Dadi" → appropriate
- [ ] Heading Hindi
- [ ] All memory sections and text

---

## LifeStory.jsx
- [ ] Full rewrite — Replace entire life story narrative with Nana's story
- [ ] Hero heading & Hindi
- [ ] Meta line (e.g. "A narrative compiled from...")
- [ ] Disclaimer text (English & Hindi)
- [ ] All chapters/sections
- [ ] Back navigation link text

## lifeStoryHindi.js
- [ ] Full rewrite — Hindi translation of Nana's life story

## lifeStoryTranslit.js
- [ ] Full rewrite — Transliteration of Nana's life story (or remove if not needed)

---

## Photos (public/photos/)
- [ ] Remove all of Dadi's photos
- [ ] Add Nana's photos
- [ ] Update all `<img>` references in App.jsx, LifeStory.jsx, etc.

## Favicon (public/favicon.svg)
- [ ] Update or keep as-is

---

## Deployment
- [ ] Create GitHub repo (e.g. `mananb77/nana`)
- [ ] Add `.github/workflows/deploy.yml`
- [ ] Set up GitHub Pages
- [ ] Verify base path is `/nana/` in vite.config.js (**already done**)
- [ ] Verify basename is `/nana/` in main.jsx (**already done**)
