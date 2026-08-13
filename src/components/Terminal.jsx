import { useEffect, useState } from "react";
import { profile } from "../data/content";

const BOOT_LINES = [
  { text: "initializing profile...", delay: 150 },
  { text: `identity: ${profile.name}`, delay: 90 },
  { text: `role: ${profile.role}`, delay: 90 },
  { text: "loading modules: python, javascript, react, linux, security...", delay: 90 },
  { text: "status: ONLINE", delay: 120, accent: "var(--color-teal)" },
];

export default function TerminalHero() {
  const [visibleLines, setVisibleLines] = useState(0);
  const [charCount, setCharCount] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReduced) {
      setVisibleLines(BOOT_LINES.length);
      setDone(true);
      return;
    }

    let lineIdx = 0;
    let charIdx = 0;
    let timeoutId;

    const tick = () => {
      if (lineIdx >= BOOT_LINES.length) {
        setDone(true);
        return;
      }
      const line = BOOT_LINES[lineIdx];
      charIdx++;
      setCharCount(charIdx);
      setVisibleLines(lineIdx + 1);

      if (charIdx >= line.text.length) {
        lineIdx++;
        charIdx = 0;
        timeoutId = setTimeout(tick, line.delay + 180);
      } else {
        timeoutId = setTimeout(tick, 14);
      }
    };

    timeoutId = setTimeout(tick, 300);
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div
      className="mx-auto w-full max-w-2xl overflow-hidden rounded-md border shadow-2xl"
      style={{
        borderColor: "var(--color-border)",
        backgroundColor: "var(--color-panel)",
        boxShadow: "0 30px 80px -30px rgba(0,0,0,0.6)",
      }}
    >
      <div
        className="flex items-center gap-2 border-b px-4 py-2.5"
        style={{
          borderColor: "var(--color-border)",
          backgroundColor: "var(--color-panel-raised)",
        }}
      >
        <span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: "var(--color-red)" }} />
        <span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: "var(--color-amber)" }} />
        <span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: "var(--color-teal)" }} />
        <span
          className="ml-2 font-mono-tight text-[11px]"
          style={{ color: "var(--color-text-dim)" }}
        >
          adarsh@portfolio: ~
        </span>
      </div>

      <div className="px-5 py-6 font-mono-tight text-[13px] leading-relaxed sm:text-sm">
        {BOOT_LINES.slice(0, visibleLines).map((line, i) => {
          const isCurrent = i === visibleLines - 1 && !done;
          const text = isCurrent ? line.text.slice(0, charCount) : line.text;
          return (
            <div key={i} className="flex gap-2">
              <span style={{ color: "var(--color-text-dim)" }}>$</span>
              <span style={{ color: line.accent ?? "var(--color-text-muted)" }}>
                {text}
                {isCurrent && <span className="cursor-blink">▍</span>}
              </span>
            </div>
          );
        })}
        {done && (
          <div className="mt-4 flex gap-2">
            <span style={{ color: "var(--color-text-dim)" }}>$</span>
            <span className="cursor-blink" style={{ color: "var(--color-teal)" }}>
              ▍
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
