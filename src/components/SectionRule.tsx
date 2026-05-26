interface SectionRuleProps {
  text: string;
  className?: string;
  align?: 'center' | 'left';
}

export default function SectionRule({ text, className, align }: SectionRuleProps) {
  return (
    <div
      className={`section-rule${className ? ` ${className}` : ''}`}
      style={align === 'left' ? { justifyContent: 'flex-start' } : undefined}
    >
      <span className="eyebrow">{text}</span>
    </div>
  );
}
