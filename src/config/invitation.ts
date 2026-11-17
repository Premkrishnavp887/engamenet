export interface ParentInfo {
  relation: string;
  father: string;
  mother: string;
  names: string;
  residence: string;
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
    timestamp: string; // '2026-11-22T11:45:00+05:30' (Asia/Kolkata timezone)
    dayOfWeek: string;
    muhurtham: string;
    venueName: string;
    venueSubtext: string;
    address: string;
    city?: string;
    state?: string;
    mapsUrl: string;
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
    blessingSubheading: string;
    messageParagraph1: string;
    messageParagraph2: string;
    closingSalutation: string;
    closingSignature: string;
  };
  showGallery: boolean;
  gallery: GalleryPhoto[];
  audio: {
    enabled: boolean;
    title: string;
    raga: string;
    src: string;
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
      father: "V P Pradeep",
      mother: "Minimol N K",
      names: "V P Pradeep & Minimol N K",
      residence: "Vellimattom (H), Mattoor, Kalady.",
    },
    tagline: 'Grace, warmth and gentle joy',
  },
  groom: {
    firstName: 'Mridul',
    fullName: 'Mridul',
    parents: {
      relation: "Son of",
      father: "Muralikrishnan P K",
      mother: "Remadevi K S",
      names: "Muralikrishnan P K & Remadevi K S",
      residence: "Puthenpurakkal House, Maliankara P O, 683516.",
    },
    tagline: 'Strength, wisdom and boundless affection',
  },
  event: {
    title: 'Engagement Ceremony',
    subtitle: 'Two hearts, one beautiful beginning',
    date: '2026-11-22',
    time: '11:45 AM',
    timestamp: '2026-11-22T11:45:00+05:30', // Asia/Kolkata timezone
    dayOfWeek: 'Sunday',
    muhurtham: 'Auspicious Muhurtham: 11:45 AM',
    venueName: 'Neelamkulagara Devi Temple',
    venueSubtext: 'Airport Road',
    address: 'Neelamkulagara Devi Temple, Airport Road',
    mapsUrl: 'https://maps.app.goo.gl/Z7ws1uAo6rT7hzYM9',
    calendarEvent: {
      title: 'Engagement Ceremony of Jyothi & Mridul',
      description:
        'Join us to celebrate the auspicious engagement ceremony of Jyothi & Mridul with divine blessings at Neelamkulagara Devi Temple.\n\nGoogle Maps: https://maps.app.goo.gl/Z7ws1uAo6rT7hzYM9',
      location: 'Neelamkulagara Devi Temple, Airport Road',
      startTime: '20261122T061500Z', // 11:45 AM IST in UTC
      endTime: '20261122T093000Z',   // 03:00 PM IST in UTC
    },
  },
  familyBlessing: {
    invocationSanskrit: '॥ श्री गणेशाय नमः ॥',
    invocationEnglish: 'With the divine blessings of Lord Ganesha',
    heading: 'Together With Our Families',
    blessingSubheading: 'With the blessings of',
    messageParagraph1:
      'With immense happiness and the blessings of our elders, we invite you to join us as we celebrate this beautiful milestone in their lives.',
    messageParagraph2:
      'Your presence and blessings will make this occasion even more special.',
    closingSalutation: 'Your presence is our greatest blessing.',
    closingSignature: 'With love and regards,\nThe Families',
  },
  showGallery: true,
  gallery: [
    {
      id: 'photo-1',
      src: '/images/photo-1.jpg',
      alt: 'Jyothi and Mridul in traditional Kerala engagement attire',
      caption: 'Traditional Elegance',
    },
    {
      id: 'photo-2',
      src: '/images/photo-2.jpg',
      alt: 'Jyothi and Mridul sharing a joyful, candid moment',
      caption: 'Shared Smiles & Laughter',
    },
    {
      id: 'photo-3',
      src: '/images/photo-3.jpg',
      alt: 'Jyothi and Mridul radiant in festive yellow',
      caption: 'Sunlit Happiness',
    },
    {
      id: 'photo-4',
      src: '/images/photo-4.jpg',
      alt: 'Jyothi and Mridul embracing their beautiful beginning',
      caption: 'Two Hearts, One Journey',
    },
  ],
  audio: {
    enabled: true,
    title: 'Engagement Celebration Music',
    raga: 'Traditional Celebration Theme',
    src: '/audio/background-music.mp3',
  },
  seo: {
    title: 'Jyothi and Mridul | November 22',
    description:
      'We joyfully invite you to the engagement ceremony of Jyothi & Mridul | Sunday, November 22, 2026 | Neelamkulagara Devi Temple, Airport Road',
    ogImage: '/images/og-image.jpg',
    url: 'https://jyothi-mridul-engagement.vercel.app',
  },
};
