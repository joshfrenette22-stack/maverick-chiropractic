'use client';

import { useState, useEffect } from 'react';

const slides = [
  'https://images.unsplash.com/photo-1551632811-561732d1e306?w=1600&fit=crop&q=80',
  'https://images.unsplash.com/photo-1517438322307-e67111335449?w=1600&fit=crop&q=80',
  'https://images.unsplash.com/photo-1526676037777-05a232554f77?w=1600&fit=crop&q=80',
  'https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=1600&fit=crop&q=80',
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      {slides.map((src, i) => (
        <div
          key={src}
          className={`hero-slide ${i === current ? 'hero-slide-active' : ''}`}
          style={{ backgroundImage: `url('${src}')` }}
        />
      ))}
    </>
  );
}
