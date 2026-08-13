const SEVERITY_STYLES = {
  CRITICAL: { color: "var(--color-red)", label: "CRITICAL" },
  HIGH: { color: "var(--color-amber)", label: "HIGH" },
  MEDIUM: { color: "var(--color-teal)", label: "MEDIUM" },
  LOW: { color: "var(--color-violet)", label: "LOW" },
};

const STATUS_STYLES = {
  DEPLOYED: "var(--color-teal)",
  "IN PRODUCTION": "var(--color-amber)",
  RESOLVED: "var(--color-violet)",
  ARCHIVED: "var(--color-text-dim)",
};

export function SeverityBadge({ level }) {
  const s = SEVERITY_STYLES[level] ?? SEVERITY_STYLES.LOW;
  return (
    <span
      className="inline-flex items-center gap-1.5 rounded-sm border px-2 py-0.5 text-[11px] font-mono-tight font-semibold tracking-wider"
      style={{
        color: s.color,
        borderColor: s.color + "55",
        backgroundColor: s.color + "14",
      }}
    >
      <span
        className="inline-block h-1.5 w-1.5 rounded-full"
        style={{ backgroundColor: s.color }}
      />
      {s.label}
    </span>
  );
}

export function StatusBadge({ status }) {
  const color = STATUS_STYLES[status] ?? "var(--color-text-dim)";
  return (
    <span
      className="inline-flex items-center gap-1.5 rounded-sm border px-2 py-0.5 text-[11px] font-mono-tight font-semibold tracking-wider"
      style={{
        color,
        borderColor: color + "55",
        backgroundColor: color + "14",
      }}
    >
      {status}
    </span>
  );
}
