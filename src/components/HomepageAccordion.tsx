'use client';

import Accordion from '@/components/Accordion';

export default function HomepageAccordion({ items }: { items: Array<{ id: string; question: string; answer: string }> }) {
  return <Accordion items={items} />;
}
