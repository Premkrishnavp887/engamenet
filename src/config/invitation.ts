export interface ParentInfo {
  relation: string;
  names: string;
  residence?: string;
}

export interface GalleryPhoto {
  id: string;
  src: string;
  alt: string;
  caption: string;
  width?: number;
  height?: number;
}

export interface InvitationConfig {
  bride: {
    firstName: string;
    fullName: string;
    parents: ParentInfo;
    tagline?: string;
  };
  groom: {
    firstName: string;
    fullName: string;
    parents: ParentInfo;
    tagline?: string;
  };
  event: {
    title: string;
    subtitle: string;
    date: string; // ISO date '2026-11-22'
    time: string; // '11:45 AM'
    timestamp: string; // '2026-11-22T11:45:00+05:30'
    dayOfWeek: string;
    muhurtham: string;
    venueName: string;
    venueSubtext: string;
    address: string;
    city: string;
    state: string;
    mapsUrl: string; // configurable, falls back to Google Maps search
    calendarEvent: {
      title: string;
      description: string;
      location: string;
      startTime: string; // 20261122T061500Z (11:45 AM IST is 06:15 UTC)
      endTime: string;   // 20261122T093000Z (03:00 PM IST is 09:30 UTC)
    };
  };
  familyBlessing: {
    invocationSanskrit: string;
    invocationEnglish: string;
    heading: string;
    messageParagraph1: string;
    messageParagraph2: string;
    closingSalutation: string;
    closingSignature: string;
  };
  gallery: GalleryPhoto[];
  audio: {
    enabled: boolean;
    title: string;
    raga: string;
  };
  seo: {
    title: string;
    description: string;
    ogImage: string;
    url: string;
  };
}

export const invitationConfig: InvitationConfig = {
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
    // Configurable Google Maps URL (or direct Google Maps search link)
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Neelamkulagara+Devi+Temple',
    calendarEvent: {
      title: 'Engagement Ceremony of Jyothi & Mridhul',
      description: 'Join us to celebrate the auspicious engagement ceremony of Jyothi & Mridhul with divine blessings at Neelamkulagara Devi Temple.',
      location: 'Neelamkulagara Devi Temple, Kerala',
      startTime: '20261122T061500Z', // 11:45 AM IST in UTC
      endTime: '20261122T093000Z',   // 03:00 PM IST in UTC
    },
  },
  familyBlessing: {
    invocationSanskrit: '॥ श्री गणेशाय नमः ॥',
    invocationEnglish: 'With the divine blessings of Lord Ganesha',
    heading: 'Together With Our Families',
    messageParagraph1:
      'With immense happiness and the blessings of our elders, we invite you to join us as we celebrate this beautiful milestone in their lives.',
    messageParagraph2:
      'Your presence and warm blessings will make this occasion truly sacred and memorable for our families.',
    closingSalutation: 'Your presence is our greatest blessing.',
    closingSignature: 'With love and regards,\nThe Families',
  },
  gallery: [
    {
      id: 'photo-1',
      src: '/images/gallery-1.svg',
      alt: 'Jyothi and Mridhul ring exchange ceremony',
      caption: 'The Promise of Forever',
    },
    {
      id: 'photo-2',
      src: '/images/gallery-2.svg',
      alt: 'Neelamkulagara Devi Temple sacred sanctuary',
      caption: 'Sacred Blessings & Grace',
    },
    {
      id: 'photo-3',
      src: '/images/gallery-3.svg',
      alt: 'Traditional Kerala kasavu & heritage ornaments',
      caption: 'Traditions & Heritage',
    },
    {
      id: 'photo-4',
      src: '/images/gallery-4.svg',
      alt: 'Two hearts united in divine love',
      caption: 'Two Souls, One Beautiful Beginning',
    },
  ],
  audio: {
    enabled: true,
    title: 'Divine Temple Shehnai & Sitar Melody',
    raga: 'Raga Kalyani (Auspicious)',
  },
  seo: {
    title: 'Jyothi & Mridhul | Engagement Invitation | 22 November 2026',
    description: 'We joyfully invite you to celebrate the engagement ceremony of Jyothi & Mridhul on Sunday, 22 November 2026 at Neelamkulagara Devi Temple.',
    ogImage: '/images/ganesha-hero.jpg',
    url: 'https://jyothi-mridhul-engagement.vercel.app',
  },
};
