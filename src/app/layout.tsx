import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Exotic Pet Care | Expert Care Guides for Your Furry Friends',
  description: 'From hamsters to chinchillas, find everything you need to give your exotic pets the love and care they deserve. Expert-approved care guides, vet-reviewed content, and a supportive community.',
  keywords: ['exotic pet care', 'hamster care', 'chinchilla care', 'hedgehog care', 'fancy rat care', 'pet guides', 'pet health'],
  authors: [{ name: 'Exotic Pet Care' }],
  openGraph: {
    title: 'Exotic Pet Care | Expert Care Guides',
    description: 'Expert care guides for hamsters, chinchillas, hedgehogs, and fancy rats.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Exotic Pet Care',
    description: 'Expert care guides for your exotic pets.',
  },
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
        {children}
      </body>
    </html>
  );
}
