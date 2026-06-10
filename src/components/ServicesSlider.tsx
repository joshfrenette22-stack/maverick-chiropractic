'use client';

import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';

interface Service {
  title: string;
  desc: string;
  href: string;
  img: string;
  alt: string;
}

export default function ServicesSlider({ services }: { services: Service[] }) {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % services.length);
  }, [services.length]);

  const prev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + services.length) % services.length);
  }, [services.length]);

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [paused, next]);

  const s = services[current];

  return (
    <div
      className="services-slider"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="services-slider-split">
        <div className="services-slider-image">
          {services.map((service, i) => (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              key={service.title}
              src={service.img}
              alt={service.alt}
              className={`services-slider-img ${i === current ? 'active' : ''}`}
            />
          ))}
        </div>
        <div className="services-slider-content">
          <div className="services-slider-counter">
            <span className="services-slider-num">
              {String(current + 1).padStart(2, '0')}
            </span>
            <span className="services-slider-sep">/</span>
            <span className="services-slider-total">
              {String(services.length).padStart(2, '0')}
            </span>
          </div>
          <h3 className="services-slider-title">{s.title}</h3>
          <p className="services-slider-desc">{s.desc}</p>
          <Link href={s.href} className="btn btn-ghost">
            Learn More
          </Link>
          <div className="services-slider-nav">
            <button onClick={prev} aria-label="Previous service" className="slider-arrow">
              <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5"><polyline points="15 18 9 12 15 6" /></svg>
            </button>
            <div className="services-slider-dots">
              {services.map((_, i) => (
                <button
                  key={i}
                  className={`slider-dot ${i === current ? 'active' : ''}`}
                  onClick={() => setCurrent(i)}
                  aria-label={`Go to service ${i + 1}`}
                />
              ))}
            </div>
            <button onClick={next} aria-label="Next service" className="slider-arrow">
              <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5"><polyline points="9 18 15 12 9 6" /></svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
