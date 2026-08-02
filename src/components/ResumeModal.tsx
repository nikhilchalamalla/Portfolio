import React from "react";
import styles from "./ResumeModal.module.css";
import { portfolioData } from "../data/portfolioData";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <div className={styles.header}>
          <div>
            <h3 className={styles.headerTitle}>Chalamalla Nikhil — Curriculum Vitae</h3>
            <p className={styles.headerSub}>Official Software Engineering Resume Preview</p>
          </div>
          <div className={styles.headerActions}>
            <button onClick={handlePrint} className={styles.downloadBtn}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              Print / Save PDF
            </button>
            <button onClick={onClose} className={styles.closeBtn}>×</button>
          </div>
        </div>

        <div className={styles.resumePaper}>
          {/* Header */}
          <div className={styles.paperHeader}>
            <h1 className={styles.paperName}>{portfolioData.personalInfo.name}</h1>
            <p className={styles.paperRole}>{portfolioData.personalInfo.roleTitle}</p>
            <div className={styles.paperContact}>
              <span>📞 {portfolioData.personalInfo.phone}</span> • 
              <span>📧 {portfolioData.personalInfo.email}</span> • 
              <span>📍 {portfolioData.personalInfo.location}</span>
            </div>
            <div className={styles.paperLinks}>
              <a href={portfolioData.personalInfo.linkedin} target="_blank" rel="noreferrer">LinkedIn</a> | 
              <a href={portfolioData.personalInfo.github} target="_blank" rel="noreferrer">GitHub</a> | 
              <a href={portfolioData.personalInfo.leetcode} target="_blank" rel="noreferrer">LeetCode (370+ Solved)</a>
            </div>
          </div>

          {/* Professional Summary */}
          <div className={styles.section}>
            <h2 className={styles.secTitle}>Professional Summary</h2>
            <p className={styles.secBody}>{portfolioData.personalInfo.bio}</p>
          </div>

          {/* Skills */}
          <div className={styles.section}>
            <h2 className={styles.secTitle}>Technical Skills</h2>
            <div className={styles.skillsGrid}>
              {portfolioData.skills.map((s, idx) => (
                <div key={idx} className={styles.skillRow}>
                  <strong>{s.category}:</strong> {s.items.map((i) => i.name).join(", ")}
                </div>
              ))}
            </div>
          </div>

          {/* Experience */}
          <div className={styles.section}>
            <h2 className={styles.secTitle}>Internship Experience</h2>
            {portfolioData.experience.map((exp, idx) => (
              <div key={idx} className={styles.itemBlock}>
                <div className={styles.itemHead}>
                  <strong>{exp.role} — {exp.company}</strong>
                  <span>{exp.period} | {exp.location}</span>
                </div>
                <ul className={styles.bulletList}>
                  {exp.points.map((pt, pIdx) => (
                    <li key={pIdx}>{pt}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Projects */}
          <div className={styles.section}>
            <h2 className={styles.secTitle}>Projects</h2>
            {portfolioData.projects.map((proj, idx) => (
              <div key={idx} className={styles.itemBlock}>
                <div className={styles.itemHead}>
                  <strong>{proj.title}</strong>
                  <span>{proj.period}</span>
                </div>
                <p className={styles.projTech}>Tech: {proj.tech.join(", ")}</p>
                <ul className={styles.bulletList}>
                  {proj.metrics.map((m, mIdx) => (
                    <li key={mIdx}>{m}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Certifications */}
          <div className={styles.section}>
            <h2 className={styles.secTitle}>Certifications & Achievements</h2>
            <ul className={styles.bulletList}>
              {portfolioData.certifications.map((c, idx) => (
                <li key={idx}><strong>{c.name}</strong> — {c.issuer} ({c.date})</li>
              ))}
              {portfolioData.achievements.map((ach, idx) => (
                <li key={idx}>{ach}</li>
              ))}
            </ul>
          </div>

          {/* Education */}
          <div className={styles.section}>
            <h2 className={styles.secTitle}>Education</h2>
            {portfolioData.education.map((edu, idx) => (
              <div key={idx} className={styles.itemHead} style={{ marginBottom: "6px" }}>
                <div>
                  <strong>{edu.institution}</strong> — {edu.degree}
                </div>
                <span>{edu.score} | {edu.period}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
