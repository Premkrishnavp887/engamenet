# Jyothi & Mridul – Luxury Digital Engagement Invitation Website

An exceptionally beautiful, cinematic, mobile-first Indian engagement invitation website crafted with **Next.js 16**, **React 19**, **TypeScript**, **Tailwind CSS v4**, and **Framer Motion**.

---

## 🌟 Visual Identity & Color Palette

**Theme: Deep Burgundy Velvet + Muted Antique Gold**

- **Deep Burgundy**: `#390D1C` (Primary background, rich velvet feel)
- **Wine Red**: `#58172A` (Layered radial glow & ambient warmth)
- **Muted Maroon**: `#722F40` (Card depth & highlights)
- **Antique Gold**: `#C5A16A` (Mandala linework, borders & filigree dividers)
- **Champagne Gold**: `#E3C995` (Primary typography & numeral highlights)
- **Warm Ivory**: `#F2E5D1` (Ceremonial details card background)

---

## 🕉️ 1. Opening Screen — 3D Lord Ganesha
- Features the authentic 3D golden Lord Ganesha artwork (`public/images/ganesha-hero.png`) preserved exactly as provided — uncropped, unregenerated, with no heavy filters.
- Subtle burgundy transition and perimeter feathering around the artwork to blend naturally with the deep burgundy velvet canvas.
- Devotional Invocation:
  ```
  ॥ श्री गणेशाय नमः ॥
  ```
- **"OPEN INVITATION"** Button: Refined button with thin antique-gold border (`#C5A16A`), transparent burgundy background (`rgba(57, 13, 28, 0.7)`), and champagne gold typography.

---

## 🪷 2. Cinematic Mandala Opening Animation
- Separate SVG mandala layer behind the artwork with authentic radiating teardrop/paisley flames and beaded crown rings in Antique Gold.
- On clicking **"Open Invitation"**:
  1. The separate mandala expands outward.
  2. Soft golden light emerges from the centre.
  3. The ornamental circle gently dissolves.
  4. The Ganesha opening screen fades away.
  5. The engagement invitation smoothly reveals with couple names **JYOTHI & MRIDUL**.

---

## 📜 3. Main Ceremonial Invitation
- Together with the blessings of our families
- We joyfully invite you to celebrate the engagement ceremony of:
  # JYOTHI & MRIDUL
- *“Two hearts, one beautiful beginning.”*
- Deep burgundy card background with fine antique-gold borders and corner flourishes.

---

## 📅 4. Engagement Details (Ivory Card)
- Traditional warm ivory card (`#F2E5D1`) with fine antique-gold borders (`#C5A16A`) and deep burgundy typography (`#390D1C`).
- **Date**: Sunday, 22 November 2026
- **Time**: 11:45 AM (Auspicious Muhurtham)
- **Venue**: Neelamkulagara Devi Temple
- Controls:
  - **Add to Calendar**: Google Calendar link + `.ics` download for Apple & Outlook.
  - **Get Directions**: Directions button marked as pending location notice until the exact pin is supplied.

---

## ⏳ 5. Real-Time Countdown
- Counts down to **22 November 2026, 11:45 AM IST** (`Asia/Kolkata` timezone).
- Days | Hours | Minutes | Seconds in large, elegant champagne-gold numerals against deep burgundy cards.
- Automatically halts at zero when the auspicious time begins.

---

## 👨‍👩‍👧‍👦 6. Family Invitation & Elders' Blessings
- Message:
  > *"With immense happiness and the blessings of our elders, we invite you to join us as we celebrate this beautiful milestone in their lives.  
  > Your presence and blessings will make this occasion even more special."*
- Configurable placeholders for bride's parents, groom's parents, and family residence.

---

## 🖼️ 7. Real Couple Photo Gallery & Lightbox
- Features the genuine photographs of Jyothi & Mridul in antique-gold frames.
- Interactive Lightbox with keyboard navigation (Esc, Arrow keys) and touch support.

---

## 🛕 8. Sacred Venue & Closing Section
- **Neelamkulagara Devi Temple** section with location status.
- Closing blessing:
  > *"Your presence is our greatest blessing."*  
  > *"With love and regards, The Families"*
- Small antique-gold Ganesha motif and delicate mandala decorations with soft glow.

---

## 🎵 9. Traditional Ambient Music
- Optional traditional instrumental music (Web Audio Tanpura drone at 136.1Hz Om tonic + gentle temple chimes).
- **Never autoplays**; muted by default; started only upon explicit visitor tap on the floating music toggle.

---

## 📱 10. Mobile-First Optimization
- Responsive down to 360px, 390px, 430px, tablet, and desktop viewports.
- No horizontal scrolling.
- Safe-area support.
- Supports `prefers-reduced-motion`.

---

## 🛠️ Running the Application

```bash
# Start production server
npm run start

# Run development server
npm run dev

# Build
npm run build
```

Served locally at `http://localhost:3001` (or configured port).
