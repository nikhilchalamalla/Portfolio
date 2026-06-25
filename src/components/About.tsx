import React from "react";
import styles from "./About.module.css";
import { portfolioData } from "../data/portfolioData";

export const About: React.FC = () => {
  const { skills, education, certifications, achievements } = portfolioData;

  return (
    <section id="about" className={`${styles.aboutSection} section`}>
      <div className="container">
        <h2 className="section-title">About Me</h2>

        <div className={styles.aboutGrid}>
          {/* Left Column: Bio & Core Achievements */}
          <div className={`${styles.bioCard} glass-panel`}>
            <h3 className={styles.subsectionTitle} style={{ marginBottom: '1.5rem' }}>
              Who I Am
            </h3>
            <p className={styles.bioText}>
              I'm a <span className={styles.highlightText}>Full-Stack Engineer</span> currently pursuing my B.Tech in Computer Science and Engineering at Lovely Professional University. I specialize in building robust backend applications with <span className={styles.highlightText}>Java/Spring Boot</span> and <span className={styles.highlightText}>Node.js</span>, connected with interactive, modern frontends using <span className={styles.highlightText}>React</span>.
            </p>
            <p className={styles.bioText}>
              My engineering philosophy revolves around writing clean, highly optimized code and designing scalable architectures. With a strong foundation in <span className={styles.highlightText}>Data Structures & Algorithms</span> and experience with cloud technologies like <span className={styles.highlightText}>AWS</span>, I thrive on turning complex problems into elegant developer solutions.
            </p>

            <h3 className={styles.subsectionTitle} style={{ marginTop: '2.5rem', marginBottom: '1rem' }}>
              Key Accomplishments
            </h3>
            <ul className={styles.achievementsList}>
              {achievements.map((ach, idx) => (
                <li key={idx} className={styles.achievementItem}>
                  {ach}
                </li>
              ))}
            </ul>
          </div>

          {/* Right Column: Skills */}
          <div className={styles.skillsContainer}>
            <h3 className={styles.subsectionTitle}>Technical Stack</h3>
            {skills.map((skillGroup, idx) => (
              <div key={idx} className={styles.skillsGroup}>
                <h4 className={styles.skillsTitle}>
                  <span className={styles.skillsTitleDot}></span>
                  {skillGroup.category}
                </h4>
                <div className={styles.skillsList}>
                  {skillGroup.items.map((skill, sIdx) => (
                    <span key={sIdx} className={styles.skillBadge}>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education & Certifications Row */}
        <div className={styles.detailsGrid}>
          {/* Education Timeline */}
          <div>
            <h3 className={styles.subsectionTitle}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'var(--accent-cyan)' }}>
                <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                <path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5" />
              </svg>
              Education
            </h3>
            <div className={styles.timeline}>
              {education.map((edu, idx) => (
                <div key={idx} className={styles.timelineItem}>
                  <div className={styles.timelineDot}></div>
                  <div className={styles.timelineHeader}>
                    <h4 className={styles.institution}>{edu.institution}</h4>
                    <span className={styles.period}>{edu.period}</span>
                  </div>
                  <p className={styles.degree}>{edu.degree}</p>
                  <p className={styles.score}>{edu.score}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications Card list */}
          <div>
            <h3 className={styles.subsectionTitle}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'var(--accent-gold)' }}>
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
              Certifications
            </h3>
            <div className={styles.certsList}>
              {certifications.map((cert, idx) => (
                <div key={idx} className={styles.certCard}>
                  <div className={styles.certInfo}>
                    <span className={styles.certName}>{cert.name}</span>
                    <span className={styles.certIssuer}>{cert.issuer}</span>
                    <span className={styles.certDate}>{cert.date}</span>
                  </div>
                  <span className={`badge ${idx === 0 ? 'badge-gold' : 'badge-cyan'}`}>
                    {idx === 0 ? 'AWS' : 'Verify'}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
