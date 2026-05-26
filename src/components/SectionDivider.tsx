interface SectionDividerProps {
  variant: string;
  fromBg: string;
  toBg: string;
}

const variants: Record<string, { viewBox: string; content: (toBg: string) => React.ReactNode }> = {
  wave: {
    viewBox: '0 0 1440 60',
    content: (toBg) => (
      <path d="M0,40 C360,0 1080,60 1440,20 L1440,60 L0,60 Z" fill={toBg} />
    ),
  },
  scallop: {
    viewBox: '0 0 1440 48',
    content: (toBg) => (
      <path d="M0,0 C120,48 240,0 360,0 C480,48 600,0 720,0 C840,48 960,0 1080,0 C1200,48 1320,0 1440,0 L1440,48 L0,48 Z" fill={toBg} />
    ),
  },
  ellipse: {
    viewBox: '0 0 1440 60',
    content: (toBg) => (
      <ellipse cx="720" cy="60" rx="900" ry="60" fill={toBg} />
    ),
  },
  organic: {
    viewBox: '0 0 1440 70',
    content: (toBg) => (
      <path d="M0,50 C240,0 480,70 720,30 C960,-10 1200,60 1440,40 L1440,70 L0,70 Z" fill={toBg} />
    ),
  },
  gentle: {
    viewBox: '0 0 1440 60',
    content: (toBg) => (
      <path d="M0,30 C480,60 960,0 1440,30 L1440,60 L0,60 Z" fill={toBg} />
    ),
  },
  arch: {
    viewBox: '0 0 1440 80',
    content: (toBg) => (
      <ellipse cx="720" cy="80" rx="900" ry="80" fill={toBg} />
    ),
  },
  'organic-steep': {
    viewBox: '0 0 1440 80',
    content: (toBg) => (
      <path d="M0,60 Q180,0 360,40 T720,20 T1080,50 T1440,30 L1440,80 L0,80 Z" fill={toBg} />
    ),
  },
};

export default function SectionDivider({ variant, fromBg, toBg }: SectionDividerProps) {
  const v = variants[variant];
  if (!v) return null;

  return (
    <div className="section-divider" style={{ background: fromBg }}>
      <svg viewBox={v.viewBox} preserveAspectRatio="none">
        {v.content(toBg)}
      </svg>
    </div>
  );
}
