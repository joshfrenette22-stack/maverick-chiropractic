/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import ScrollReveal from '@/components/ScrollReveal';
import SectionRule from '@/components/SectionRule';
import SectionDivider from '@/components/SectionDivider';
import ClosingCTA from '@/components/ClosingCTA';
import PageHero from '@/components/PageHero';
import { siteInfo } from '@/lib/site-data';

export const metadata = {
  title: 'About — Maverick Chiropractic | Windsor, Colorado',
  description:
    'Meet Dr. Courtney Schneider and learn the story behind Maverick Chiropractic — a family-focused, Webster-certified practice in Windsor, Colorado.',
};

const credentials = [
  'Doctor of Chiropractic',
  'Webster Certified',
  'ICPA Member',
  'Dry Needling Certified',
  'RockBlades Certified',
  'Pediatric Focus',
];

export default function AboutPage() {
  return (
    <>
      {/* Hero Banner */}
      <PageHero
        eyebrow="Our Story"
        headline="Rooted in Windsor, built for families."
        subtitle="Maverick Chiropractic is where intentional care meets modern practice."
        backgroundImage="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1200&q=80"
      />

      {/* Section 1: Our Story */}
      <section className="our-story">
        <div className="story-split">
          <ScrollReveal variant="reveal-left" as="div">
            <div className="story-image">
              <img
                src="https://images.unsplash.com/photo-1475503572774-15a45e5d60b9?w=1200&q=80"
                alt="Family outdoors together in Colorado"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
          </ScrollReveal>
          <ScrollReveal variant="reveal-right" as="div">
            <div className="story-text">
              <SectionRule text="About Maverick" align="left" />
              <h2>More than adjustments.</h2>
              <p>
                Maverick Chiropractic was born from a simple belief: that chiropractic care
                should be patient, personal, and educational. Not rushed. Not transactional.
                Not an assembly line of adjustments where you feel like a number on a schedule.
              </p>
              <p>
                We built this practice for families who want something different -- a space
                where questions are encouraged, where care moves at your pace, and where you
                leave every visit understanding your body a little better than when you walked
                in. A space where parents feel supported, children feel safe, and everyone
                feels genuinely seen.
              </p>
              <blockquote className="pull-quote">
                &ldquo;I want every visit to feel calm, educational, and trust-centered —
                where families feel supported and children feel safe.&rdquo;
              </blockquote>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <SectionDivider variant="wave" fromBg="var(--color-cream)" toBg="var(--color-white)" />

      {/* Section 2: Meet Dr. Courtney */}
      <section className="meet-doc">
        <div className="doc-split">
          <ScrollReveal variant="reveal-left" as="div">
            <div className="doc-text">
              <SectionRule text="Meet Your Chiropractor" align="left" />
              <h2>Dr. Courtney Schneider, DC</h2>
              <p>
                Dr. Courtney grew up in Bismarck, North Dakota, and dreamed of Colorado long
                before she made it home. After earning her Bachelor&apos;s in Kinesiology and
                Human Development from the University of North Dakota, she completed her
                Doctor of Chiropractic at Northwestern Health Sciences University in 2022.
              </p>
              <p>
                Her path into chiropractic started at age 11, when she was diagnosed with
                scoliosis and began care herself. She&apos;s certified in the Webster
                Technique, a member of the ICPA, and certified in Dry Needling and RockBlades.
                She lives in Timnath with her husband Colton, their dog Hansel, and the cat
                who started it all — Maverick, named after Top Gun, and the inspiration behind
                the practice&apos;s name.
              </p>
              <div className="credentials-grid">
                {credentials.map((cred) => (
                  <div key={cred} className="credential-item">
                    {cred}
                  </div>
                ))}
              </div>
              <a href={siteInfo.bookingUrl} className="btn btn-primary">
                Book with Dr. Courtney
              </a>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={1} as="div">
            <div className="doc-image-wrap">
              <div className="doc-image">
                <img
                  src="mpl5zedr-B3F2C9DB-93D7-4C80-B46F-01CE2F2A41C9.PNG"
                  alt="Dr. Courtney Schneider, DC"
                />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <SectionDivider variant="scallop" fromBg="var(--color-white)" toBg="var(--color-cream)" />

      {/* Section 3: Our Values */}
      <section className="values">
        <div className="container">
          <div className="values-header">
            <ScrollReveal>
              <SectionRule text="Our Values" />
            </ScrollReveal>
            <ScrollReveal delay={1}>
              <h2>What guides us.</h2>
            </ScrollReveal>
          </div>
        </div>
        <div className="values-grid">
          <ScrollReveal>
            <div className="value-card">
              <svg
                className="value-icon"
                viewBox="0 0 56 56"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M28 48c-8 0-14-4-16-10l-2-8a2 2 0 0 1 1.5-2.5l2-.4a2 2 0 0 1 2.2 1.2L18 34V16a2 2 0 0 1 4 0v10" />
                <path d="M22 16V12a2 2 0 0 1 4 0v14" />
                <path d="M26 14V10a2 2 0 0 1 4 0v16" />
                <path d="M30 16V14a2 2 0 0 1 4 0v12c0 0 4-3 6-2s1 5-2 9c-2 3-6 7-10 7" />
                <circle cx="28" cy="6" r="1.5" fill="currentColor" stroke="none" opacity="0.3" />
              </svg>
              <h3>Patient-Led</h3>
              <p>Your body, your pace. We listen first, adjust second.</p>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={1}>
            <div className="value-card">
              <svg
                className="value-icon"
                viewBox="0 0 56 56"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M28 14v30" />
                <path d="M28 14c-4-4-12-6-18-4v28c6-2 14 0 18 4" />
                <path d="M28 14c4-4 12-6 18-4v28c-6-2-14 0-18 4" />
                <line x1="28" y1="6" x2="28" y2="2" opacity="0.4" />
                <line x1="22" y1="7" x2="20" y2="4" opacity="0.3" />
                <line x1="34" y1="7" x2="36" y2="4" opacity="0.3" />
              </svg>
              <h3>Education-First</h3>
              <p>Understanding your health is part of the care.</p>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={2}>
            <div className="value-card">
              <svg
                className="value-icon"
                viewBox="0 0 56 56"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="18" cy="16" r="5" />
                <path d="M10 38v-4a8 8 0 0 1 16 0v4" />
                <circle cx="38" cy="18" r="4" />
                <path d="M31 38v-3a7 7 0 0 1 14 0v3" />
                <path d="M28 44l-3.5-3.2C20 36.8 17 33.6 17 30c0-2.8 2.2-5 5-5 1.6 0 3.1.7 4 1.8L28 29l2-2.2c.9-1.1 2.4-1.8 4-1.8 2.8 0 5 2.2 5 5 0 3.6-3 6.8-7.5 10.8L28 44z" />
              </svg>
              <h3>Family-Centered</h3>
              <p>From babies to grandparents, everyone belongs here.</p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <SectionDivider
        variant="organic-steep"
        fromBg="var(--color-cream)"
        toBg="var(--color-white)"
      />

      {/* Section 4: The Office */}
      <section className="office-mosaic">
        <div className="container">
          <div className="office-mosaic-header">
            <ScrollReveal>
              <SectionRule text="The Space" />
            </ScrollReveal>
            <ScrollReveal delay={1}>
              <h2>A space built for families to exhale.</h2>
            </ScrollReveal>
            <ScrollReveal delay={2}>
              <p>
                Every detail of our Windsor office was designed with families in mind -- from
                the warm, light-filled treatment rooms to the kid-friendly play corner and
                private nursing area. Stroller-accessible with easy parking, because getting
                here should be the easiest part of your day.
              </p>
            </ScrollReveal>
          </div>
        </div>
        <div className="mosaic-grid">
          <ScrollReveal variant="reveal-left" as="div" className=" mosaic-item mosaic-item-1">
            <img
              src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=1200&q=80"
              alt="Modern chiropractic clinic interior"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </ScrollReveal>
          <ScrollReveal delay={1} as="div" className=" mosaic-item mosaic-item-2">
            <img
              src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1200&q=80"
              alt="Bright modern office interior"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </ScrollReveal>
          <ScrollReveal variant="reveal-scale" delay={2} as="div" className=" mosaic-item mosaic-item-3">
            <img
              src="https://images.unsplash.com/photo-1555252333-9f8e92e65df9?w=1200&q=80"
              alt="Parents with newborn in nursery"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </ScrollReveal>
          <ScrollReveal delay={3} as="div" className=" mosaic-item mosaic-item-4">
            <img
              src="https://images.unsplash.com/photo-1476703993599-0035a21b17a9?w=1200&q=80"
              alt="Mother and daughter together"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </ScrollReveal>
        </div>
      </section>

      <SectionDivider variant="organic" fromBg="var(--color-white)" toBg="var(--color-moss)" />

      {/* Section 5: Closing CTA */}
      <ClosingCTA />
    </>
  );
}
