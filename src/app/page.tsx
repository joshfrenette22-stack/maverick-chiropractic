import Link from 'next/link';
import ScrollReveal from '@/components/ScrollReveal';
import SectionRule from '@/components/SectionRule';
import SectionDivider from '@/components/SectionDivider';
import ClosingCTA from '@/components/ClosingCTA';
import HomepageAccordion from '@/components/HomepageAccordion';
import { siteInfo } from '@/lib/site-data';

const services = [
  { title: 'Pediatric Chiropractic', desc: 'Gentle, age-appropriate care for newborns through age 12.', href: '/services', img: '/images/pediatric-chiropractic-adjustment.webp', alt: 'Chiropractor gently adjusting a baby' },
  { title: 'Prenatal & Webster', desc: 'Webster-certified care to support pelvic balance and ease pregnancy discomfort.', href: '/services', img: '/images/prenatal-chiropractic-consultation.webp', alt: 'Chiropractor consulting with a pregnant patient' },
  { title: 'Postpartum Care', desc: 'Helping mothers recover from the physical changes of birth.', href: '/services', img: 'https://images.unsplash.com/photo-1492725764893-90b379c2b6e7?w=800&fit=crop&q=80', alt: 'Mother holding baby close' },
  { title: 'Family Adjustments', desc: 'Care for adults addressing headaches, neck and back pain, and everyday tension.', href: '/services', img: '/images/chiropractic-spinal-adjustment.webp', alt: 'Chiropractor performing a spinal adjustment on an adult patient' },
  { title: 'Soft Tissue Therapies', desc: 'Dry Needling, RockBlades, cupping, and kinesiology taping.', href: '/services', img: '/images/dry-needling-therapy.webp', alt: 'Close-up of dry needling therapy with gloved hands placing needles' },
  { title: 'New Patient Visit', desc: 'A 40-minute first visit — consultation, exam, and a clear plan.', href: '/new-patients', img: '/images/front-desk-patient-checkin.webp', alt: 'Patient being greeted at the front desk during check-in' },
];

const concerns = [
  { label: 'Pediatric', sub: 'Newborns through age 12', href: '/services', img: '/images/pediatric-chiropractic-adjustment.webp', alt: 'Chiropractor gently adjusting a baby', shape: 'concern-shape-circle' },
  { label: 'Pregnancy', sub: 'Webster-certified prenatal care', href: '/services', img: '/images/prenatal-chiropractic-consultation.webp', alt: 'Chiropractor consulting with a pregnant patient', shape: 'concern-shape-leaf' },
  { label: 'Postpartum', sub: 'Recovery for new moms', href: '/services', img: 'https://images.unsplash.com/photo-1492725764893-90b379c2b6e7?w=600&fit=crop&q=80', alt: 'Mother holding baby', shape: 'concern-shape-soft' },
  { label: 'Adults & Family', sub: 'Headaches, back pain, daily tension', href: '/services', img: '/images/chiropractic-spinal-adjustment.webp', alt: 'Chiropractor performing a spinal adjustment on an adult patient', shape: 'concern-shape-asym' },
];

const faqItems = [
  { id: 'faq1', question: 'Is chiropractic care safe for babies and children?', answer: 'Yes. Pediatric care uses very gentle, age-appropriate techniques designed specifically for smaller bodies, always adjusted to the child\'s comfort and needs.' },
  { id: 'faq2', question: 'What should I expect on my first visit?', answer: 'Your first visit is about getting to know you. We\'ll go through your health history, do a focused exam, and Dr. Courtney will walk you through everything in a way that makes sense. If appropriate, care may begin the same day along with a clear plan moving forward.' },
  { id: 'faq3', question: 'Do I need a referral?', answer: 'No referral is needed. You can schedule directly online or by reaching out to the office.' },
  { id: 'faq4', question: 'What if I\'ve never been to a chiropractor before?', answer: 'That\'s completely okay. You\'ll be walked through every step — what the exam involves, what treatment options look like, and how care may help. Questions are welcome at any point.' },
];

