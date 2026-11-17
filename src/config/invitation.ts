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
    timestamp: string; // '2026-11-22T11:45:00+05:30' (Asia/Kolkata timezone)
    dayOfWeek: string;
    muhurtham: string;
    venueName: string;
    venueSubtext: string;
    address: string; // Left un-invented until exact details provided
    city?: string;
    state?: string;
    mapsUrl: string; // Kept empty / pending until exact link is provided
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
  showGallery: boolean;
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
    timestamp: '2026-11-22T11:45:00+05:30', // Asia/Kolkata timezone
    dayOfWeek: 'Sunday',
    muhurtham: 'Auspicious Muhurtham: 11:45 AM',
    venueName: 'Neelamkulagara Devi Temple',
    venueSubtext: 'Devi Sannidhi, Sacred Temple Grounds',
    address: '', // Exact address to be supplied by family
    mapsUrl: '', // Explicitly pending exact Google Maps URL as instructed
    calendarEvent: {
      title: 'Engagement Ceremony of Jyothi & Mridhul',
      description: 'Join us to celebrate the auspicious engagement ceremony of Jyothi & Mridhul with divine blessings at Neelamkulagara Devi Temple.',
      location: 'Neelamkulagara Devi Temple',
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
      'Your presence and blessings will make this occasion even more special.',
    closingSalutation: 'Your presence is our greatest blessing.',
    closingSignature: 'With love and regards,\nThe Families',
  },
  showGallery: true,
  gallery: [
    {
      id: 'photo-1',
      src: '/images/photo-1.jpg',
      alt: 'Jyothi and Mridhul in traditional Kerala engagement attire',
      caption: 'Traditional Elegance',
    },
    {
      id: 'photo-2',
      src: '/images/photo-2.jpg',
      alt: 'Jyothi and Mridhul sharing a joyful, candid moment',
      caption: 'Shared Smiles & Laughter',
    },
    {
      id: 'photo-3',
      src: '/images/photo-3.jpg',
      alt: 'Jyothi and Mridhul radiant in festive yellow',
      caption: 'Sunlit Happiness',
    },
    {
      id: 'photo-4',
      src: '/images/photo-4.jpg',
      alt: 'Jyothi and Mridhul embracing their beautiful beginning',
      caption: 'Two Hearts, One Journey',
    },
  ],
  audio: {
    enabled: true,
    title: 'Auspicious Temple Sitar & Tanpura Raga',
    raga: 'Raga Kalyani (Auspicious)',
  },
  seo: {
    title: 'Jyothi & Mridhul | Luxury Engagement Invitation | 22 November 2026',
    description: 'We joyfully invite you to celebrate the traditional engagement ceremony of Jyothi & Mridhul on Sunday, 22 November 2026 at Neelamkulagara Devi Temple.',
    ogImage: '/images/ganesha-hero.png',
    url: 'https://jyothi-mridhul-engagement.vercel.app',
  },
};
