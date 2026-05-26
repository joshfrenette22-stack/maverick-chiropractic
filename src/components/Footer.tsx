import Link from 'next/link';
import { siteInfo, footerLinks, hours, legalLinks } from '@/lib/site-data';

export default function Footer() {
  return (
    <footer className="site-footer" id="contact">
      <div className="footer-grid">
        {/* Column 1: Brand */}
        <div className="footer-brand">
          <Link href="/" className="logo" style={{ alignItems: 'flex-start' }}>
            <span className="logo-mark">Maverick</span>
            <span className="logo-text">Chiropractic</span>
            <span className="logo-line"></span>
          </Link>
          <p className="tagline">{siteInfo.tagline}</p>
          <a href={siteInfo.instagramUrl} className="social-link" aria-label="Instagram" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
            {/* Instagram SVG icon - 20x20 */}
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <rect x="2" y="2" width="20" height="20" rx="5"/>
              <circle cx="12" cy="12" r="5"/>
              <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none"/>
            </svg>
            <span style={{ fontFamily: 'var(--font-body)', fontSize: '12px', fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase' as const }}>{siteInfo.instagram}</span>
          </a>
        </div>

        {/* Column 2: Site links */}
        <div className="footer-col">
          <h4>Site</h4>
          {footerLinks.map(link => (
            <Link key={link.href} href={link.href}>{link.label}</Link>
          ))}
        </div>

        {/* Column 3: Visit (address + hours + directions) */}
        <div className="footer-col">
          <h4>Visit</h4>
          <p>{siteInfo.address.line1}<br/>{siteInfo.address.line2}<br/>{siteInfo.address.city}, {siteInfo.address.state} {siteInfo.address.zip}</p>
          <p style={{ marginTop: '12px' }}>
            {hours.map((h, i) => (
              <span key={i}>{h.day} &middot; {h.time}{i < hours.length - 1 ? <br/> : null}</span>
            ))}
          </p>
          <a href={siteInfo.directionsUrl} style={{ color: 'var(--color-moss)', opacity: 1, marginTop: '12px', fontSize: '13px', letterSpacing: '0.12em', textTransform: 'uppercase' as const, display: 'block' }}>Get Directions &rarr;</a>
        </div>

        {/* Column 4: Contact */}
        <div className="footer-col">
          <h4>Contact</h4>
          <p>{siteInfo.email}</p>
          <Link href={siteInfo.bookingUrl} className="btn btn-primary">Book Now</Link>
        </div>
      </div>

      <div className="footer-bottom">
        <span>&copy; {new Date().getFullYear()} Maverick Chiropractic Care. All rights reserved.</span>
        <div className="footer-legal">
          {legalLinks.map(link => (
            <a key={link.label} href={link.href}>{link.label}</a>
          ))}
        </div>
      </div>
    </footer>
  );
}
