import React, { useState } from "react";
import styles from "./Projects.module.css";
import { portfolioData } from "../data/portfolioData";
import type { Project } from "../data/portfolioData";
import { ProjectModal } from "./ProjectModal";

export const Projects: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<string>("all");
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  const filters = [
    { label: "All Projects", key: "all" },
    { label: "Full-Stack", key: "fullstack" },
    { label: "Backend & Java", key: "backend" },
    { label: "Data Science", key: "datascience" },
  ];

  const filteredProjects = portfolioData.projects.filter(
    (p) => selectedFilter === "all" || p.category === selectedFilter
  );

  return (
    <section id="projects" className={`${styles.projectsSection} section`}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <span className={styles.sectionBadge}>FEATURED WORK</span>
          <h2 className={styles.sectionTitle}>Software Engineering Projects</h2>
          <p className={styles.sectionSub}>
            Production-ready backend services, real-time WebSockets, cloud architectures, and full-stack platforms.
          </p>
        </div>

        {/* Category Tabs */}
        <div className={styles.filterTabs}>
          {filters.map((f) => (
            <button
              key={f.key}
              onClick={() => setSelectedFilter(f.key)}
              className={`${styles.filterBtn} ${
                selectedFilter === f.key ? styles.activeFilter : ""
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className={styles.projectsGrid}>
          {filteredProjects.map((proj) => (
            <div key={proj.id} className={styles.projectCard}>
              <div className={styles.cardHeader}>
                <span className={styles.categoryBadge}>{proj.category.toUpperCase()}</span>
                <span className={styles.periodText}>{proj.period}</span>
              </div>

              <h3 className={styles.projectTitle}>{proj.title}</h3>
              <p className={styles.solutionText}>{proj.solution}</p>

              {/* Empirical Metrics preview */}
              <div className={styles.metricsBox}>
                <h4 className={styles.metricsTitle}>⚡ Key Achievements:</h4>
                <ul className={styles.metricsList}>
                  {proj.metrics.slice(0, 3).map((m, idx) => (
                    <li key={idx}>✓ {m}</li>
                  ))}
                </ul>
              </div>

              {/* Tech stack */}
              <div className={styles.techList}>
                {proj.tech.map((t, idx) => (
                  <span key={idx} className={styles.techTag}>{t}</span>
                ))}
              </div>

              {/* Actions */}
              <div className={styles.cardFooter}>
                <button
                  onClick={() => setActiveProject(proj)}
                  className={styles.detailsBtn}
                >
                  Deep Dive & System Design →
                </button>

                {proj.github && (
                  <a
                    href={proj.github}
                    target="_blank"
                    rel="noreferrer"
                    className={styles.iconLink}
                    title="View Source Code on GitHub"
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                    </svg>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Interactive Project Deep Dive Modal */}
      <ProjectModal
        project={activeProject}
        onClose={() => setActiveProject(null)}
      />
    </section>
  );
};
