export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  center = true,
  light = false,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  center?: boolean;
  light?: boolean;
}) {
  return (
    <div className={`reveal ${center ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'}`}>
      {eyebrow && (
        <span className={`section-eyebrow ${light ? '!text-gold-300' : ''}`}>
          <span className="h-px w-6 bg-current opacity-50" />
          {eyebrow}
        </span>
      )}
      <h2
        className={`mt-3 text-3xl font-bold leading-tight sm:text-4xl ${
          light ? '!text-white' : ''
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-4 text-base leading-relaxed ${
            light ? 'text-white/70' : 'text-slate-500'
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}

