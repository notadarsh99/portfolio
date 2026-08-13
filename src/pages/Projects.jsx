import { ExternalLink } from "lucide-react";
import SectionHeader from "../components/SectionHeader";
import { StatusBadge } from "../components/Badge";
import { projects } from "../data/content";

export default function Projects() {
  return (
    <div className="mx-auto max-w-4xl px-5 py-14 sm:py-20">
      <SectionHeader
        eyebrow="// 03 · projects"
        title="Case files"
        description="A log of things I've built and shipped. Each entry is a placeholder — swap in your real project details, links, and outcomes."
      />

      <div className="space-y-5">
        {projects.map((p) => (
          <article
            key={p.id}
            className="rounded-md border p-5 transition-colors sm:p-6"
            style={{
              borderColor: "var(--color-border)",
              backgroundColor: "var(--color-panel)",
            }}
          >
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div>
                <p
                  className="font-mono-tight text-[11px] font-semibold tracking-wider"
                  style={{ color: "var(--color-text-dim)" }}
                >
                  CASE {p.id}
                </p>
                <h2
                  className="mt-1 text-xl font-bold"
                  style={{ color: "var(--color-text)" }}
                >
                  {p.title}
                </h2>
              </div>
              <StatusBadge status={p.status} />
            </div>

            <p
              className="mt-3 font-mono-tight text-xs tracking-wider"
              style={{ color: "var(--color-teal)" }}
            >
              {p.category.toUpperCase()}
            </p>

            <p
              className="mt-3 text-[15px] leading-relaxed"
              style={{ color: "var(--color-text-muted)" }}
            >
              {p.summary}
            </p>

            <div className="mt-4 flex flex-wrap items-center gap-2">
              {p.stack.map((s) => (
                <span
                  key={s}
                  className="rounded-sm border px-2 py-1 font-mono-tight text-[11px]"
                  style={{
                    borderColor: "var(--color-border)",
                    color: "var(--color-text-muted)",
                  }}
                >
                  {s}
                </span>
              ))}
            </div>

            {p.link && (
              <a
                href={p.link}
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-flex items-center gap-1.5 font-mono-tight text-sm font-semibold"
                style={{ color: "var(--color-amber)" }}
              >
                view details <ExternalLink size={13} />
              </a>
            )}
          </article>
        ))}
      </div>
    </div>
  );
}
