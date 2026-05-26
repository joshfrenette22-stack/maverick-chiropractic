import { siteInfo } from '@/lib/site-data';

export default function UtilityBar() {
  return (
    <div className="utility-bar">
      <a href={`mailto:${siteInfo.email}`}>Email</a>
      <span className="sep">&middot;</span>
      <a href={siteInfo.bookingUrl}>Book Online</a>
    </div>
  );
}
