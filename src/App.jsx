import { useState } from "react";
import { ArrowDown, ArrowUpRight, Github, Instagram, Mail, Menu, X } from "lucide-react";
import { profile, skillCategories } from "./data/content";

const navigation = [
  ["About", "about"],
  ["Selected work", "work"],
  ["Expertise", "expertise"],
  ["Contact", "contact"],
];

const interests = [
  { index: "01", title: "Security & systems", detail: "Cybersecurity · Linux · Networking" },
  { index: "02", title: "Software & the web", detail: "Python · JavaScript · React" },
  { index: "03", title: "Tools that help", detail: "Automation · APIs · Infrastructure" },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site-shell">
      <header className="site-header">
        <a className="wordmark" href="#home" onClick={closeMenu} aria-label={`${profile.name}, home`}>
          <span className="wordmark-mark">A</span>
          <span>{profile.name}<span className="wordmark-dot">.</span></span>
        </a>
        <button className="menu-toggle" type="button" aria-label={menuOpen ? "Close navigation" : "Open navigation"} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
        <nav className={menuOpen ? "main-nav is-open" : "main-nav"} aria-label="Main navigation">
          {navigation.map(([label, id]) => <a key={id} href={`#${id}`} onClick={closeMenu}>{label}</a>)}
          <a className="nav-resume" href="/Adarsh_Kumar_Portfolio%20(1).pdf" target="_blank" rel="noreferrer" onClick={closeMenu}>Résumé <ArrowUpRight size={13} /></a>
        </nav>
      </header>

      <main>
        <section className="hero section-wrap" id="home">
          <div className="hero-index"><span>PORTFOLIO</span><span>2026 — PRESENT</span></div>
          <div className="hero-content">
            <p className="eyebrow"><span className="status-dot" /> CYBERSECURITY · DEVELOPMENT · SYSTEMS</p>
            <h1>Thoughtful work.<br /><em>Curious mind.</em></h1>
            <div className="hero-bottom">
              <p className="hero-description">I’m {profile.name}, an aspiring cybersecurity engineer drawn to the details behind the things we build—and the ways we keep them secure.</p>
              <a className="hero-link" href="#work">Discover my work <ArrowDown size={15} /></a>
            </div>
          </div>
          <div className="hero-rule"><span>01</span><span className="rule-line" /><span>{profile.location}</span></div>
          <div className="hero-monogram" aria-hidden="true">A<span>.</span></div>
        </section>

        <section className="intro section-pad" id="about">
          <div className="section-wrap intro-grid">
            <p className="section-label"><span>01</span> THE PERSON BEHIND THE SCREEN</p>
            <div className="intro-copy">
              <h2>Good work begins with <em>good questions.</em></h2>
              <p className="intro-lead">I’m a technology enthusiast who learns by building, experimenting, and understanding how things work from the inside out.</p>
              <p>My interests span software, systems, and security. Whether I’m exploring Linux, developing a small tool, or learning the fundamentals of networking, I’m happiest when there’s something new to figure out.</p>
              <p>I believe in steady progress, thoughtful practice, and using technical curiosity responsibly.</p>
              <div className="signature"><span className="signature-line" /> {profile.name} <span className="signature-location">— {profile.location}</span></div>
            </div>
          </div>
        </section>

        <section className="work section-pad" id="work">
          <div className="section-wrap">
            <div className="section-heading">
              <p className="section-label"><span>02</span> AREAS OF INTEREST</p>
              <h2>A practice of <em>curiosity.</em></h2>
              <p className="section-description">A few of the disciplines I’m exploring, and the ideas that keep me looking closer.</p>
            </div>
            <div className="interest-list">
              {interests.map((item) => (
                <article className="interest-row" key={item.index}>
                  <span className="interest-index">{item.index}</span>
                  <h3>{item.title}</h3>
                  <p>{item.detail}</p>
                  <ArrowUpRight className="interest-arrow" size={17} />
                </article>
              ))}
            </div>
            <a className="work-link" href={profile.github} target="_blank" rel="noreferrer"><Github size={17} /> Follow the work on GitHub <ArrowUpRight size={15} /></a>
          </div>
        </section>

        <section className="expertise section-pad" id="expertise">
          <div className="section-wrap expertise-grid">
            <div>
              <p className="section-label"><span>03</span> THE TOOLKIT</p>
              <h2>Foundations in<br /><em>the making.</em></h2>
              <p className="expertise-note">Skills grow through use. Here are some of the tools and topics I’m working with today.</p>
            </div>
            <div className="skill-list">
              {skillCategories.slice(0, 5).map((category, index) => (
                <div className="skill-row" key={category.id}>
                  <span className="skill-index">0{index + 1}</span>
                  <h3>{category.label}</h3>
                  <p>{category.findings.slice(0, 5).map((skill) => skill.name).join(" · ")}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="contact section-pad" id="contact">
          <div className="section-wrap contact-inner">
            <p className="section-label"><span>04</span> A NOTE IS ALWAYS WELCOME</p>
            <p className="contact-overline">HAVE SOMETHING IN MIND?</p>
            <h2>Let’s start a<br /><em>conversation.</em></h2>
            <a className="contact-email" href={`mailto:${profile.email}`}>{profile.email}<ArrowUpRight size={18} /></a>
            <div className="contact-foot"><p>Open to thoughtful conversations, new perspectives, and good work.</p><a className="contact-button" href={`mailto:${profile.email}`}><Mail size={15} /> Get in touch</a></div>
          </div>
        </section>
      </main>

      <footer className="site-footer section-wrap">
        <a className="wordmark footer-mark" href="#home"><span className="wordmark-mark">A</span><span>{profile.name}<span className="wordmark-dot">.</span></span></a>
        <span className="footer-note">MADE WITH INTENTION · © {new Date().getFullYear()} {profile.name.toUpperCase()}</span>
        <div className="social-links">
          <a href={profile.github} aria-label="GitHub profile" target="_blank" rel="noreferrer"><Github size={16} /></a>
          <a href={profile.linkedin} aria-label="Instagram profile" target="_blank" rel="noreferrer"><Instagram size={16} /></a>
          <a href={`mailto:${profile.email}`} aria-label="Email Adarsh"><Mail size={16} /></a>
        </div>
      </footer>
    </div>
  );
}

export default App;
