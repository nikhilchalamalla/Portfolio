import React from "react";
import styles from "./About.module.css";
import { portfolioData } from "../data/portfolioData";

export const About: React.FC = () => {
  const { education, achievements } = portfolioData;

  return (
    <section id="about" className={`${styles.aboutSection} section`}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <span className={styles.sectionBadge}>EXPLORE MY BACKGROUND</span>
          <h2 className={styles.sectionTitle}>About & Engineering Journey</h2>
          <p className={styles.sectionSub}>
            Building high-throughput backends, cloud solutions, and algorithmic efficiency.
          </p>
        </div>

        <div className={styles.aboutGrid}>
          {/* Bio & Philosophy Card */}
          <div className={styles.bioCard}>
            <h3 className={styles.cardHeading}>
              <span className={styles.headingIcon}>💡</span> Professional Summary
            </h3>
            <p className={styles.bioParagraph}>
              I'm a <strong>Software Engineering student</strong> pursuing my B.Tech in Computer Science and Engineering at <strong>Lovely Professional University (2023–2027)</strong>. I possess hands-on expertise in building enterprise-grade backend microservices with <strong>Java & Spring Boot</strong>, high-performance web applications with <strong>React.js & Node.js</strong>, and data pipelines with <strong>Python</strong>.
            </p>
            <p className={styles.bioParagraph}>
              As an <strong>AWS Certified Solutions Architect – Associate</strong>, I design applications with scalability, cloud security, and reliability in mind. My strong foundation in <strong>Data Structures & Algorithms (370+ LeetCode problems solved)</strong> enables me to optimize runtime performance and memory efficiency across large-scale software systems.
            </p>
            <p className={styles.bioParagraph}>
              Beyond core software engineering, I am actively broadening my skills in enterprise platforms including <strong>Salesforce</strong> and <strong>ServiceNow</strong> to deliver end-to-end business software solutions.
            </p>

            {/* Core Values / Strengths */}
            <div className={styles.strengthsGrid}>
              <div className={styles.strengthItem}>
                <span className={styles.strengthIcon}>🎯</span>
                <div>
                  <strong>Object-Oriented Design</strong>
                  <small>Clean code, SDLC, & design patterns</small>
                </div>
              </div>
              <div className={styles.strengthItem}>
                <span className={styles.strengthIcon}>🚀</span>
                <div>
                  <strong>Cloud & Microservices</strong>
                  <small>AWS Cloud, Spring Security, REST APIs</small>
                </div>
              </div>
              <div className={styles.strengthItem}>
                <span className={styles.strengthIcon}>⚡</span>
                <div>
                  <strong>Algorithmic Mastery</strong>
                  <small>370+ DSA problems optimized</small>
                </div>
              </div>
            </div>
          </div>

          {/* Education & Academic Record */}
          <div className={styles.educationCard}>
            <h3 className={styles.cardHeading}>
              <span className={styles.headingIcon}>🎓</span> Education & Academic Record
            </h3>
            <div className={styles.timeline}>
              {education.map((edu, idx) => (
                <div key={idx} className={styles.timelineItem}>
                  <div className={styles.timelineMarker}></div>
                  <div className={styles.timelineContent}>
                    <div className={styles.timelineHeader}>
                      <h4 className={styles.institution}>{edu.institution}</h4>
                      <span className={styles.period}>{edu.period}</span>
                    </div>
                    <p className={styles.degree}>{edu.degree}</p>
                    <div className={styles.scorePill}>
                      <span>{edu.score}</span> • <span>{edu.location}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Key Achievements callout */}
            <div className={styles.achievementsBox}>
              <h4 className={styles.achievementsTitle}>🏆 Notable Accomplishment</h4>
              <ul className={styles.achievementsList}>
                {achievements.map((ach, idx) => (
                  <li key={idx}>{ach}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
