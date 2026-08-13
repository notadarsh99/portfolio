import SectionHeader from "../components/SectionHeader";
import { SeverityBadge } from "../components/Badge";
import { skillCategories } from "../data/content";

const ORDER = { CRITICAL: 0, HIGH: 1, MEDIUM: 2, LOW: 3 };

export default function Skills() {
  return (
    <div className="mx-auto max-w-4xl px-5 py-14 sm:py-20">
      <SectionHeader
        eyebrow="// 02 · skills"
        title="Findings board"
        description="Skills logged like a security assessment — severity here reflects depth of experience, not risk. CRITICAL marks a core strength; LOW marks something I'm actively exploring."
      />

      <div
        className="mb-8 flex flex-wrap gap-4 rounded-md border p-4"
        style={{
          borderColor: "var(--color-border)",
          backgroundColor: "var(--color-panel)",
        }}
      >
        {["CRITICAL", "HIGH", "MEDIUM", "LOW"].map((level) => (
          <div key={level} className="flex items-center gap-2">
            <SeverityBadge level={level} />
          </div>
        ))}
      </div>

      <div className="space-y-4">
        {skillCategories.map((cat) => (
          <div
            key={cat.id}
            className="overflow-hidden rounded-md border"
            style={{
              borderColor: "var(--color-border)",
              backgroundColor: "var(--color-panel)",
            }}
          >
            <div
              className="flex items-center justify-between border-b px-4 py-2.5"
              style={{
                borderColor: "var(--color-border)",
                backgroundColor: "var(--color-panel-raised)",
              }}
            >
              <span
                className="font-mono-tight text-xs font-semibold tracking-wider"
                style={{ color: "var(--color-text-muted)" }}
              >
                {cat.label.toUpperCase()}
              </span>
              <span
                className="font-mono-tight text-[11px]"
                style={{ color: "var(--color-text-dim)" }}
              >
                {cat.findings.length} findings
              </span>
            </div>

            <div>
              {[...cat.findings]
                .sort((a, b) => ORDER[a.severity] - ORDER[b.severity])
                .map((f, i) => (
                  <div
                    key={f.name}
                    className="flex items-center justify-between px-4 py-3"
                    style={{
                      borderTop: i === 0 ? "none" : "1px solid var(--color-border-soft)",
                    }}
                  >
                    <span
                      className="text-[14px]"
                      style={{ color: "var(--color-text)" }}
                    >
                      {f.name}
                    </span>
                    <SeverityBadge level={f.severity} />
                  </div>
                ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
