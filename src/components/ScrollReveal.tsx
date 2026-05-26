'use client';
import { useRef, useEffect, useState } from 'react';

export default function ScrollReveal({
  children, variant = 'reveal', delay = 0, className = '', as: Tag = 'div'
}: {
  children: React.ReactNode;
  variant?: 'reveal' | 'reveal-scale' | 'reveal-clip' | 'reveal-left' | 'reveal-right' | 'reveal-rotate';
  delay?: 0 | 1 | 2 | 3 | 4;
  className?: string;
  as?: keyof React.JSX.IntrinsicElements;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const delayClass = delay > 0 ? ` reveal-delay-${delay}` : '';
  const classes = `${variant}${delayClass}${visible ? ' visible' : ''}${className ? ` ${className}` : ''}`;

  return (
    // @ts-expect-error - dynamic element type
    <Tag ref={ref} className={classes}>
      {children}
    </Tag>
  );
}
