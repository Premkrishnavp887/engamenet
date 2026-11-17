# Jyothi & Mridhul – Luxury Digital Engagement Invitation Website

An exceptionally beautiful, cinematic, mobile-first Indian engagement invitation website crafted with **Next.js 16**, **React 19**, **TypeScript**, **Tailwind CSS v4**, and **Framer Motion**.

---

## 🌟 Visual Identity & Creative Direction

- **Theme**: Deep Plum Purple + Muted Antique Gold (closely matched to the authentic purple-and-gold reference artwork).
- **Color Palette**:
  - Deep Plum Purple: `#34112F`
  - Dark Aubergine: `#260C26`
  - Rich Purple: `#461B43`
  - Muted Antique Gold: `#C49A58`
  - Soft Champagne Gold: `#D9B77B`
  - Warm Ivory: `#F7EBDD`
- **Avoids**: Emerald green, burgundy, neon purple, overly saturated yellow gold, and excessive glowing effects.
- **Tone**: Devotional, royal, warm, and sophisticated traditional Hindu engagement invitation.

---

## 🕉️ 1. Opening Screen — 3D Lord Ganesha
- Features the authentic 3D golden Lord Ganesha artwork with purple silk draped on a golden lotus throne (`public/images/ganesha-hero.png`).
- Preserved uncropped: crown, idol, lotus pedestal, and diyas are fully visible.
- Centered on a full-screen deep plum canvas with subtle floating golden dust particles and soft ambient lighting.
- Devotional Invocation:
  ```
  ॥ श्री गणेशाय नमः ॥
  With the divine blessings of Lord Ganesha
  ```
- **"OPEN INVITATION"** Button: Refined button with thin antique-gold border, transparent plum background, and elegant typography.

---

## 🪷 2. Cinematic Mandala Opening Animation
- Separate SVG mandala layer behind the artwork with authentic radiating teardrop/paisley flames and beaded crown rings.
- On clicking **"Open Invitation"**:
  1. The separate mandala expands outward.
  2. Soft golden light emerges from the centre.
  3. The ornamental circle gently dissolves.
  4. The Ganesha opening screen fades away.
  5. The engagement invitation smoothly reveals with couple names **JYOTHI & MRIDHUL**.

---

## 📜 3. Main Ceremonial Invitation
- Together with the blessings of our families
- We joyfully invite you to celebrate the engagement ceremony of:
  # JYOTHI & MRIDHUL
- *“Two hearts, one beautiful beginning.”*
- Deep plum card background with fine antique-gold borders and corner flourishes.

---

## 📅 4. Engagement Details (Ivory Card)
- Traditional warm ivory card (`#F7EBDD`) with fine antique-gold borders (`#C49A58`).
- **Date**: Sunday, 22 November 2026
- **Time**: 11:45 AM (Auspicious Muhurtham)
- **Venue**: Neelamkulagara Devi Temple
- Functional controls:
  - **Add to Calendar**: Google Calendar link + `.ics` download for Apple & Outlook.
  - **Get Directions**: Pending location notice (directions button marked as pending until the family supplies the exact pin, preventing invented addresses).

---

## ⏳ 5. Real-Time Countdown
- Counts down to **22 November 2026, 11:45 AM IST** (`Asia/Kolkata` timezone).
- Days | Hours | Minutes | Seconds in large, elegant gold numerals against deep plum cards.
- Automatically halts at zero when the auspicious time begins.

---

## 👨‍👩‍👧‍👦 6. Family Invitation & Elders' Blessings
- Message:
  > *"With immense happiness and the blessings of our elders, we invite you to join us as we celebrate this beautiful milestone in their lives.  
  > Your presence and blessings will make this occasion even more special."*
- Configurable placeholders for bride's parents, groom's parents, and family residence.

---

## 🖼️ 7. Photo Gallery & Full-Screen Lightbox
- 4-photo responsive gallery in antique-gold frames.
- Bespoke traditional SVG placeholders in plum & gold (avoiding random stock photography).
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

Served locally at `http://localhost:3000`.
