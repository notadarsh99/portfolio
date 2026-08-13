import SectionHeader from "../components/SectionHeader";
import { about } from "../data/content";

export default function About() {
  return (
    <div className="mx-auto max-w-3xl px-5 py-14 sm:py-20">
      <SectionHeader eyebrow="// 01 · about" title="About me" />

      <p
        className="text-lg leading-relaxed"
        style={{ color: "var(--color-text)" }}
      >
        {about.summary}
      </p>

      <div className="mt-6 space-y-5">
        {about.body.map((p, i) => (
          <p
            key={i}
            className="text-[15px] leading-relaxed"
            style={{ color: "var(--color-text-muted)" }}
          >
            {p}
          </p>
        ))}
      </div>

      <Panel eyebrow="// how i learn" accent="var(--color-teal)">
        {about.howILearn}
      </Panel>

      <Panel eyebrow="// goal" accent="var(--color-amber)">
        {about.goal}
      </Panel>

      <div className="mt-10">
        <p
          className="mb-3 font-mono-tight text-xs font-semibold tracking-[0.15em]"
          style={{ color: "var(--color-violet)" }}
        >
          // CURRENTLY EXPLORING
        </p>
        <div className="flex flex-wrap gap-2">
          {about.currentlyExploring.map((item) => (
            <span
              key={item}
              className="rounded-sm border px-3 py-1.5 text-[13px]"
              style={{
                borderColor: "var(--color-border)",
                color: "var(--color-text-muted)",
                backgroundColor: "var(--color-panel)",
              }}
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

function Panel({ eyebrow, accent, children }) {
  return (
    <div
      className="mt-8 rounded-md border-l-2 p-5"
      style={{
        borderColor: accent,
        backgroundColor: "var(--color-panel)",
      }}
    >
      <p
        className="mb-2 font-mono-tight text-xs font-semibold tracking-[0.15em]"
        style={{ color: accent }}
      >
        {eyebrow}
      </p>
      <p
        className="text-[15px] leading-relaxed"
        style={{ color: "var(--color-text)" }}
      >
        {children}
      </p>
    </div>
  );
}
