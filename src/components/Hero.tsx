import React, { useState, useEffect, useRef } from "react";
import styles from "./Hero.module.css";
import { portfolioData } from "../data/portfolioData";

interface HeroProps {
  onOpenTerminal: () => void;
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenTerminal, onOpenResume }) => {
  const { name, tagline, bio, highlights, github, linkedin, leetcode } =
    portfolioData.personalInfo;

  // Typing effect roles
  const roles = [
    "Full-Stack Software Engineer",
    "Java & Spring Boot Developer",
    "AWS Certified Solutions Architect",
    "React & Node.js Developer",
  ];
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  // 3D Card Parallax Tilt Effect
  const cardRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const currentRole = roles[roleIndex];
    const typingSpeed = isDeleting ? 40 : 80;

    const timer = setTimeout(() => {
      if (!isDeleting && displayedText.length < currentRole.length) {
        setDisplayedText(currentRole.slice(0, displayedText.length + 1));
      } else if (isDeleting && displayedText.length > 0) {
        setDisplayedText(currentRole.slice(0, displayedText.length - 1));
      } else if (!isDeleting && displayedText.length === currentRole.length) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && displayedText.length === 0) {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, roleIndex]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setTilt({
      x: (-y / rect.height) * 20,
      y: (x / rect.width) * 20,
    });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="home" className={styles.heroSection}>
      <div className={`${styles.heroContainer} container`}>
        {/* Left Column: Text & CTA */}
        <div className={styles.leftCol}>
          <div className={styles.badgeWrapper}>
            <span className={styles.statusDot}></span>
            <span className={styles.statusText}>Open to Software Engineering Roles</span>
          </div>

          <h1 className={styles.nameHeading}>
            Hi, I'm <span className={styles.gradientText}>{name}</span>
          </h1>

          <div className={styles.typingBox}>
            <span className={styles.typingRole}>{displayedText}</span>
            <span className={styles.cursor}>|</span>
          </div>

          <p className={styles.tagline}>{tagline}</p>
          <p className={styles.bioText}>{bio}</p>

          {/* Action Buttons */}
          <div className={styles.ctaGroup}>
            <button
              onClick={() => scrollToSection("projects")}
              className={styles.primaryBtn}
            >
              Explore Projects
            </button>

            <button onClick={onOpenResume} className={styles.secondaryBtn}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              View CV / Resume
            </button>

            <button onClick={onOpenTerminal} className={styles.terminalBtn}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="4 17 10 11 4 5" />
                <line x1="12" y1="19" x2="20" y2="19" />
              </svg>
              Terminal
            </button>
          </div>

          {/* Social Profiles */}
          <div className={styles.socialBar}>
            <a href={github} target="_blank" rel="noreferrer" className={styles.socialLink} title="GitHub Profile">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
              </svg>
              <span>GitHub</span>
            </a>

            <a href={linkedin} target="_blank" rel="noreferrer" className={styles.socialLink} title="LinkedIn Profile">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect width="4" height="12" x="2" y="9" />
                <circle cx="4" cy="4" r="2" />
              </svg>
              <span>LinkedIn</span>
            </a>

            <a href={leetcode} target="_blank" rel="noreferrer" className={styles.socialLink} title="LeetCode Profile">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
              </svg>
              <span>LeetCode (370+)</span>
            </a>
          </div>
        </div>

        {/* Right Column: 3D Interactive Profile & Cards */}
        <div className={styles.rightCol}>
          <div
            ref={cardRef}
            className={styles.profile3DCard}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
              transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
            }}
          >
            <div className={styles.imageFrame}>
              <img
                src="/profile.jpg"
                alt="Chalamalla Nikhil"
                className={styles.profileImg}
                onError={(e) => {
                  // Fallback if avatar image missing
                  (e.target as HTMLImageElement).src =
                    "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80";
                }}
              />
              <div className={styles.cardGlowOverlay} />
            </div>

            <div className={styles.cardContent}>
              <h3 className={styles.cardName}>{name}</h3>
              <p className={styles.cardRole}>Software Engineering Student @ LPU</p>
              <div className={styles.badgeRow}>
                <span className={styles.certBadge}>AWS Solutions Architect</span>
                <span className={styles.certBadge}>Java & Spring Boot</span>
              </div>
            </div>

            {/* Floating Card Accents */}
            <div className={`${styles.floatingPill} ${styles.topRightPill}`}>
              <span className={styles.pillIcon}>⚡</span>
              <div>
                <strong>370+ Solved</strong>
                <small>LeetCode DSA</small>
              </div>
            </div>

            <div className={`${styles.floatingPill} ${styles.bottomLeftPill}`}>
              <span className={styles.pillIcon}>☁️</span>
              <div>
                <strong>AWS Certified</strong>
                <small>Associate Level</small>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Metrics Stat Row */}
      <div className={`${styles.statsContainer} container`}>
        <div className={styles.statsGrid}>
          {highlights.map((h, idx) => (
            <div key={idx} className={styles.statCard}>
              <span className={styles.statCount}>{h.count}</span>
              <div>
                <h4 className={styles.statLabel}>{h.label}</h4>
                <p className={styles.statSub}>{h.sub}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