const officeFeatures = [
  { title: 'Private Rooms', desc: 'Calm, quiet spaces for focused family care' },
  { title: 'Kid-Friendly', desc: 'A play corner where little ones feel at home' },
  { title: 'Nursing Space', desc: 'A comfortable, private area for new moms' },
  { title: 'Easy Access', desc: 'Stroller-accessible with on-site parking' },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="hero">
        <div className="hero-bg" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1511895426328-dc8714191300?w=1600&fit=crop&q=80')" }} />
        <div className="hero-overlay" />
        <div className="hero-content">
          <ScrollReveal as="p" variant="reveal" className="eyebrow">Gentle. Educational. Trust-Centered.</ScrollReveal>
          <ScrollReveal as="h1" variant="reveal" delay={1}>Family chiropractic care, made personal.</ScrollReveal>
          <ScrollReveal as="p" variant="reveal" delay={2} className="hero-sub">
            Pediatric, prenatal, postpartum, and whole-family chiropractic care in Windsor, Colorado — where every visit is calm, conversational, and built around you.
          </ScrollReveal>
          <ScrollReveal variant="reveal" delay={3} className="hero-ctas">
            <a href={siteInfo.bookingUrl} className="btn btn-white">Book Your First Visit</a>
            <Link href="/new-patients" className="btn btn-ghost">New here? What to expect</Link>
          </ScrollReveal>
        </div>
        <div className="scroll-indicator"><div className="scroll-dot" /></div>
        <div className="hero-bottom-arch">
          <svg viewBox="0 0 1440 80" preserveAspectRatio="none" fill="var(--color-cream)">
            <ellipse cx="720" cy="80" rx="900" ry="80" />
          </svg>
        </div>
      </section>

      {/* About Intro */}
      <section className="about-intro" id="about">
        <div className="container">
          <ScrollReveal><SectionRule text="About Maverick" /></ScrollReveal>
          <ScrollReveal as="h2" variant="reveal" delay={1}>Chiropractic care that feels human.</ScrollReveal>
          <ScrollReveal as="p" variant="reveal" delay={2} className="body-text">
            Maverick Chiropractic Care is a family-focused practice in Windsor, Colorado, specializing in pediatric, prenatal, postpartum, and whole-family chiropractic care. Every visit is built around communication, comfort, and trust — never rushed, never clinical.
          </ScrollReveal>
          <ScrollReveal as="p" variant="reveal" delay={2} className="body-text">
            Whether you&rsquo;re bringing in your newborn, preparing for birth, or coming in yourself for the first time, you&rsquo;ll always know what&rsquo;s happening and why. Care is collaborative — your input shapes every step.
          </ScrollReveal>
          <ScrollReveal variant="reveal" delay={3}>
            <Link href="/about" className="btn btn-ghost">Our story</Link>
          </ScrollReveal>
        </div>
      </section>

      {/* Arch Break */}
      <div className="arch-break">
        <ScrollReveal variant="reveal-scale" className="arch-break-inner">
          <div className="arch-break-img">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="https://images.unsplash.com/photo-1475503572774-15a45e5d60b9?w=1200&fit=crop&q=80" alt="Family walking together outdoors" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
          <svg className="arch-badge" viewBox="0 0 140 140">
            <defs>
              <path id="badgePath" d="M 70,70 m -55,0 a 55,55 0 1,1 110,0 a 55,55 0 1,1 -110,0" />
            </defs>
            <text>
              <textPath href="#badgePath">PEDIATRIC &bull; PRENATAL &bull; FAMILY &bull; WELLNESS &bull; </textPath>
            </text>
          </svg>
        </ScrollReveal>
      </div>

      {/* Divider: cream → white */}
      <SectionDivider variant="wave" fromBg="var(--color-cream)" toBg="var(--color-white)" />

      {/* Services */}
      <section className="services" id="services">
        <div className="container">
          <div className="services-header">
            <ScrollReveal><SectionRule text="Our Care" /></ScrollReveal>
            <ScrollReveal as="h2" variant="reveal" delay={1}>Care tailored to every age and stage.</ScrollReveal>
            <ScrollReveal as="p" variant="reveal" delay={2}>
              From newborns to grandparents, every visit is individualized. Techniques are adjusted based on age, comfort level, and what your body needs that day.
            </ScrollReveal>
          </div>
        </div>
        <div className="services-carousel">
          {services.map((s, i) => (
            <ScrollReveal key={s.title} variant="reveal" delay={Math.min(i, 4) as 0|1|2|3|4} className="service-card">
              <div className="service-card-img">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={s.img} alt={s.alt} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 600ms' }} />
              </div>
              <div className="service-card-body">
                <h3>{s.title}</h3>
                <p className="service-desc">{s.desc}</p>
                <Link href={s.href} className="explore-link">Explore</Link>
              </div>
            </ScrollReveal>
          ))}
        </div>
        <div className="container" style={{ textAlign: 'center', marginTop: 48 }}>
          <ScrollReveal variant="reveal">
            <Link href="/services" className="btn btn-secondary">See All Services</Link>
          </ScrollReveal>
        </div>
      </section>

      {/* Divider: white → cream */}
      <SectionDivider variant="scallop" fromBg="var(--color-white)" toBg="var(--color-cream)" />

      {/* The Office */}
      <section className="the-office" id="office">
        <div className="container" style={{ marginBottom: 56, textAlign: 'center' }}>
          <ScrollReveal><SectionRule text="The Office" /></ScrollReveal>
          <ScrollReveal as="h2" variant="reveal" delay={1} className="office-section-heading">
            A welcoming space inside Stine Chiropractic.
          </ScrollReveal>
        </div>
        <div className="office-grid">
          <ScrollReveal variant="reveal-left" className="office-image-wrap">
            <div className="office-arch-img">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/chiropractic-treatment-room.webp" alt="Maverick Chiropractic treatment room interior" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <ScrollReveal variant="reveal-scale" delay={2} className="office-inset-circle">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/front-desk-patient-checkin.webp" alt="Patient being welcomed at the front desk" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%' }} />
            </ScrollReveal>
          </ScrollReveal>
          <ScrollReveal variant="reveal-right" className="office-text-panel">
            <p>Maverick Chiropractic is located inside Stine Chiropractic in Windsor. On-site parking, a relaxed front-desk welcome, and a treatment space designed to feel comfortable for patients of every age — including the ones being held in mom&rsquo;s arms.</p>
            <div className="office-features">
              {officeFeatures.map((f, i) => (
                <ScrollReveal key={f.title} variant="reveal" delay={(i + 1) as 1|2|3|4} className="office-feature">
                  <h4>{f.title}</h4>
                  <p>{f.desc}</p>
                </ScrollReveal>
              ))}
            </div>
            <Link href="/contact" className="btn btn-ghost">Get Directions</Link>
          </ScrollReveal>
        </div>
      </section>

      {/* Divider: cream → white */}
      <SectionDivider variant="organic-steep" fromBg="var(--color-cream)" toBg="var(--color-white)" />

      {/* Method / FAQ */}
      <section className="method" id="new-patients">
        <div className="container" style={{ textAlign: 'center', marginBottom: 56 }}>
          <ScrollReveal><SectionRule text="The Method" /></ScrollReveal>
          <ScrollReveal as="h2" variant="reveal" delay={1} className="method-section-heading">
            What care at Maverick <em style={{ color: 'var(--color-moss)' }}>actually</em> looks like.
          </ScrollReveal>
          <ScrollReveal as="p" variant="reveal" delay={2} className="method-section-sub">
            Every visit starts with a conversation. Dr. Courtney explains what she&rsquo;s doing as she goes, checks in on comfort throughout, and never adjusts without your consent — because care that lasts is care you understand.
          </ScrollReveal>
        </div>
        <div className="method-split">
          <ScrollReveal variant="reveal-rotate" className="method-image">
            <div className="method-img-shape">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="https://images.unsplash.com/photo-1544126592-807ade215a0b?w=800&fit=crop&q=80" alt="Mother with newborn intimate" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
          </ScrollReveal>
          <ScrollReveal variant="reveal" delay={1} className="method-text">
            <HomepageAccordion items={faqItems} />
            <Link href="/new-patients" className="btn btn-ghost" style={{ marginTop: 32 }}>See all FAQs</Link>
          </ScrollReveal>
        </div>
      </section>

      {/* Divider: white → cream */}
      <SectionDivider variant="ellipse" fromBg="var(--color-white)" toBg="var(--color-cream)" />

      {/* Concerns / Who We Serve */}
      <section className="concerns">
        <div className="container">
          <div className="concerns-header">
            <ScrollReveal><SectionRule text="Who We Serve" /></ScrollReveal>
            <ScrollReveal as="h2" variant="reveal" delay={1}>Care for every season of life.</ScrollReveal>
            <ScrollReveal as="p" variant="reveal" delay={2}>Find the chapter you&rsquo;re in — we&rsquo;ll show you what care looks like there.</ScrollReveal>
          </div>
        </div>
        <div className="concerns-grid">
          {concerns.map((c, i) => (
            <ScrollReveal key={c.label} variant="reveal" delay={i as 0|1|2|3}>
              <Link href={c.href} className="concern-card">
                <div className={`concern-img ${c.shape}`}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={c.img} alt={c.alt} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <span className="concern-label">{c.label}</span>
                <span className="concern-sub">{c.sub}</span>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Divider: cream → white */}
      <SectionDivider variant="gentle" fromBg="var(--color-cream)" toBg="var(--color-white)" />

      {/* Founder */}
      <section className="founder" id="dr-courtney">
        <div className="founder-split">
          <ScrollReveal variant="reveal-left" className="founder-text">
            <SectionRule text="Meet Your Chiropractor" align="left" />
            <h2>Dr. Courtney Schneider, DC</h2>
            <p className="bio">Dr. Courtney grew up in Bismarck, North Dakota, and dreamed of Colorado long before she made it home. After earning her Bachelor&rsquo;s in Kinesiology and Human Development from the University of North Dakota, she completed her Doctor of Chiropractic at Northwestern Health Sciences University in 2022.</p>
            <p className="bio">Her path into chiropractic started at age 11, when she was diagnosed with scoliosis and began care herself. She&rsquo;s certified in the Webster Technique, a member of the International Chiropractic Pediatric Association (ICPA), and certified in Dry Needling and RockBlades.</p>
            <p className="bio">She lives in Timnath with her husband Colton, their dog Hansel, and the cat who started it all — Maverick, named after Top Gun, and the inspiration behind the practice&rsquo;s name.</p>
            <blockquote className="pull-quote">&ldquo;I want every visit to feel calm, educational, and trust-centered — where families feel supported and children feel safe.&rdquo;</blockquote>
            <Link href="/about" className="btn btn-ghost">Read Courtney&rsquo;s full story</Link>
          </ScrollReveal>
          <ScrollReveal variant="reveal" delay={1} className="founder-image">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/dr-courtney.png" alt="Dr. Courtney Schneider" style={{ width: '100%', height: '100%', objectFit: 'cover', minHeight: 400 }} />
          </ScrollReveal>
        </div>
      </section>

      {/* Divider: white → cream */}
      <SectionDivider variant="scallop" fromBg="var(--color-white)" toBg="var(--color-cream)" />

      {/* Trust Signals */}
      <section className="trust-signals">
        <div className="container">
          <ScrollReveal><SectionRule text="Why Maverick" /></ScrollReveal>
          <ScrollReveal as="h2" variant="reveal" delay={1} className="trust-heading">Care you can trust.</ScrollReveal>
          <ScrollReveal variant="reveal" className="trust-strip">
            <span>Webster Certified &nbsp;&middot;&nbsp; ICPA Member &nbsp;&middot;&nbsp; Dry Needling Certified &nbsp;&middot;&nbsp; RockBlades Certified &nbsp;&middot;&nbsp; HSA &amp; FSA Accepted</span>
          </ScrollReveal>
          <ScrollReveal as="p" variant="reveal" delay={1} className="trust-promo">
            Newborn exam fees waived for babies whose mothers received prenatal care at Maverick.
          </ScrollReveal>
        </div>
      </section>

      {/* Divider: cream → moss */}
      <SectionDivider variant="organic" fromBg="var(--color-cream)" toBg="var(--color-moss)" />

      {/* Closing CTA */}
      <ClosingCTA
        headline="Ready when you are."
        body="Book your first visit online, or reach out — we'd love to hear what brought you here."
      />

      {/* Mobile sticky CTA bar */}
      <div className="mobile-cta-bar">
        <a href={`mailto:${siteInfo.email}`} className="btn btn-secondary" style={{ fontSize: 11 }}>Email</a>
        <a href={siteInfo.bookingUrl} className="btn btn-primary">Book Now</a>
      </div>
    </>
  );
}
