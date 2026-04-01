'use client';

import { useState, useEffect } from 'react';

const announcements = [
  'New: Complete Hamster Care Guide just added!',
  'Join 10,000+ pet parents in our community',
  'Free care tips delivered weekly',
];

export function AnnouncementBar() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % announcements.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-accent text-white py-2.5 px-4 text-center text-sm">
      <p className="animate-pulse">{announcements[current]}</p>
    </div>
  );
}