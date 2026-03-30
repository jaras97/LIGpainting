export default function Section({
  id,
  tone = 'a',
  children,
}: {
  id?: string;
  tone?: 'a' | 'b';
  children: React.ReactNode;
}) {
  const toneA = 'bg-white/60';
  const toneB = 'bg-neutral-50/70';

  // glow suave distinto por tono (brand depth)
  const glowA =
    'radial-gradient(900px 420px at 12% 20%, color-mix(in oklab, var(--brand-cyan) 10%, transparent), transparent 60%)';
  const glowB =
    'radial-gradient(900px 420px at 88% 10%, color-mix(in oklab, var(--brand-navy) 10%, transparent), transparent 60%)';

  return (
    <section
      id={id}
      className={`relative py-20 ${tone === 'a' ? toneA : toneB}`}
    >
      <div
        aria-hidden
        className='pointer-events-none absolute inset-0'
        style={{ background: tone === 'a' ? glowA : glowB, opacity: 0.35 }}
      />
      <div
        aria-hidden
        className='pointer-events-none absolute inset-x-0 top-0 h-px'
        style={{
          background:
            'linear-gradient(90deg, transparent, var(--brand-mist), transparent)',
        }}
      />
      <div className='relative mx-auto max-w-6xl px-6'>{children}</div>
    </section>
  );
}
