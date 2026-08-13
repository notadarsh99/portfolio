import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Terminal, Menu, X } from "lucide-react";
import { profile } from "../data/content";

const LINKS = [
  { to: "/", label: "home" },
  { to: "/about", label: "about" },
  { to: "/skills", label: "skills" },
  { to: "/projects", label: "projects" },
  { to: "/contact", label: "contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header
      className="sticky top-0 z-50 border-b backdrop-blur-md"
      style={{
        borderColor: "var(--color-border)",
        backgroundColor: "rgba(11, 18, 32, 0.85)",
      }}
    >
      <div className="mx-auto flex max-w-5xl items-center justify-between px-5 py-3.5">
        <NavLink
          to="/"
          className="flex items-center gap-2 font-mono-tight text-sm font-semibold"
          style={{ color: "var(--color-text)" }}
          onClick={() => setOpen(false)}
        >
          <Terminal size={16} style={{ color: "var(--color-teal)" }} />
          <span>
            <span style={{ color: "var(--color-text-dim)" }}>~/</span>
            {profile.name.toLowerCase()}
          </span>
        </NavLink>

        <nav className="hidden items-center gap-1 md:flex">
          {LINKS.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === "/"}
              className={({ isActive }) =>
                `rounded-sm px-3 py-1.5 font-mono-tight text-[13px] transition-colors ${
                  isActive ? "" : "hover:text-[var(--color-text)]"
                }`
              }
              style={({ isActive }) => ({
                color: isActive ? "var(--color-teal)" : "var(--color-text-muted)",
                backgroundColor: isActive ? "var(--color-teal)14" : "transparent",
              })}
            >
              ./{l.label}
            </NavLink>
          ))}
        </nav>

        <button
          className="rounded-sm p-1.5 md:hidden"
          style={{ color: "var(--color-text-muted)" }}
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open && (
        <nav
          className="flex flex-col border-t px-5 py-2 md:hidden"
          style={{ borderColor: "var(--color-border)" }}
        >
          {LINKS.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === "/"}
              onClick={() => setOpen(false)}
              className="py-2.5 font-mono-tight text-sm"
              style={({ isActive }) => ({
                color: isActive ? "var(--color-teal)" : "var(--color-text-muted)",
              })}
            >
              ./{l.label}
            </NavLink>
          ))}
        </nav>
      )}
    </header>
  );
}
