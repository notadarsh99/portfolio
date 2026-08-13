export default function SectionHeader({ eyebrow, title, description }) {
  return (
    <div className="mb-10">
      {eyebrow && (
        <p
          className="mb-2 font-mono-tight text-xs font-semibold tracking-[0.15em]"
          style={{ color: "var(--color-teal)" }}
        >
          {eyebrow}
        </p>
      )}
      <h1
        className="text-3xl font-bold tracking-tight sm:text-4xl"
        style={{ color: "var(--color-text)" }}
      >
        {title}
      </h1>
      {description && (
        <p
          className="mt-3 max-w-2xl text-[15px] leading-relaxed"
          style={{ color: "var(--color-text-muted)" }}
        >
          {description}
        </p>
      )}
    </div>
  );
}
