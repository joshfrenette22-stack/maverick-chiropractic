'use client';

import { useState, useEffect } from 'react';

const slides = [
  'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=1600&fit=crop&q=80',
  'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1600&fit=crop&q=80',
  'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=1600&fit=crop&q=80',
  'https://images.unsplash.com/photo-1545205597-3d9d02c29597?w=1600&fit=crop&q=80',
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
