import React from "react";
import styles from "./Certifications.module.css";
import { portfolioData } from "../data/portfolioData";

export const Certifications: React.FC = () => {
  const { certifications } = portfolioData;

  return (
    <section id="certifications" className={`${styles.certSection} section`}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <span className={styles.sectionBadge}>VERIFIED CREDENTIALS</span>
          <h2 className={styles.sectionTitle}>Certifications & Achievements</h2>
          <p className={styles.sectionSub}>
            Industry certifications from AWS, Simplilearn, freeCodeCamp, and competitive coding milestones.
          </p>
        </div>

        <div className={styles.certsGrid}>
          {certifications.map((cert, idx) => (
            <div key={idx} className={styles.certCard}>
              <div className={styles.cardTop}>
                <div className={styles.iconBox} style={{ borderColor: cert.badgeColor || '#0ea5e9' }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                </div>
                <span className={styles.certDate}>{cert.date}</span>
              </div>

              <h3 className={styles.certName}>{cert.name}</h3>
              <p className={styles.certIssuer}>{cert.issuer}</p>

              <div className={styles.cardFooter}>
                <span className={styles.verifiedTag}>✔ Verified Credential</span>
              </div>
            </div>
          ))}

          {/* LeetCode DSA Milestone Card */}
          <div className={`${styles.certCard} ${styles.leetcodeCard}`}>
            <div className={styles.cardTop}>
              <div className={styles.iconBox} style={{ borderColor: '#f59e0b' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                </svg>
              </div>
              <span className={styles.certDate}>370+ Solved</span>
            </div>

            <h3 className={styles.certName}>LeetCode DSA Problem Solving</h3>
            <p className={styles.certIssuer}>LeetCode & Algorithmic Platforms</p>

            <div className={styles.cardFooter}>
              <a
                href={portfolioData.personalInfo.leetcode}
                target="_blank"
                rel="noreferrer"
                className={styles.leetcodeLink}
              >
                View LeetCode Profile →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
