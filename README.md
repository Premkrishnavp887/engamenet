# Jyothi & Mridhul – Premium Digital Engagement Invitation

A luxurious, cinematic, mobile-first Indian engagement invitation website crafted with **Next.js 16**, **React 19**, **TypeScript**, **Tailwind CSS v4**, and **Framer Motion**.

---

## 🌟 Creative & Visual Direction

- **Royal Palette**: Deep Emerald Green (`#064B38`), Forest Green (`#173B2D`), Antique Gold (`#B99A51`), Warm Ivory (`#F5EBD5`), and Midnight Green (`#092D23`).
- **Signature Opening Experience**: Centered 3D Golden Lord Ganesha on an auspicious golden lotus throne with volumetric golden lighting, gently rotating ornate mandala, hanging temple bells, flickering brass diyas, and floating gold dust particles.
- **Mandala Opening Interaction**: When the visitor clicks **"Open Invitation"**, the golden mandala expands outward with a radial flare and gentle particle burst, dissolving smoothly into the main ceremonial invitation.
- **Typography**: Royal serifs (*Cormorant Garamond*, *Playfair Display*, *Cinzel*) paired with elegant script accents (*Great Vibes*) and crisp readable body type (*Montserrat*).
- **Mobile-First Experience**: Designed and proportioned for mobile viewports (360px, 390px, 430px) as well as tablets and desktop screens without horizontal scroll.
- **Interactive Audio**: Authentic Indian meditative background audio (Tanpura drone at 136.1Hz Om tonic + gentle temple chimes) generated via Web Audio API with zero external dependencies. **Never autoplays**; starts only after explicit user interaction with a floating audio toggle.

---

## 🗂️ Project Structure

```
/home/prem/engagement/
├── public/
│   ├── images/
│   │   ├── ganesha-hero.jpg      # High-detail 3D Golden Ganesha idol hero asset
│   │   ├── gallery-1.svg         # Engagement ring exchange & promise artwork
│   │   ├── gallery-2.svg         # Neelamkulagara Devi Temple sanctuary artwork
│   │   ├── gallery-3.svg         # Traditional Kerala kasavu & heritage ornaments
│   │   └── gallery-4.svg         # Eternal promise & couple union artwork
├── src/
│   ├── app/
│   │   ├── globals.css           # Tailwind v4, custom gold gradients, flicker animations
│   │   ├── layout.tsx            # Google fonts, SEO & WhatsApp OpenGraph metadata
│   │   └── page.tsx              # State management between Opening Experience and Main Invitation
│   ├── config/
│   │   └── invitation.ts         # Centralized configuration (all text, dates, names, maps)
│   ├── components/
│   │   ├── OpeningExperience.tsx # 3D Ganesha idol, rotating mandala & "Open Invitation" CTA
│   │   ├── MandalaBackground.tsx # Scalable SVG sacred geometry mandala with GPU animations
│   │   ├── GoldenParticles.tsx   # Canvas-based subtle floating gold dust with burst physics
│   │   ├── FloatingDiyas.tsx     # Authentic brass diyas with realistic flickering flame
│   │   ├── OrnamentalBorders.tsx # Lotus motifs, gold filigree dividers, corner flourishes
│   │   ├── MainInvitation.tsx    # "JYOTHI & MRIDHUL" royal reveal with gold accents
│   │   ├── EngagementDetails.tsx # Ivory card with gold border, Add to Calendar (.ics & Google)
│   │   ├── CountdownTimer.tsx    # Real-time countdown to 22 Nov 2026, 11:45 AM (stops at 0)
│   │   ├── FamilyMessage.tsx     # Elders' blessings with configurable bride/groom parents
│   │   ├── PhotoGallery.tsx      # Gold photo frames with soft hover and responsive grid
│   │   ├── LightboxModal.tsx     # Full-screen photo viewer with keyboard & touch navigation
│   │   ├── VenueSection.tsx      # Neelamkulagara Devi Temple, map preview & directions CTA
│   │   ├── ClosingSection.tsx    # "Your presence is our greatest blessing", Ganesha emblem
│   │   └── AudioPlayer.tsx       # Floating audio controller with animated soundwaves
│   └── utils/
│       ├── audio.ts              # Indian ambient acoustic synth (Web Audio API)
│       └── calendar.ts           # Google Calendar URL builder & .ics file downloader
├── package.json
├── tsconfig.json
├── postcss.config.mjs
└── next.config.ts
```

---

## ⚙️ Centralized Configuration (`src/config/invitation.ts`)

All content is maintained in a single configuration file:

```typescript
export const invitationConfig = {
  bride: {
    firstName: 'Jyothi',
    fullName: 'Jyothi',
    parents: {
      relation: "Daughter of",
      names: "Smt. & Sri. (Bride's Parents)",
      residence: "Kerala, India",
    },
    tagline: 'Grace, warmth and gentle joy',
  },
  groom: {
    firstName: 'Mridhul',
    fullName: 'Mridhul',
    parents: {
      relation: "Son of",
      names: "Smt. & Sri. (Groom's Parents)",
      residence: "Kerala, India",
    },
    tagline: 'Strength, wisdom and boundless affection',
  },
  event: {
    title: 'Engagement Ceremony',
    subtitle: 'Two hearts, one beautiful beginning',
    date: '2026-11-22',
    time: '11:45 AM',
    timestamp: '2026-11-22T11:45:00+05:30',
    dayOfWeek: 'Sunday',
    muhurtham: 'Auspicious Muhurtham: 11:45 AM',
    venueName: 'Neelamkulagara Devi Temple',
    venueSubtext: 'Devi Sannidhi, Sacred Temple Grounds',
    address: 'Neelamkulagara Devi Temple',
    city: 'Alappuzha / Kollam Region',
    state: 'Kerala, India',
    // Update with exact Google Maps URL when available:
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Neelamkulagara+Devi+Temple',
  },
  // ... family messages, gallery items, audio settings, and SEO
};
```

---

## 🚀 Running the Project

```bash
# Start production server
npm run start

# Or run in development mode
npm run dev

# Build the project
npm run build
```

The application is served at `http://localhost:3000`.
