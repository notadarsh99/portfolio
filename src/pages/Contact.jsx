import { Link2, Briefcase, Mail, MapPin } from "lucide-react";
import SectionHeader from "../components/SectionHeader";
import { profile } from "../data/content";

const CHANNELS = [
  { icon: Mail, label: "Email", value: profile.email, href: `mailto:${profile.email}` },
  { icon: Link2, label: "GitHub", value: profile.github.replace("https://", ""), href: profile.github },
  { icon: Briefcase, label: "LinkedIn", value: profile.linkedin.replace("https://", ""), href: profile.linkedin },
];

export default function Contact() {
  return (
    <div className="mx-auto max-w-2xl px-5 py-14 sm:py-20">
      <SectionHeader
        eyebrow="// 04 · contact"
        title="Open a connection"
        description="Interested in working together, or just want to talk shop about security, Linux, or Minecraft infrastructure? Reach out."
      />

      <div
        className="overflow-hidden rounded-md border"
        style={{
          borderColor: "var(--color-border)",
          backgroundColor: "var(--color-panel)",
        }}
      >
        {CHANNELS.map((c, i) => (
          <a
            key={c.label}
            href={c.href}
            target={c.label === "Email" ? undefined : "_blank"}
            rel="noreferrer"
            className="flex items-center gap-4 px-5 py-4 transition-colors"
            style={{
              borderTop: i === 0 ? "none" : "1px solid var(--color-border-soft)",
            }}
          >
            <c.icon size={18} style={{ color: "var(--color-teal)" }} />
            <div>
              <p
                className="font-mono-tight text-[11px] tracking-wider"
                style={{ color: "var(--color-text-dim)" }}
              >
                {c.label.toUpperCase()}
              </p>
              <p className="text-[14px]" style={{ color: "var(--color-text)" }}>
                {c.value}
              </p>
            </div>
          </a>
        ))}
        <div
          className="flex items-center gap-4 px-5 py-4"
          style={{ borderTop: "1px solid var(--color-border-soft)" }}
        >
          <MapPin size={18} style={{ color: "var(--color-teal)" }} />
          <div>
            <p
              className="font-mono-tight text-[11px] tracking-wider"
              style={{ color: "var(--color-text-dim)" }}
            >
              LOCATION
            </p>
            <p className="text-[14px]" style={{ color: "var(--color-text)" }}>
              {profile.location}
            </p>
          </div>
        </div>
      </div>

      <p
        className="mt-6 font-mono-tight text-xs"
        style={{ color: "var(--color-text-dim)" }}
      >
        $ response_time ≈ 24-48h
      </p>
    </div>
  );
}
