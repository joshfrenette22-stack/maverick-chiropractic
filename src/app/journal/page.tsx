import Link from 'next/link';
import ScrollReveal from '@/components/ScrollReveal';
import SectionRule from '@/components/SectionRule';
import SectionDivider from '@/components/SectionDivider';
import ClosingCTA from '@/components/ClosingCTA';
import PageHero from '@/components/PageHero';
import JournalFilters from '@/components/JournalFilters';
import { siteInfo } from '@/lib/site-data';

export const metadata = {
  title: 'The Journal — Maverick Chiropractic',
  description: 'Education, insights, and gentle guidance from Dr. Courtney. Resources for growing families in Windsor, Colorado.',
};

export default function JournalPage() {
  return (
    <>
      {/* Hero Banner */}
      <PageHero
        eyebrow="The Journal"
        headline="Reading for growing families."
        subtitle="Education, insights, and gentle guidance from Dr. Courtney."
        backgroundImage="https://images.unsplash.com/photo-1470116945706-e6bf5d5a53ca?w=1200&q=80"
      />

      {/* Featured Article */}
      <section className="featured-article">
        <div className="featured-card">
          <ScrollReveal variant="reveal-left" className="featured-card-image">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1200&q=80" alt="Happy family laughing together outdoors" />
          </ScrollReveal>
          <ScrollReveal variant="reveal-right" className="featured-card-text">
            <span className="featured-tag">Featured</span>
            <p className="meta">5 Min Read &middot; May 2026</p>
            <h2>Why Pediatric Chiropractic Isn&apos;t What You Think</h2>
            <p className="excerpt">When most parents hear &ldquo;chiropractic for babies,&rdquo; they picture what they know from adult care. The reality is entirely different. Pediatric adjustments use gentle, fingertip pressure &mdash; about the same you&apos;d use to test a ripe peach. Most babies sleep right through it. It&apos;s not about cracking or popping; it&apos;s about supporting your child&apos;s developing nervous system with precision and care.</p>
            <Link href="#" className="btn btn-ghost">Read Article</Link>
          </ScrollReveal>
        </div>
      </section>

      {/* Category Filter + Article Grid (client component) */}
      <JournalFilters />

      {/* Divider: cream to white */}
      <SectionDivider variant="ellipse" fromBg="var(--color-cream)" toBg="var(--color-white)" />

      {/* Newsletter Signup */}
      <section className="newsletter">
        <div className="newsletter-inner">
          <ScrollReveal>
            <SectionRule text="Stay Informed" />
          </ScrollReveal>
          <ScrollReveal delay={1}>
            <h2>Join the Maverick family.</h2>
          </ScrollReveal>
          <ScrollReveal delay={2}>
            <p>Get gentle wellness tips, practice updates, and family health insights delivered to your inbox.</p>
          </ScrollReveal>
          <ScrollReveal delay={3}>
            <form className="newsletter-form" onSubmit={undefined}>
              <input type="email" placeholder="Your email address" required />
              <button type="submit" className="btn btn-primary">Subscribe</button>
            </form>
            <p className="newsletter-caption">No spam. Unsubscribe anytime.</p>
          </ScrollReveal>
        </div>
      </section>

      {/* Divider: white to moss */}
      <SectionDivider variant="organic" fromBg="var(--color-white)" toBg="var(--color-moss)" />

      {/* Closing CTA */}
      <ClosingCTA />
    </>
  );
}
