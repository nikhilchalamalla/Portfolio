import React from "react";
import styles from "./Projects.module.css";
import { portfolioData } from "../data/portfolioData";

export const Projects: React.FC = () => {
  const { projects } = portfolioData;

  return (
    <section id="projects" className={`${styles.projectsSection} section`}>
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>

        <div className={styles.cardsGrid}>
          {projects.map((project) => (
            <div key={project.id} className={`${styles.projectCard} glass-panel`}>
              {/* Header */}
              <div className={styles.projectHeader}>
                <h3 className={styles.projectTitle}>{project.title}</h3>
                <span className={styles.projectPeriod}>{project.period}</span>
              </div>

              {/* Problem */}
              <div className={styles.cardBlock}>
                <h4 className={`${styles.blockTitle} ${styles.problemTitle}`}>
                  Problem
                </h4>
                <p className={styles.blockText}>{project.problem}</p>
              </div>

              {/* Solution */}
              <div className={styles.cardBlock}>
                <h4 className={`${styles.blockTitle} ${styles.solutionTitle}`}>
                  Solution
                </h4>
                <p className={styles.blockText}>{project.solution}</p>
              </div>

              {/* Impact / Metrics */}
              <div className={styles.cardBlock}>
                <h4 className={`${styles.blockTitle} ${styles.metricsTitle}`}>
                  Impact & Key Metrics
                </h4>
                <ul className={styles.metricsList}>
                  {project.metrics.map((metric, mIdx) => (
                    <li key={mIdx} className={styles.metricItem}>
                      {metric}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech Stack List & Links */}
              <div className={styles.techContainer}>
                <div className={styles.techList}>
                  {project.tech.map((tag, tIdx) => (
                    <span key={tIdx} className={styles.techTag}>
                      {tag}
                    </span>
                  ))}
                </div>

                <div className={styles.linksList}>
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${styles.cardLink} ${styles.githubLink}`}
                      aria-label={`${project.title} GitHub repository`}
                    >
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                        <path d="M9 18c-4.51 2-5-2-7-2" />
                      </svg>
                      Code
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${styles.cardLink} ${styles.liveLink}`}
                      aria-label={`${project.title} Live demo`}
                    >
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                        <polyline points="15 3 21 3 21 9" />
                        <line x1="10" y1="14" x2="21" y2="3" />
                      </svg>
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
