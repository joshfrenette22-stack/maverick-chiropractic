import { siteInfo } from '@/lib/site-data';

interface ClosingCTAProps {
  headline?: string;
  body?: string;
}

export default function ClosingCTA({
  headline = 'Ready when you are.',
  body = "Your first visit is a conversation, not a commitment. We\u2019ll listen, we\u2019ll explain, and you\u2019ll decide what\u2019s right for your family.",
}: ClosingCTAProps) {
  return (
    <section className="closing-cta">
      <div className="container">
        <h2>{headline}</h2>
        <p>{body}</p>
        <div className="closing-cta-btns">
          <a href={siteInfo.bookingUrl} className="btn btn-white">Book Your First Visit</a>
          <a href={`mailto:${siteInfo.email}`} className="btn btn-outline-light">Email Courtney</a>
        </div>
      </div>
    </section>
  );
}
