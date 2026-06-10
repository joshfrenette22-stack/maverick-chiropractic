/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import ScrollReveal from '@/components/ScrollReveal';
import SectionRule from '@/components/SectionRule';
import SectionDivider from '@/components/SectionDivider';
import ClosingCTA from '@/components/ClosingCTA';
import PageHero from '@/components/PageHero';
import { siteInfo } from '@/lib/site-data';

export const metadata = {
  title: 'Services — Maverick Chiropractic | Windsor, Colorado',
  description:
    'Pediatric, prenatal, postpartum, and family chiropractic services at Maverick Chiropractic in Windsor, Colorado. Gentle, root-cause care for every stage.',
};

export default function ServicesPage() {
  return (
    <>
      {/* Page Hero */}
      <PageHero
        eyebrow="Our Care"
        headline="The Menu"
        subtitle="Our philosophy is centered on root cause care — unhurried, educational, and personalized to your family."
        backgroundImage="/images/chiropractic-treatment-room.webp"
      />

      {/* 1. Pediatric Chiropractic — image left, arch-topped */}
      <section className="service-section">
        <div className="service-split">
          <ScrollReveal variant="reveal-left" className="service-image">
            <div className="img-arch">
              <img
                src="/images/pediatric-chiropractic-adjustment.webp"
                alt="Chiropractor gently adjusting a baby"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
          </ScrollReveal>
          <ScrollReveal variant="reveal-right" className="service-text">
            <SectionRule text="Pediatric" align="left" />
            <h2>Gentle care for growing bodies.</h2>
            <p>
              Pediatric chiropractic at Maverick uses fingertip-light pressure
              &mdash; no cracking, no popping, and most babies sleep right
              through it. From newborns to school-age kids, we support healthy
              development by addressing the small misalignments that can affect
              immune function, sleep quality, digestive comfort, and overall
              wellbeing. Every adjustment is age-appropriate, thoroughly
              explained, and tailored to your child&apos;s unique needs.
            </p>
            <div className="service-ctas">
              <a href={siteInfo.bookingUrl} className="btn btn-primary">
                Book a Pediatric Visit
              </a>
            </div>
            <ScrollReveal delay={2} className="benefit-pills">
              <span className="benefit-pill">Colic &amp; Reflux</span>
              <span className="benefit-pill">Sleep Support</span>
              <span className="benefit-pill">Developmental Milestones</span>
            </ScrollReveal>
          </ScrollReveal>
        </div>
      </section>

      <SectionDivider
        variant="wave"
        fromBg="var(--color-cream)"
        toBg="var(--color-white)"
      />

      {/* 2. Prenatal & Webster — image right, leaf shape */}
      <section className="service-section">
        <div className="service-split reverse">
          <ScrollReveal variant="reveal-right" className="service-image">
            <div className="img-leaf">
              <img
                src="/images/prenatal-chiropractic-consultation.webp"
                alt="Chiropractor consulting with a pregnant patient during a prenatal visit"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
          </ScrollReveal>
          <ScrollReveal variant="reveal-left" className="service-text">
            <SectionRule text="Prenatal" align="left" />
            <h2>Support for every trimester.</h2>
            <p>
              As a Webster-certified chiropractor, Dr. Courtney specializes in
              prenatal pelvic balance &mdash; helping your body adapt to the
              beautiful demands of pregnancy. Our gentle adjustments ease lower
              back tension, support optimal fetal positioning, and improve
              overall comfort as your body prepares for delivery. Many moms
              report better sleep, easier movement, and a greater sense of calm
              heading into birth.
            </p>
            <div className="service-ctas">
              <a href={siteInfo.bookingUrl} className="btn btn-primary">
                Book Prenatal Care
              </a>
            </div>
            <ScrollReveal delay={2} className="benefit-pills">
              <span className="benefit-pill">Pelvic Balance</span>
              <span className="benefit-pill">Comfort &amp; Mobility</span>
              <span className="benefit-pill">Birth Preparation</span>
            </ScrollReveal>
          </ScrollReveal>
        </div>
      </section>

      <SectionDivider
        variant="scallop"
        fromBg="var(--color-white)"
        toBg="var(--color-cream)"
      />

      {/* 3. Postpartum Recovery — image left, asymmetric arch */}
      <section className="service-section">
        <div className="service-split">
          <ScrollReveal variant="reveal-left" className="service-image">
            <div className="img-asymmetric">
              <img
                src="/images/postpartum-chiropractic-adjustment.webp"
                alt="Dr. Courtney adjusting a postpartum mom while her newborn rests nearby"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
          </ScrollReveal>
          <ScrollReveal variant="reveal-right" className="service-text">
            <SectionRule text="Postpartum" align="left" />
            <h2>Recovery that honors your body.</h2>
            <p>
              Your body did something extraordinary &mdash; now it deserves
              thoughtful care as it heals. Postpartum chiropractic at Maverick
              focuses on spinal realignment, pelvic stability, and the aches
              that come with nursing, carrying, and caring for a newborn. We
              create a calm, private space where new moms can restore comfort,
              rebuild core strength, and feel supported during one of
              life&apos;s most demanding and beautiful chapters.
            </p>
            <div className="service-ctas">
              <a href={siteInfo.bookingUrl} className="btn btn-primary">
                Book Postpartum Care
              </a>
            </div>
            <ScrollReveal delay={2} className="benefit-pills">
              <span className="benefit-pill">Spinal Realignment</span>
              <span className="benefit-pill">Nursing Comfort</span>
              <span className="benefit-pill">Core Recovery</span>
            </ScrollReveal>
          </ScrollReveal>
        </div>
      </section>

      <SectionDivider
        variant="ellipse"
        fromBg="var(--color-cream)"
        toBg="var(--color-white)"
      />

      {/* 4. Family Adjustments — image right, arch-topped */}
      <section className="service-section">
        <div className="service-split reverse">
          <ScrollReveal variant="reveal-right" className="service-image">
            <div className="img-arch">
              <img
                src="/images/chiropractic-spinal-adjustment.webp"
                alt="Chiropractor performing a spinal adjustment on an adult patient"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
          </ScrollReveal>
          <ScrollReveal variant="reveal-left" className="service-text">
            <SectionRule text="Family" align="left" />
            <h2>Whole-family wellness, one visit.</h2>
            <p>
              At Maverick, the whole family is welcome in a single visit &mdash;
              no juggling multiple appointments or driving across town twice.
              From toddlers to grandparents, we make chiropractic part of your
              family&apos;s wellness routine. Ongoing care builds resilience,
              supports posture, and helps everyone move and feel their best.
              It&apos;s healthcare that fits your life, not the other way around.
            </p>
            <div className="service-ctas">
              <a href={siteInfo.bookingUrl} className="btn btn-primary">
                Book a Family Visit
              </a>
            </div>
            <ScrollReveal delay={2} className="benefit-pills">
              <span className="benefit-pill">All Ages Welcome</span>
              <span className="benefit-pill">Ongoing Care</span>
              <span className="benefit-pill">Family Scheduling</span>
            </ScrollReveal>
          </ScrollReveal>
        </div>
      </section>

      <SectionDivider
        variant="gentle"
        fromBg="var(--color-white)"
        toBg="var(--color-cream)"
      />

      {/* 5. First-Visit Experience — image left, leaf shape */}
      <section className="service-section">
        <div className="service-split">
          <ScrollReveal variant="reveal-left" className="service-image">
            <div className="img-leaf">
              <img
                src="/images/front-desk-patient-checkin.webp"
                alt="Patient being welcomed at the clinic front desk"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
          </ScrollReveal>
          <ScrollReveal variant="reveal-right" className="service-text">
            <SectionRule text="New Patients" align="left" />
            <h2>Your first visit is a conversation.</h2>
            <p>
              No surprises, no pressure. Your first visit begins with listening
              &mdash; we want to understand your health history, your goals, and
              what brought you in. From there, a thorough assessment helps us
              build a clear picture. If we adjust on day one, it&apos;s because
              the findings support it. You&apos;ll leave with answers, a plan,
              and the confidence that your care is in thoughtful hands.
            </p>
            <div className="service-ctas">
              <a href={siteInfo.bookingUrl} className="btn btn-primary">
                Book Your First Visit
              </a>
              <Link href="/new-patients" className="btn btn-ghost">
                Read the full first-visit guide
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <SectionDivider
        variant="scallop"
        fromBg="var(--color-cream)"
        toBg="var(--color-white)"
      />

      {/* 6. Wellness Plans — image right, asymmetric arch */}
      <section className="service-section">
        <div className="service-split reverse">
          <ScrollReveal variant="reveal-right" className="service-image">
            <div className="img-asymmetric">
              <img
                src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1200&q=80"
                alt="Active wellness and fitness lifestyle"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
          </ScrollReveal>
          <ScrollReveal variant="reveal-left" className="service-text">
            <SectionRule text="Wellness" align="left" />
            <h2>Care that continues.</h2>
            <p>
              For families who want to make chiropractic part of their ongoing
              routine, our wellness plans offer flexible, membership-style care
              at a pace that fits your life. Plans include regular adjustments,
              priority booking, and family-friendly pricing &mdash; plus ongoing
              education so you understand the why behind every visit. Preventive
              care isn&apos;t a luxury; it&apos;s the foundation of a healthier,
              more resilient family.
            </p>
            <div className="service-ctas">
              <a href={siteInfo.bookingUrl} className="btn btn-primary">
                Explore Wellness Plans
              </a>
            </div>
            <ScrollReveal delay={2} className="benefit-pills">
              <span className="benefit-pill">Monthly Plans</span>
              <span className="benefit-pill">Priority Booking</span>
              <span className="benefit-pill">Family Discounts</span>
            </ScrollReveal>
          </ScrollReveal>
        </div>
      </section>

      <SectionDivider
        variant="organic"
        fromBg="var(--color-white)"
        toBg="var(--color-moss)"
      />

      {/* Closing CTA */}
      <ClosingCTA />
    </>
  );
}
