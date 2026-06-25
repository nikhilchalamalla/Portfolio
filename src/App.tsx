import React, { useState, useEffect } from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { ThreeCanvas } from "./components/ThreeCanvas";

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState("home");

  // Track scroll position to update active nav link
  useEffect(() => {
    const sections = ["home", "about", "projects", "contact"];
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
          // Trigger when section occupies 50% or more of the viewport
          threshold: 0.35,
          rootMargin: "-80px 0px 0px 0px", // Navbar offset
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

  return (
    <div style={{ position: "relative", minHeight: "100vh" }}>
      {/* 3D WebGL Constellation Background */}
      <ThreeCanvas />

      {/* Floating Accent glow spots (Faint purple & blue behind sections) */}
      <div
        className="glow-spot"
        style={{
          width: "50vw",
          height: "50vw",
          background: "radial-gradient(circle, var(--accent-cyan-glow) 0%, transparent 70%)",
          top: "10vh",
          right: "-10vw",
        }}
      />
      <div
        className="glow-spot"
        style={{
          width: "60vw",
          height: "60vw",
          background: "radial-gradient(circle, var(--accent-purple-glow) 0%, transparent 70%)",
          top: "120vh",
          left: "-20vw",
        }}
      />
      <div
        className="glow-spot"
        style={{
          width: "50vw",
          height: "50vw",
          background: "radial-gradient(circle, var(--accent-gold-glow) 0%, transparent 70%)",
          top: "220vh",
          right: "-15vw",
        }}
      />

      {/* Navigation */}
      <Navbar activeSection={activeSection} />

      {/* Main Content Layout */}
      <main style={{ position: "relative", zIndex: 10 }}>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>

      {/* Footer */}
      <footer
        style={{
          position: "relative",
          zIndex: 10,
          backgroundColor: "var(--bg-primary)",
          borderTop: "1px solid var(--card-border)",
          padding: "2.5rem 0",
          textAlign: "center",
          color: "var(--text-muted)",
          fontSize: "0.9rem",
        }}
      >
        <div className="container" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "1rem" }}>
          <p>© {new Date().getFullYear()} Chalamalla Nikhil. All rights reserved.</p>
          <p style={{ display: "flex", gap: "0.5rem", alignItems: "center" }}>
            Built with 
            <span style={{ color: "#ef4444" }}>♥</span> 
            using React, TypeScript & Three.js
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;
