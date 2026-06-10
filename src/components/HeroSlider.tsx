'use client';

import { useState, useEffect } from 'react';

const slides = [
  'https://images.unsplash.com/photo-1511895426328-dc8714191300?w=1600&fit=crop&q=80',
  'https://images.unsplash.com/photo-1491013516836-7db643ee125a?w=1600&fit=crop&q=80',
  'https://images.unsplash.com/photo-1540479859555-17af45c78602?w=1600&fit=crop&q=80',
  'https://images.unsplash.com/photo-1609220136736-443140cffec6?w=1600&fit=crop&q=80',
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
