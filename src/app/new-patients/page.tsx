/* eslint-disable @next/next/no-img-element */
import type { Metadata } from 'next';
import Link from 'next/link';
import ScrollReveal from '@/components/ScrollReveal';
import SectionRule from '@/components/SectionRule';
import SectionDivider from '@/components/SectionDivider';
import ClosingCTA from '@/components/ClosingCTA';
import PageHero from '@/components/PageHero';
import Accordion from '@/components/Accordion';
import { siteInfo } from '@/lib/site-data';

export const metadata: Metadata = {
  title: 'New Patients — Maverick Chiropractic',
  description: 'What to expect on your first visit. A calm, conversational 40-minute appointment with Dr. Courtney in Windsor, Colorado.',
};

const faqItems = [
  { id: 'faq1', question: 'Is chiropractic care safe for babies and children?', answer: 'Yes. Pediatric care uses very gentle, age-appropriate techniques designed specifically for smaller bodies, always adjusted to the child\'s comfort and needs.' },
  { id: 'faq2', question: 'What should I expect on my first visit?', answer: 'Your first visit is about getting to know you. We\'ll go through your health history, do a focused exam, and Dr. Courtney will walk you through everything in a way that makes sense. If appropriate, care may begin the same day along with a clear plan moving forward.' },
  { id: 'faq3', question: 'Do I need a referral?', answer: 'No referral is needed. You can schedule directly online or by reaching out to the office.' },
  { id: 'faq4', question: 'What should I bring?', answer: 'Wear comfortable, loose-fitting clothes. If you have them, bring any relevant health history documents and your insurance card. That\'s it.' },
  { id: 'faq5', question: 'How long is a first visit?', answer: 'Plan for about 45 minutes. We take our time so we can be thorough — your first visit is never rushed.' },
  { id: 'faq6', question: 'What if I\'ve never been to a chiropractor before?', answer: 'That\'s completely okay. You\'ll be walked through every step — what the exam involves, what treatment options look like, and how care may help. Questions are welcome at any point.' },
];

