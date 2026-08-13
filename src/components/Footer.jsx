import { Link2, Briefcase, Mail } from "lucide-react";
import { profile } from "../data/content";

export default function Footer() {
  return (
    <footer
      className="border-t"
      style={{ borderColor: "var(--color-border)" }}
    >
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-4 px-5 py-8 text-center sm:flex-row sm:justify-between sm:text-left">
        <p
          className="font-mono-tight text-xs"
          style={{ color: "var(--color-text-dim)" }}
        >
          <span style={{ color: "var(--color-teal)" }}>$</span> status: online
          &nbsp;·&nbsp; {profile.tagline}
        </p>
        <div className="flex items-center gap-4">
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="transition-colors"
            style={{ color: "var(--color-text-dim)" }}
          >
            <Link2 size={17} />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            style={{ color: "var(--color-text-dim)" }}
          >
            <Briefcase size={17} />
          </a>
          <a
            href={`mailto:${profile.email}`}
            aria-label="Email"
            style={{ color: "var(--color-text-dim)" }}
          >
            <Mail size={17} />
          </a>
        </div>
      </div>
    </footer>
  );
}
