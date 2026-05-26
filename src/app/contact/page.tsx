/* eslint-disable @next/next/no-img-element */
import type { Metadata } from 'next';
import Link from 'next/link';
import ScrollReveal from '@/components/ScrollReveal';
import SectionRule from '@/components/SectionRule';
import SectionDivider from '@/components/SectionDivider';
import ClosingCTA from '@/components/ClosingCTA';
import PageHero from '@/components/PageHero';
import ContactForm from '@/components/ContactForm';
import { siteInfo, hours } from '@/lib/site-data';

export const metadata: Metadata = {
  title: 'Contact — Maverick Chiropractic | Windsor, Colorado',
  description:
    'Get in touch with Maverick Chiropractic in Windsor, Colorado. Call, text, or send us a message — we\'d love to hear from you.',
};

export default function ContactPage() {
  return (
    <>
      {/* Hero Banner */}
      <PageHero
        eyebrow="Get in Touch"
        headline="We'd love to hear from you."
        subtitle="Questions, appointments, or just saying hello — we're here."
        backgroundImage="https://images.unsplash.com/photo-1454496522488-7a8e488e8606?w=1200&q=80"
      />

      {/* Section 1: Contact Methods */}
      <section className="contact-methods">
        <div className="container">
          <div className="contact-methods-header">
            <ScrollReveal>
              <SectionRule text="Reach Us" />
            </ScrollReveal>
          </div>
          <div className="contact-cards">
            <ScrollReveal>
              <div className="contact-card">
                <div className="contact-card-arch">
                  <svg className="contact-card-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                    <polyline points="22,6 12,13 2,6"/>
                  </svg>
                </div>
                <h3>Email</h3>
                <p className="contact-value">
                  <a href={`mailto:${siteInfo.email}`}>{siteInfo.email}</a>
                </p>
                <p className="contact-note">We respond within 24 hours</p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={1}>
              <div className="contact-card">
                <div className="contact-card-arch">
                  <svg className="contact-card-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
                    <circle cx="12" cy="10" r="3"/>
                  </svg>
                </div>
                <h3>Visit Us</h3>
                <p className="contact-value">{siteInfo.address.line1}</p>
                <p className="contact-note">
                  {siteInfo.address.line2}, {siteInfo.address.city}, {siteInfo.address.state} {siteInfo.address.zip}
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={2}>
              <div className="contact-card">
                <div className="contact-card-arch">
                  <svg className="contact-card-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"/>
                    <polyline points="12 6 12 12 16 14"/>
                  </svg>
                </div>
                <h3>Hours</h3>
                <p className="contact-value" style={{ fontSize: '14px', lineHeight: '1.7' }}>
                  Mon &middot; 8:30am&ndash;12pm, 1pm&ndash;4:30pm<br/>
                  Tue &middot; 8:30am&ndash;11:30am<br/>
                  Wed &middot; 8:30am&ndash;12pm, 1pm&ndash;5:30pm<br/>
                  Thu &middot; 8:30am&ndash;11:30am<br/>
                  Fri &middot; 9am&ndash;12pm
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <SectionDivider variant="wave" fromBg="var(--color-cream)" toBg="var(--color-white)" />

      {/* Section 2: Contact Form + Info */}
      <section className="contact-form-section">
        <div className="container">
          <div className="contact-form-grid">
            <ScrollReveal variant="reveal-left">
              <SectionRule text="Send a Message" align="left" className="" />
              <ContactForm />
            </ScrollReveal>
            <ScrollReveal variant="reveal-right">
              <div className="contact-info-panel">
                <div className="contact-info-image">
                  <img
                    src="https://images.unsplash.com/photo-1511895426328-dc8714191300?w=1200&q=80"
                    alt="Family at golden hour in Windsor Colorado"
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </div>
                <div className="contact-info-details">
                  <h4>Visit Us</h4>
                  <p className="address">
                    {siteInfo.address.line1}<br/>
                    {siteInfo.address.line2}<br/>
                    {siteInfo.address.city}, {siteInfo.address.state} {siteInfo.address.zip}
                  </p>
                  <h4>Hours</h4>
                  <div className="hours-grid">
                    {hours.map(h => (
                      <div key={h.day} className="hours-row">
                        <span className="day">{h.day}</span>
                        <span>{h.time}</span>
                      </div>
                    ))}
                  </div>
                  <a href={siteInfo.directionsUrl} className="contact-directions-link">Get Directions</a>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <SectionDivider variant="ellipse" fromBg="var(--color-white)" toBg="var(--color-cream)" />

      {/* Section 3: Map Area */}
      <section className="map-section">
        <div className="container">
          <ScrollReveal variant="reveal-scale">
            <div className="map-placeholder">
              <span>Interactive Map</span>
            </div>
          </ScrollReveal>
          <ScrollReveal>
            <div className="map-below">
              <p>Inside Stine Chiropractic, {siteInfo.address.line2}, {siteInfo.address.city}, {siteInfo.address.state} {siteInfo.address.zip}</p>
              <a href={siteInfo.directionsUrl} className="btn btn-secondary">Get Directions</a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <SectionDivider variant="scallop" fromBg="var(--color-cream)" toBg="var(--color-white)" />

      {/* Section 4: Quick Links */}
      <section className="quick-links">
        <div className="container">
          <div className="quick-links-header">
            <ScrollReveal>
              <SectionRule text="Helpful Links" />
            </ScrollReveal>
          </div>
          <div className="quick-links-grid">
            <ScrollReveal>
              <Link href="/new-patients" className="quick-link-card">
                <h3>New Patient?<br/>Start Here</h3>
                <span className="btn btn-ghost">Learn More</span>
              </Link>
            </ScrollReveal>
            <ScrollReveal delay={1}>
              <Link href="/services" className="quick-link-card">
                <h3>View Our<br/>Services</h3>
                <span className="btn btn-ghost">Explore</span>
              </Link>
            </ScrollReveal>
            <ScrollReveal delay={2}>
              <a href={siteInfo.bookingUrl} className="quick-link-card">
                <h3>Book<br/>Online</h3>
                <span className="btn btn-ghost">Schedule</span>
              </a>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <SectionDivider variant="organic" fromBg="var(--color-white)" toBg="var(--color-moss)" />

      {/* Section 5: Closing CTA */}
      <ClosingCTA />
    </>
  );
}
