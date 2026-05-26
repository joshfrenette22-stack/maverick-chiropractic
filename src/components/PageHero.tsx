import ScrollReveal from './ScrollReveal';

export default function PageHero({ eyebrow, headline, subtitle, backgroundImage }: {
  eyebrow: string;
  headline: string;
  subtitle?: string;
  backgroundImage: string;
}) {
  return (
    <section className="page-hero">
      <div className="page-hero-bg" style={{ backgroundImage: `url('${backgroundImage}')` }} />
      <div className="page-hero-content">
        <ScrollReveal><p className="eyebrow">{eyebrow}</p></ScrollReveal>
        <ScrollReveal delay={1}><h1>{headline}</h1></ScrollReveal>
        {subtitle && (
          <ScrollReveal delay={2}><p className="hero-sub">{subtitle}</p></ScrollReveal>
        )}
      </div>
      <div className="page-hero-bottom">
        <svg viewBox="0 0 1440 80" preserveAspectRatio="none" fill="var(--color-cream)">
          <ellipse cx="720" cy="80" rx="900" ry="80"/>
        </svg>
      </div>
    </section>
  );
}
