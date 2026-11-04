import { useState } from "react";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Code2,
  Github,
  Linkedin,
  Mail,
  Menu,
  ShieldCheck,
  Terminal,
  X,
} from "lucide-react";
import { about, profile, skillCategories } from "./data/content";

const navigation = [
  ["About", "about"],
  ["What I do", "work"],
  ["Toolkit", "toolkit"],
  ["Contact", "contact"],
];

const focusAreas = [
  {
    number: "01",
    icon: <ShieldCheck size={20} strokeWidth={1.7} />,
    title: "Security-minded",
    text: "Learning how systems fail—and how to make them more resilient—with curiosity, care, and an ethical mindset.",
    tags: ["Cybersecurity", "Networking", "Linux"],
  },
  {
    number: "02",
    icon: <Code2 size={20} strokeWidth={1.7} />,
    title: "Build to understand",
    text: "I learn by making useful things: web interfaces, Python experiments, automations, and small tools that solve real problems.",
    tags: ["Python", "JavaScript", "React"],
  },
  {
    number: "03",
    icon: <Terminal size={20} strokeWidth={1.7} />,
    title: "Comfortable at the terminal",
    text: "From troubleshooting a machine to keeping a game server running, I enjoy getting under the hood and figuring things out.",
    tags: ["Systems", "Automation", "Infrastructure"],
  },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site-shell">
      <header className="site-header">
        <a className="wordmark" href="#home" onClick={closeMenu} aria-label="Adarsh, home">
          <span className="wordmark-mark">a.</span>
          <span>adarsh<span className="wordmark-period">/</span>dev</span>
        </a>
        <button
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
        <nav className={menuOpen ? "main-nav is-open" : "main-nav"} aria-label="Main navigation">
          {navigation.map(([label, id]) => (
            <a key={id} href={`#${id}`} onClick={closeMenu}>{label}</a>
          ))}
          <a className="nav-resume" href="/Adarsh_Kumar_Portfolio%20(1).pdf" target="_blank" rel="noreferrer" onClick={closeMenu}>
            View résumé <ArrowUpRight size={14} />
          </a>
        </nav>
      </header>

      <main>
        <section className="hero section-wrap" id="home">
          <div className="hero-copy">
            <p className="eyebrow"><span className="status-dot" /> AVAILABLE FOR WHAT'S NEXT</p>
            <h1>Curious by nature.<br /><span>Security-minded</span><br />by design.</h1>
            <p className="hero-description">
              Hey, I’m <strong>{profile.name}</strong> — an aspiring cybersecurity engineer who learns by building, exploring, and asking one more question.
            </p>
            <div className="hero-actions">
              <a className="button button-dark" href="#work">Explore my work <ArrowDown size={16} /></a>
              <a className="text-link" href={`mailto:${profile.email}`}>Say hello <ArrowUpRight size={16} /></a>
            </div>
            <div className="hero-meta">
              <span><span className="meta-label">BASED IN</span>{profile.location}</span>
              <span><span className="meta-label">CURRENT FOCUS</span>Cybersecurity & systems</span>
            </div>
          </div>
          <div className="hero-art" aria-label="A terminal-inspired illustration">
            <div className="art-orbit orbit-one" />
            <div className="art-orbit orbit-two" />
            <div className="art-glow" />
            <div className="art-card">
              <div className="terminal-top"><span /><span /><span /><small>adarsh@localhost ~</small></div>
              <div className="terminal-content">
                <p><span className="prompt">$</span> whoami</p>
                <p className="terminal-output">builder, learner,<br />future security engineer<span className="terminal-cursor">_</span></p>
                <p className="terminal-gap"><span className="prompt">$</span> cat /values</p>
                <p className="terminal-output terminal-values">curiosity<br />ethical practice<br />keep learning</p>
              </div>
            </div>
            <div className="art-stamp"><span>LEARN<br />BUILD<br />SECURE</span><ArrowUpRight size={16} /></div>
            <span className="art-caption">A LITTLE CURIOSITY GOES A LONG WAY.</span>
          </div>
          <a href="#about" className="scroll-cue" aria-label="Scroll to about section"><span /> SCROLL TO EXPLORE</a>
        </section>

        <div className="marquee" aria-label="Areas of interest">
          <div className="marquee-track"><span>CYBERSECURITY</span><i>✳</i><span>LINUX</span><i>✳</i><span>WEB DEVELOPMENT</span><i>✳</i><span>AUTOMATION</span><i>✳</i><span>CYBERSECURITY</span><i>✳</i><span>LINUX</span><i>✳</i><span>WEB DEVELOPMENT</span><i>✳</i><span>AUTOMATION</span><i>✳</i></div>
        </div>

        <section className="about section-wrap section-pad" id="about">
          <div className="section-kicker"><span>01 / A LITTLE ABOUT ME</span><span className="kicker-line" /></div>
          <div className="about-layout">
            <h2>Always learning.<br /><span>Always tinkering.</span></h2>
            <div className="about-copy">
              <p className="about-lead">{about.summary}</p>
              <p>I’m drawn to the places where software, systems, and security meet. I like getting hands-on, following the details, and turning “I wonder how that works” into something I can understand and build.</p>
              <p>Right now, I’m growing my foundations in programming, networking, Linux, and secure development—one experiment at a time.</p>
              <div className="about-signoff"><span className="signoff-rule" /> <span>Based in {profile.location}</span></div>
            </div>
          </div>
        </section>

        <section className="work section-pad" id="work">
          <div className="section-wrap">
            <div className="section-kicker"><span>02 / WHAT I’M INTO</span><span className="kicker-line" /></div>
            <div className="section-heading-row">
              <h2>Curiosity, <span>in practice.</span></h2>
              <p>A few of the directions I’m exploring and the kinds of problems I like to get my hands on.</p>
            </div>
            <div className="focus-grid">
              {focusAreas.map((area) => (
                <article className="focus-card" key={area.number}>
                  <div className="focus-card-top"><span className="focus-number">{area.number} / 03</span><span className="focus-icon">{area.icon}</span></div>
                  <h3>{area.title}</h3>
                  <p>{area.text}</p>
                  <div className="tag-row">{area.tags.map((tag) => <span className="tag" key={tag}>{tag}</span>)}</div>
                  <div className="card-bottom-line" />
                </article>
              ))}
            </div>
            <a className="github-callout" href={profile.github} target="_blank" rel="noreferrer">
              <span className="github-icon"><Github size={20} /></span>
              <span><strong>See what I’m building</strong><small>Explore my GitHub profile and ongoing experiments.</small></span>
              <ArrowUpRight className="callout-arrow" size={19} />
            </a>
          </div>
        </section>

        <section className="toolkit section-wrap section-pad" id="toolkit">
          <div className="section-kicker"><span>03 / THE TOOLKIT</span><span className="kicker-line" /></div>
          <div className="toolkit-layout">
            <div className="toolkit-intro"><h2>Tools I use.<br /><span>Skills I’m growing.</span></h2><p>A work in progress, by design. I believe good foundations come from staying curious and practicing consistently.</p><span className="toolkit-note"><span className="status-dot" /> CURRENTLY LEARNING, ALWAYS</span></div>
            <div className="skill-list">
              {skillCategories.slice(0, 5).map((category, index) => (
                <div className="skill-row" key={category.id}>
                  <span className="skill-index">0{index + 1}</span>
                  <h3>{category.label}</h3>
                  <div className="skill-tags">{category.findings.slice(0, 6).map((skill) => <span key={skill.name}>{skill.name}</span>)}</div>
                  <ArrowRight className="skill-arrow" size={16} />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="contact section-pad" id="contact">
          <div className="section-wrap contact-inner">
            <div className="section-kicker"><span>04 / YOUR TURN</span><span className="kicker-line" /></div>
            <p className="contact-overline">HAVE A QUESTION, IDEA, OR JUST WANT TO CONNECT?</p>
            <h2>Let’s make<br /><span>something meaningful.</span></h2>
            <a className="contact-email" href={`mailto:${profile.email}`}>{profile.email}<ArrowUpRight size={21} /></a>
            <div className="contact-bottom"><p>Open to conversations, collaboration, and learning from people doing thoughtful work.</p><a className="button button-light" href={`mailto:${profile.email}`}><Mail size={16} /> Get in touch</a></div>
          </div>
        </section>
      </main>

      <footer className="site-footer section-wrap">
        <a className="wordmark footer-mark" href="#home"><span className="wordmark-mark">a.</span><span>adarsh<span className="wordmark-period">/</span>dev</span></a>
        <span className="footer-note">DESIGNED WITH CURIOSITY · © {new Date().getFullYear()} {profile.name.toUpperCase()}</span>
        <div className="social-links"><a href={profile.github} aria-label="GitHub profile" target="_blank" rel="noreferrer"><Github size={17} /></a><a href={profile.linkedin} aria-label="Instagram profile" target="_blank" rel="noreferrer"><Linkedin size={17} /></a><a href={`mailto:${profile.email}`} aria-label="Email Adarsh"><Mail size={17} /></a></div>
      </footer>
    </div>
  );
}

export default App;
