import { ClerkProvider } from '@clerk/nextjs';
import type { Metadata } from 'next';
import { GoogleAnalytics } from '@/components/shared/google-analytics';
import './globals.css';

// Check if Clerk is configured
const isClerkConfigured = process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY &&
  !process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY.includes('placeholder');

export const metadata: Metadata = {
  title: 'SmallPets Club | Expert Care Guides for Your Furry Friends',
  description: 'From hamsters to chinchillas, find everything you need to give your exotic pets the love and care they deserve. Expert-approved care guides, vet-reviewed content, and a supportive community.',
  keywords: ['exotic pet care', 'hamster care', 'chinchilla care', 'hedgehog care', 'fancy rat care', 'pet guides', 'pet health'],
  authors: [{ name: 'SmallPets Club' }],
  openGraph: {
    title: 'SmallPets Club | Expert Care Guides',
    description: 'Expert care guides for hamsters, chinchillas, hedgehogs, and fancy rats.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SmallPets Club',
    description: 'Expert care guides for your exotic pets.',
  },
  // Google Search Console verification
  // Set NEXT_PUBLIC_GSC_VERIFICATION in .env.local after getting the code from GSC
  ...(process.env.NEXT_PUBLIC_GSC_VERIFICATION && {
    verification: {
      google: process.env.NEXT_PUBLIC_GSC_VERIFICATION,
    },
  }),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="antialiased">
        {isClerkConfigured ? (
          <ClerkProvider>{children}</ClerkProvider>
        ) : (
          <>{children}</>
        )}
        <GoogleAnalytics />
      </body>
    </html>
  );
}
