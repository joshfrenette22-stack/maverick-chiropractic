'use client';
import { useState, useRef, useEffect } from 'react';

export default function Accordion({ items }: { items: Array<{ id: string; question: string; answer: string }> }) {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <div>
      {items.map(item => (
        <AccordionItem
          key={item.id}
          item={item}
          isOpen={openId === item.id}
          onToggle={() => setOpenId(openId === item.id ? null : item.id)}
        />
      ))}
    </div>
  );
}

function AccordionItem({ item, isOpen, onToggle }: {
  item: { id: string; question: string; answer: string };
  isOpen: boolean;
  onToggle: () => void;
}) {
  const bodyRef = useRef<HTMLDivElement>(null);
  const [maxHeight, setMaxHeight] = useState('0px');

  useEffect(() => {
    if (isOpen && bodyRef.current) {
      setMaxHeight(bodyRef.current.scrollHeight + 'px');
    } else {
      setMaxHeight('0px');
    }
  }, [isOpen]);

  return (
    <div className={`accordion-item${isOpen ? ' open' : ''}`}>
      <button className="accordion-trigger" onClick={onToggle}>
        <h3>{item.question}</h3>
        <span className="accordion-icon">+</span>
      </button>
      <div className="accordion-body" style={{ maxHeight }}>
        <div className="accordion-body-inner" ref={bodyRef}>
          {item.answer}
        </div>
      </div>
    </div>
  );
}
