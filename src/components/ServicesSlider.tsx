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

const INTERVAL = 5000;

export default function ServicesSlider({ services }: { services: Service[] }) {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const [progress, setProgress] = useState(0);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % services.length);
    setProgress(0);
  }, [services.length]);

  const prev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + services.length) % services.length);
    setProgress(0);
  }, [services.length]);

  const goTo = useCallback((i: number) => {
    setCurrent(i);
    setProgress(0);
  }, []);

  useEffect(() => {
    if (paused) return;
    const tick = 50;
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          next();
          return 0;
        }
        return prev + (tick / INTERVAL) * 100;
      });
    }, tick);
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
        <div className="services-slider-content" key={current}>
          <div className="services-slider-counter slide-in-up" style={{ animationDelay: '0ms' }}>
            <span className="services-slider-num">
              {String(current + 1).padStart(2, '0')}
            </span>
            <span className="services-slider-sep">/</span>
            <span className="services-slider-total">
              {String(services.length).padStart(2, '0')}
            </span>
          </div>
          <h3 className="services-slider-title slide-in-up" style={{ animationDelay: '80ms' }}>{s.title}</h3>
          <p className="services-slider-desc slide-in-up" style={{ animationDelay: '160ms' }}>{s.desc}</p>
          <div className="slide-in-up" style={{ animationDelay: '240ms' }}>
            <Link href={s.href} className="btn btn-ghost">
              Learn More
            </Link>
          </div>
          <div className="services-slider-nav slide-in-up" style={{ animationDelay: '300ms' }}>
            <button onClick={prev} aria-label="Previous service" className="slider-arrow">
              <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5"><polyline points="15 18 9 12 15 6" /></svg>
            </button>
            <div className="services-slider-dots">
              {services.map((_, i) => (
                <button
                  key={i}
                  className={`slider-dot ${i === current ? 'active' : ''}`}
                  onClick={() => goTo(i)}
                  aria-label={`Go to service ${i + 1}`}
                >
                  {i === current && (
                    <span
                      className="slider-dot-fill"
                      style={{ transform: `scaleX(${progress / 100})` }}
                    />
                  )}
                </button>
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
