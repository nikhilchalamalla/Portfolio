import React from "react";
import styles from "./Experience.module.css";
import { portfolioData } from "../data/portfolioData";

export const Experience: React.FC = () => {
  const { experience } = portfolioData;

  return (
    <section id="experience" className={`${styles.expSection} section`}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <span className={styles.sectionBadge}>WORK EXPERIENCE</span>
          <h2 className={styles.sectionTitle}>Internship & Practical Experience</h2>
          <p className={styles.sectionSub}>
            Hands-on software development and data engineering in professional environments.
          </p>
        </div>

        <div className={styles.timeline}>
          {experience.map((exp, idx) => (
            <div key={idx} className={styles.card}>
              <div className={styles.header}>
                <div>
                  <span className={styles.badge}>{exp.location}</span>
                  <h3 className={styles.role}>{exp.role}</h3>
                  <h4 className={styles.company}>{exp.company}</h4>
                </div>
                <span className={styles.period}>{exp.period}</span>
              </div>

              <ul className={styles.bulletList}>
                {exp.points.map((pt, pIdx) => (
                  <li key={pIdx}>{pt}</li>
                ))}
              </ul>

              <div className={styles.techList}>
                {exp.tech.map((t, tIdx) => (
                  <span key={tIdx} className={styles.techPill}>{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
