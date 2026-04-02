'use client';

import Script from 'next/script';
import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    gtag: (...args: any[]) => void;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    dataLayer: any[];
  }
}

// Inner component: tracks route changes in App Router
function GAPageTracker() {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window.gtag === 'function' && GA_ID) {
      window.gtag('config', GA_ID, { page_path: pathname });
    }
  }, [pathname]);

  return null;
}

// Main export: renders GA scripts + page tracker
export function GoogleAnalytics() {
  if (!GA_ID) return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_ID}');
        `}
      </Script>
      <GAPageTracker />
    </>
  );
}
