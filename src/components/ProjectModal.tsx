import React from "react";
import styles from "./ProjectModal.module.css";
import type { Project } from "../data/portfolioData";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <div className={styles.header}>
          <div>
            <span className={styles.badge}>{project.category.toUpperCase()}</span>
            <h3 className={styles.title}>{project.title}</h3>
            <p className={styles.period}>{project.period}</p>
          </div>
          <button className={styles.closeBtn} onClick={onClose}>×</button>
        </div>

        <div className={styles.body}>
          {/* Problem & Solution */}
          <div className={styles.grid}>
            <div className={styles.card}>
              <h4 className={styles.cardTitle}>⚠️ Problem Statement</h4>
              <p className={styles.cardText}>{project.problem}</p>
            </div>
            <div className={`${styles.card} ${styles.solutionCard}`}>
              <h4 className={styles.cardTitle}>💡 Architectural Solution</h4>
              <p className={styles.cardText}>{project.solution}</p>
            </div>
          </div>

          {/* Architecture Diagram Flow */}
          {project.architecture && project.architecture.length > 0 && (
            <div className={styles.section}>
              <h4 className={styles.secHeader}>🏗️ System Architecture Flow</h4>
              <div className={styles.archFlow}>
                {project.architecture.map((step, idx) => (
                  <React.Fragment key={idx}>
                    <div className={styles.archBox}>
                      <span className={styles.archStep}>0{idx + 1}</span>
                      <span>{step}</span>
                    </div>
                    {idx < project.architecture!.length - 1 && (
                      <div className={styles.archArrow}>↓</div>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>
          )}

          {/* Key Metrics */}
          <div className={styles.section}>
            <h4 className={styles.secHeader}>📊 Empirical Performance Metrics</h4>
            <div className={styles.metricsGrid}>
              {project.metrics.map((metric, idx) => (
                <div key={idx} className={styles.metricCard}>
                  <span className={styles.metricCheck}>✓</span>
                  <span>{metric}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack */}
          <div className={styles.section}>
            <h4 className={styles.secHeader}>🛠️ Tech Stack & Libraries</h4>
            <div className={styles.techPills}>
              {project.tech.map((t, idx) => (
                <span key={idx} className={styles.pill}>{t}</span>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className={styles.footer}>
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className={styles.githubBtn}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                </svg>
                View Repository on GitHub
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
