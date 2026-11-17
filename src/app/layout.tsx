import type { Metadata, Viewport } from 'next';
import './globals.css';
import { invitationConfig } from '@/config/invitation';

export const metadata: Metadata = {
  metadataBase: new URL(invitationConfig.seo.url),
  title: invitationConfig.seo.title,
  description: invitationConfig.seo.description,
  keywords: [
    'Jyothi and Mridhul',
    'Engagement Invitation',
    'Neelamkulagara Devi Temple',
    'Kerala Wedding',
    'Indian Engagement',
    '22 November 2026',
  ],
  authors: [{ name: 'The Families of Jyothi & Mridhul' }],
  openGraph: {
    title: invitationConfig.seo.title,
    description: invitationConfig.seo.description,
    url: invitationConfig.seo.url,
    siteName: 'Jyothi & Mridhul Engagement Invitation',
    images: [
      {
        url: '/images/ganesha-hero.jpg',
        width: 1024,
        height: 682,
        alt: 'Lord Ganesha Auspicious Blessing - Jyothi & Mridhul Engagement',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: invitationConfig.seo.title,
    description: invitationConfig.seo.description,
    images: ['/images/ganesha-hero.jpg'],
  },
  icons: {
    icon: '/images/ganesha-hero.jpg',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#064B38',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600;700;800;900&family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400;1,600&family=Great+Vibes&family=Montserrat:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400&family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-[#092D23] text-[#F5EBD5] min-h-screen selection:bg-[#B99A51]/30 selection:text-[#FAF5EA]">
        {children}
      </body>
    </html>
  );
}
