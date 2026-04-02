import { ClerkProvider } from '@clerk/nextjs';
import type { Metadata } from 'next';
import { Varela_Round, Nunito_Sans } from 'next/font/google';
import { GoogleAnalytics } from '@/components/shared/google-analytics';
import './globals.css';

// next/font: self-hosted, zero CLS, automatic font-display: swap
const varelaRound = Varela_Round({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-heading',
  display: 'swap',
});

const nunitoSans = Nunito_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-body',
  display: 'swap',
});

// Check if Clerk is configured
const isClerkConfigured =
  process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY &&
  !process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY.includes('placeholder');

export const metadata: Metadata = {
  metadataBase: new URL('https://www.smallpetsclub.com'),
  title: {
    default: 'SmallPets Club | Expert Care Guides for Your Furry Friends',
    template: '%s | SmallPets Club',
  },
  description:
    'Expert care guides for hamsters, chinchillas, hedgehogs, and fancy rats. Science-backed tips from experienced exotic pet owners and vet-reviewed content.',
  keywords: ['exotic pet care', 'hamster care', 'chinchilla care', 'hedgehog care', 'fancy rat care', 'pet guides'],
  authors: [{ name: 'SmallPets Club' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'SmallPets Club',
    title: 'SmallPets Club | Expert Care Guides',
    description: 'Expert care guides for hamsters, chinchillas, hedgehogs, and fancy rats.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SmallPets Club',
    description: 'Expert care guides for your exotic pets.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://www.smallpetsclub.com',
  },
  // Google Search Console verification
  ...(process.env.NEXT_PUBLIC_GSC_VERIFICATION && {
    verification: {
      google: process.env.NEXT_PUBLIC_GSC_VERIFICATION,
    },
  }),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${varelaRound.variable} ${nunitoSans.variable}`}>
      <body className="antialiased">
        {isClerkConfigured ? <ClerkProvider>{children}</ClerkProvider> : <>{children}</>}
        <GoogleAnalytics />
      </body>
    </html>
  );
}
