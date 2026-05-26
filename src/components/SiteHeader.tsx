'use client';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { navLinks, siteInfo } from '@/lib/site-data';
import MobileNav from './MobileNav';

export default function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [navOpen, setNavOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Lock body scroll when nav is open
  useEffect(() => {
    document.body.style.overflow = navOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [navOpen]);

  const headerClass = `site-header${scrolled ? ' scrolled' : ''}${navOpen ? ' nav-open' : ''}`;

  return (
    <>
      <header className={headerClass} id="siteHeader">
        <div className="header-inner">
          <nav className="nav-left">
            {navLinks.map(link => (
              <Link key={link.href} href={link.href} className={pathname === link.href ? 'active' : ''}>
                {link.label}
              </Link>
            ))}
          </nav>
          <Link href="/" className="logo">
            <span className="logo-mark">Maverick</span>
            <span className="logo-text">Chiropractic</span>
            <span className="logo-line"></span>
          </Link>
          <div className="nav-right">
            <Link href={siteInfo.bookingUrl} className="btn btn-primary">Book Now</Link>
          </div>
          <button
            className={`menu-toggle${navOpen ? ' active' : ''}`}
            onClick={() => setNavOpen(!navOpen)}
            aria-label="Menu"
          >
            <span></span><span></span><span></span>
          </button>
        </div>
      </header>
      <MobileNav isOpen={navOpen} onClose={() => setNavOpen(false)} pathname={pathname} />
    </>
  );
}
