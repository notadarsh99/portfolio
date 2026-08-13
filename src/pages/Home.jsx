import { Link } from "react-router-dom";
import { ArrowRight, ShieldCheck, Code2, Server } from "lucide-react";
import TerminalHero from "../components/Terminal";
import { profile, skillCategories, projects } from "../data/content";

const PILLARS = [
  {
    icon: Code2,
    title: "Build",
    text: "Turning ideas into working software across web, automation, and AI.",
  },
  {
    icon: Server,
    title: "Operate",
    text: "Running real infrastructure — Linux servers, deployments, and game/server administration.",
  },
  {
    icon: ShieldCheck,
    title: "Secure",
    text: "Learning to find weaknesses ethically and design systems that hold up.",
  },
];

export default function Home() {
  const totalSkills = skillCategories.reduce(
    (sum, c) => sum + c.findings.length,
    0
  );

  return (
    <div>
      <section className="mx-auto max-w-5xl px-5 pt-14 pb-16 sm:pt-20 sm:pb-24">
        <div className="mb-10 text-center sm:mb-14">
          <p
            className="mb-3 font-mono-tight text-xs font-semibold tracking-[0.2em]"
            style={{ color: "var(--color-amber)" }}
          >
            {profile.subtitle.toUpperCase()}
          </p>
          <h1
            className="mx-auto max-w-3xl text-4xl font-bold leading-tight tracking-tight sm:text-5xl"
            style={{ color: "var(--color-text)" }}
          >
            {profile.tagline}
          </h1>
        </div>

        <TerminalHero />

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Link
            to="/projects"
            className="inline-flex items-center gap-1.5 rounded-sm border px-4 py-2 font-mono-tight text-sm font-semibold transition-colors"
            style={{
              borderColor: "var(--color-teal)",
              color: "var(--color-teal)",
              backgroundColor: "var(--color-teal)14",
            }}
          >
            view case files <ArrowRight size={14} />
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center gap-1.5 rounded-sm border px-4 py-2 font-mono-tight text-sm font-semibold"
            style={{
              borderColor: "var(--color-border)",
              color: "var(--color-text-muted)",
            }}
          >
            get in touch
          </Link>
        </div>
      </section>

      <section
        className="border-t"
        style={{ borderColor: "var(--color-border)" }}
      >
        <div className="mx-auto grid max-w-5xl gap-px sm:grid-cols-3">
          {PILLARS.map(({ icon: Icon, title, text }) => (
            <div
              key={title}
              className="border-b p-6 sm:border-b-0 sm:border-r sm:last:border-r-0"
              style={{ borderColor: "var(--color-border)" }}
            >
              <Icon size={18} style={{ color: "var(--color-teal)" }} />
              <h3
                className="mt-3 font-mono-tight text-sm font-semibold"
                style={{ color: "var(--color-text)" }}
              >
                {title}
              </h3>
              <p
                className="mt-1.5 text-sm leading-relaxed"
                style={{ color: "var(--color-text-muted)" }}
              >
                {text}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section
        className="border-t"
        style={{ borderColor: "var(--color-border)" }}
      >
        <div className="mx-auto max-w-5xl px-5 py-10">
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4 text-center">
            <Stat value={totalSkills} label="tracked skills" />
            <Stat value={projects.length} label="logged case files" />
            <Stat value={skillCategories.length} label="focus areas" />
          </div>
        </div>
      </section>
    </div>
  );
}

function Stat({ value, label }) {
  return (
    <div>
      <div
        className="font-mono-tight text-2xl font-bold"
        style={{ color: "var(--color-amber)" }}
      >
        {String(value).padStart(2, "0")}
      </div>
      <div
        className="mt-1 text-xs uppercase tracking-wider"
        style={{ color: "var(--color-text-dim)" }}
      >
        {label}
      </div>
    </div>
  );
}
