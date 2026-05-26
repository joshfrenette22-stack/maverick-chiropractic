'use client';
import Link from 'next/link';
import { navLinks, siteInfo } from '@/lib/site-data';

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
  pathname: string;
}

export default function MobileNav({ isOpen, onClose, pathname }: MobileNavProps) {
  return (
    <nav className={`mobile-nav${isOpen ? ' open' : ''}`}>
      <div className="mobile-nav-inner">
        <div className="mobile-nav-brand">
          <p className="mobile-nav-wordmark">Maverick</p>
          <span className="eyebrow">Chiropractic</span>
          <div className="mobile-nav-divider"></div>
        </div>
        <div className="mobile-nav-links">
          {navLinks.map(link => (
            <Link
              key={link.href}
              href={link.href}
              className={pathname === link.href ? 'active' : ''}
              onClick={onClose}
            >
              {link.label}
            </Link>
          ))}
        </div>
        <div className="mobile-nav-cta">
          <Link href={siteInfo.bookingUrl} className="btn btn-primary" onClick={onClose}>
            Book Your Visit
          </Link>
        </div>
        <div className="mobile-nav-footer">
          <div className="mobile-nav-footer-rule"></div>
          <div className="mobile-nav-info">
            <a href={`mailto:${siteInfo.email}`}>Email</a>
          </div>
          <p className="mobile-nav-location">Windsor, Colorado</p>
        </div>
      </div>
    </nav>
  );
}
