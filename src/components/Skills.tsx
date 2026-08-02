import React, { useState } from "react";
import styles from "./Skills.module.css";
import { portfolioData } from "../data/portfolioData";

export const Skills: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const categories = ["All", ...portfolioData.skills.map((s) => s.category)];

  const filteredSkills = portfolioData.skills
    .filter((cat) => selectedCategory === "All" || cat.category === selectedCategory)
    .map((cat) => ({
      ...cat,
      items: cat.items.filter((item) =>
        item.name.toLowerCase().includes(searchQuery.toLowerCase())
      ),
    }))
    .filter((cat) => cat.items.length > 0);

  return (
    <section id="skills" className={`${styles.skillsSection} section`}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <span className={styles.sectionBadge}>TECHNICAL CAPABILITIES</span>
          <h2 className={styles.sectionTitle}>Skills & Technology Matrix</h2>
          <p className={styles.sectionSub}>
            Extensive stack spanning backend microservices, frontend engineering, databases, and cloud systems.
          </p>
        </div>

        {/* Filter Controls */}
        <div className={styles.controlsBar}>
          <div className={styles.categoryTabs}>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`${styles.tabBtn} ${
                  selectedCategory === cat ? styles.activeTab : ""
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className={styles.searchBox}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
            <input
              type="text"
              placeholder="Search skill (e.g. Java, Spring, React)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className={styles.searchInput}
            />
          </div>
        </div>

        {/* Skills Grid */}
        <div className={styles.skillsGrid}>
          {filteredSkills.map((group, idx) => (
            <div key={idx} className={styles.skillCard}>
              <h3 className={styles.cardCatTitle}>{group.category}</h3>
              <div className={styles.itemsList}>
                {group.items.map((skill, sIdx) => (
                  <div key={sIdx} className={styles.skillItem}>
                    <div className={styles.skillHeader}>
                      <span className={`${styles.skillName} ${skill.highlight ? styles.highlightName : ""}`}>
                        {skill.name}
                        {skill.highlight && <span className={styles.starDot}>★</span>}
                      </span>
                      <span className={styles.skillPercent}>{skill.level}%</span>
                    </div>
                    <div className={styles.progressBarBg}>
                      <div
                        className={styles.progressBarFill}
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
