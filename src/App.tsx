import React, { useState, useEffect } from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Skills } from "./components/Skills";
import { Experience } from "./components/Experience";
import { Projects } from "./components/Projects";
import { Certifications } from "./components/Certifications";
import { Contact } from "./components/Contact";
import { ThreeCanvas } from "./components/ThreeCanvas";
import { TerminalModal } from "./components/TerminalModal";
import { ResumeModal } from "./components/ResumeModal";
import { portfolioData } from "./data/portfolioData";

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [terminalOpen, setTerminalOpen] = useState(false);
  const [resumeOpen, setResumeOpen] = useState(false);

  useEffect(() => {
    const sections = ["home", "about", "skills", "experience", "projects", "certifications", "contact"];
    const observers = sections.map((id) => {
      const el = document.getElementById(id);
      if (!el) return null;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(id);
          }
        },
        {
          threshold: 0.25,
          rootMargin: "-80px 0px 0px 0px",
        }
      );

      observer.observe(el);
      return { el, observer };
    });

    return () => {
      observers.forEach((obs) => {
        if (obs) {
          obs.observer.unobserve(obs.el);
          obs.observer.disconnect();
        }
      });
    };
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey && e.key === "`") || (e.altKey && e.key.toLowerCase() === "t")) {
        e.preventDefault();
        setTerminalOpen((prev) => !prev);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div style={{ position: "relative", minHeight: "100vh" }}>
      <ThreeCanvas />

      <div
        className="glow-spot"
        style={{
          width: "45vw",
          height: "45vw",
          background: "radial-gradient(circle, rgba(14, 165, 233, 0.12) 0%, transparent 70%)",
          top: "5vh",
          right: "-10vw",
        }}
      />
      <div
        className="glow-spot"
        style={{
          width: "55vw",
          height: "55vw",
          background: "radial-gradient(circle, rgba(168, 85, 247, 0.12) 0%, transparent 70%)",
          top: "130vh",
          left: "-15vw",
        }}
      />
      <div
        className="glow-spot"
        style={{
          width: "50vw",
          height: "50vw",
          background: "radial-gradient(circle, rgba(34, 197, 94, 0.08) 0%, transparent 70%)",
          top: "260vh",
          right: "-15vw",
        }}
      />

      <Navbar
        activeSection={activeSection}
        onOpenTerminal={() => setTerminalOpen(true)}
        onOpenResume={() => setResumeOpen(true)}
      />

      <main style={{ position: "relative", zIndex: 10 }}>
        <Hero
          onOpenTerminal={() => setTerminalOpen(true)}
          onOpenResume={() => setResumeOpen(true)}
        />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Certifications />
        <Contact onOpenResume={() => setResumeOpen(true)} />
      </main>

      <footer
        style={{
          position: "relative",
          zIndex: 10,
          backgroundColor: "#0b0f19",
          borderTop: "1px solid rgba(255, 255, 255, 0.08)",
          padding: "2.5rem 0",
          color: "#9ca3af",
          fontSize: "0.9rem",
        }}
      >
        <div
          className="container"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "1rem",
          }}
        >
          <div>
            <p style={{ fontWeight: 600, color: "#f3f4f6" }}>
              {portfolioData.personalInfo.name} — Software Engineer
            </p>
            <p style={{ fontSize: "0.8rem", color: "#6b7280", marginTop: "2px" }}>
              © {new Date().getFullYear()} All rights reserved. Built with React, TypeScript & Three.js.
            </p>
          </div>

          <div style={{ display: "flex", gap: "1.25rem", fontSize: "0.85rem" }}>
            <a href={portfolioData.personalInfo.github} target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a href={portfolioData.personalInfo.linkedin} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            <a href={portfolioData.personalInfo.leetcode} target="_blank" rel="noreferrer">
              LeetCode
            </a>
            <button
              onClick={() => setTerminalOpen(true)}
              style={{
                background: "none",
                border: "none",
                color: "#38bdf8",
                cursor: "pointer",
                fontWeight: 600,
              }}
            >
              [ CLI Terminal ]
            </button>
          </div>
        </div>
      </footer>

      <TerminalModal isOpen={terminalOpen} onClose={() => setTerminalOpen(false)} />
      <ResumeModal isOpen={resumeOpen} onClose={() => setResumeOpen(false)} />
    </div>
  );
};

export default App;