export default function NewPatients() {
  return (
    <>
      {/* Hero */}
      <PageHero
        eyebrow="New Patients"
        headline="Your first visit is a conversation."
        subtitle="No surprises. No pressure. Just thoughtful care, at your pace."
        backgroundImage="https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=1200&q=80"
      />

      {/* What to Expect Intro */}
      <section className="expect-intro">
        <div className="container">
          <ScrollReveal>
            <SectionRule text="What to Expect" />
          </ScrollReveal>
          <ScrollReveal delay={1}>
            <h2>Three steps to feeling better.</h2>
          </ScrollReveal>
          <ScrollReveal delay={2}>
            <p className="body-text">We know that walking into a new office can feel uncertain. That&rsquo;s why we&rsquo;ve designed every first visit to be unhurried, transparent, and completely on your terms.</p>
          </ScrollReveal>
        </div>
      </section>

      {/* Timeline */}
      <section className="timeline-section">
        <div className="timeline">
          <ScrollReveal as="div" className=" timeline-step">
            <div className="timeline-content">
              <h3>The Conversation</h3>
              <p>We start by listening. Your health history, your goals, your concerns — we want to understand the full picture before anything else.</p>
            </div>
            <div className="timeline-dot">1</div>
            <ScrollReveal variant="reveal-scale" as="div" className=" timeline-img">
              <img src="https://images.unsplash.com/photo-1476703993599-0035a21b17a9?w=1200&q=80" alt="Mother and daughter sharing a warm moment together" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </ScrollReveal>
          </ScrollReveal>

          <ScrollReveal as="div" className=" timeline-step">
            <div className="timeline-content">
              <h3>The Assessment</h3>
              <p>A thorough evaluation — posture, range of motion, spinal health. We explain what we find in plain language, not medical jargon.</p>
            </div>
            <div className="timeline-dot">2</div>
            <ScrollReveal variant="reveal-scale" as="div" className=" timeline-img">
              <img src="https://images.unsplash.com/photo-1555252333-9f8e92e65df9?w=1200&q=80" alt="Parents lovingly caring for their newborn in the nursery" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </ScrollReveal>
          </ScrollReveal>

          <ScrollReveal as="div" className=" timeline-step">
            <div className="timeline-content">
              <h3>The Plan</h3>
              <p>If we adjust on day one, it&rsquo;s because the findings support it. Otherwise, we&rsquo;ll map out a care plan tailored to your family&rsquo;s needs.</p>
            </div>
            <div className="timeline-dot">3</div>
            <ScrollReveal variant="reveal-scale" as="div" className=" timeline-img">
              <img src="https://images.unsplash.com/photo-1544126592-807ade215a0b?w=1200&q=80" alt="Mother holding her newborn in an intimate, tender moment" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </ScrollReveal>
          </ScrollReveal>
        </div>
      </section>

      {/* Divider: cream -> white */}
      <SectionDivider variant="wave" fromBg="var(--color-cream)" toBg="var(--color-white)" />

      {/* FAQ */}
      <section className="faq-section">
        <div className="faq-split">
          <div className="faq-image">
            <ScrollReveal variant="reveal-rotate">
              <div className="faq-img-shape">
                <img src="https://images.unsplash.com/photo-1493894473891-10fc1e5dbd22?w=1200&q=80" alt="Pregnant woman in a clean, natural setting" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
            </ScrollReveal>
          </div>
          <div className="faq-text">
            <ScrollReveal>
              <SectionRule text="Common Questions" align="left" />
            </ScrollReveal>
            <ScrollReveal delay={1}>
              <h2>Everything you&rsquo;re wondering.</h2>
            </ScrollReveal>
            <ScrollReveal delay={2}>
              <Accordion items={faqItems} />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Divider: white -> cream */}
      <SectionDivider variant="scallop" fromBg="var(--color-white)" toBg="var(--color-cream)" />

      {/* Preparing for Your Visit */}
      <section className="preparing">
        <div className="container">
          <div className="preparing-header">
            <ScrollReveal>
              <SectionRule text="Before You Arrive" />
            </ScrollReveal>
            <ScrollReveal delay={1}>
              <h2>A few things to know.</h2>
            </ScrollReveal>
          </div>
        </div>
        <div className="prep-grid">
          <ScrollReveal as="div" className=" prep-card">
            <div className="prep-card-icon">
              <svg viewBox="0 0 24 24">
                <path d="M20.38 3.46L16 2 12 3.46 8 2 3.62 3.46a.5.5 0 0 0-.38.49V20a1 1 0 0 0 1 1h15.5a1 1 0 0 0 1-1V3.95a.5.5 0 0 0-.36-.49Z" strokeWidth="1.5" />
                <path d="M8 8h8M8 12h8M8 16h4" strokeWidth="1.5" />
              </svg>
            </div>
            <h4>Wear Comfortable Clothes</h4>
            <p>Loose, flexible clothing helps us assess and adjust effectively.</p>
          </ScrollReveal>

          <ScrollReveal as="div" className=" prep-card" delay={1}>
            <div className="prep-card-icon">
              <svg viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
            </div>
            <h4>Arrive 10 Minutes Early</h4>
            <p>We&rsquo;ll have some simple forms for you — or fill them out online.</p>
          </ScrollReveal>

          <ScrollReveal as="div" className=" prep-card" delay={2}>
            <div className="prep-card-icon">
              <svg viewBox="0 0 24 24">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
              </svg>
            </div>
            <h4>Bring Your Questions</h4>
            <p>There&rsquo;s no such thing as a silly question here.</p>
          </ScrollReveal>

          <ScrollReveal as="div" className=" prep-card" delay={3}>
            <div className="prep-card-icon">
              <svg viewBox="0 0 24 24">
                <rect x="2" y="5" width="20" height="14" rx="2" />
                <line x1="2" y1="10" x2="22" y2="10" />
              </svg>
            </div>
            <h4>Insurance &amp; Payment</h4>
            <p>We accept most insurance, HSA, and FSA. We&rsquo;ll verify your coverage before your visit.</p>
          </ScrollReveal>
        </div>
      </section>

      {/* Divider: cream -> white */}
      <SectionDivider variant="ellipse" fromBg="var(--color-cream)" toBg="var(--color-white)" />

      {/* Testimonial Spotlight */}
      <section className="testimonial-spotlight">
        <div className="testimonial-spotlight-inner">
          <ScrollReveal variant="reveal-scale">
            <div className="spotlight-img">
              <img src="https://images.unsplash.com/photo-1492725764893-90b379c2b6e7?w=1200&q=80" alt="Mother holding and cherishing her baby" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
          </ScrollReveal>
          <ScrollReveal>
            <div className="spotlight-stars">&starf; &starf; &starf; &starf; &starf;</div>
          </ScrollReveal>
          <ScrollReveal delay={1}>
            <blockquote>&ldquo;I was nervous about my first visit, but Dr. Courtney made me feel completely at ease. She explained everything, never rushed, and genuinely listened. I left feeling better than I have in years.&rdquo;</blockquote>
          </ScrollReveal>
          <ScrollReveal delay={2}>
            <cite>&mdash; Amanda R., Windsor</cite>
          </ScrollReveal>
        </div>
      </section>

      {/* Divider: white -> moss */}
      <SectionDivider variant="organic" fromBg="var(--color-white)" toBg="var(--color-moss)" />

      {/* Closing CTA */}
      <ClosingCTA
        headline="Ready to feel better?"
        body="Your first visit is free of pressure and full of care."
      />
    </>
  );
}
