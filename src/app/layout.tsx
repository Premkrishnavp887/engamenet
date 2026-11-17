import type { Metadata, Viewport } from 'next';
import { headers } from 'next/headers';
import './globals.css';
import { invitationConfig } from '@/config/invitation';

export async function generateMetadata(): Promise<Metadata> {
  let siteUrl = invitationConfig.seo.url;
  try {
    const headersList = await headers();
    const host = headersList.get('x-forwarded-host') || headersList.get('host');
    const proto =
      headersList.get('x-forwarded-proto') || (host && host.includes('localhost') ? 'http' : 'https');
    if (host) {
      siteUrl = `${proto}://${host}`;
    }
  } catch {
    // fallback to default
  }

  const ogImageUrl = `${siteUrl}/images/og-image.jpg`;

  return {
    metadataBase: new URL(siteUrl),
    title: invitationConfig.seo.title,
    description: invitationConfig.seo.description,
    keywords: [
      'Jyothi and Mridul',
      'Engagement Invitation',
      'Neelamkulagara Devi Temple',
      'Kerala Wedding',
      'Indian Engagement',
      '22 November 2026',
    ],
    authors: [{ name: 'The Families of Jyothi & Mridul' }],
    openGraph: {
      title: invitationConfig.seo.title,
      description: invitationConfig.seo.description,
      url: siteUrl,
      siteName: 'Jyothi & Mridul Engagement Invitation',
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 665,
          alt: 'Mridul & Jyothi Engagement Ceremony - 22 November 2026',
        },
      ],
      locale: 'en_IN',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: invitationConfig.seo.title,
      description: invitationConfig.seo.description,
      images: [ogImageUrl],
    },
    icons: {
      icon: '/images/ganesha-hero.png',
    },
  };
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#390D1C',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600;700;800;900&family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400;1,600&family=Great+Vibes&family=Montserrat:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased bg-[#390D1C] text-[#F2E5D1] min-h-screen">
        {children}
      </body>
    </html>
  );
}
