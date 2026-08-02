import React, { useState } from "react";
import styles from "./Contact.module.css";
import { portfolioData } from "../data/portfolioData";

interface ContactProps {
  onOpenResume: () => void;
}

export const Contact: React.FC<ContactProps> = ({ onOpenResume }) => {
  const { email, phone, location, linkedin, github, leetcode } = portfolioData.personalInfo;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setSubmitted(false), 5000);
    }, 1000);
  };

  return (
    <section id="contact" className={`${styles.contactSection} section`}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <span className={styles.sectionBadge}>LET'S CONNECT</span>
          <h2 className={styles.sectionTitle}>Get In Touch</h2>
          <p className={styles.sectionSub}>
            Open for full-time Software Engineer positions, backend roles, and cloud projects.
          </p>
        </div>

        <div className={styles.contactGrid}>
          {/* Contact Details Cards */}
          <div className={styles.infoCol}>
            <div className={styles.infoCard}>
              <div className={styles.iconBox}>📧</div>
              <div>
                <span className={styles.infoLabel}>Direct Email</span>
                <a href={`mailto:${email}`} className={styles.infoValue}>{email}</a>
              </div>
            </div>

            <div className={styles.infoCard}>
              <div className={styles.iconBox}>📞</div>
              <div>
                <span className={styles.infoLabel}>Phone / WhatsApp</span>
                <a href={`tel:${phone}`} className={styles.infoValue}>{phone}</a>
              </div>
            </div>

            <div className={styles.infoCard}>
              <div className={styles.iconBox}>📍</div>
              <div>
                <span className={styles.infoLabel}>Primary Location</span>
                <span className={styles.infoValue}>{location}</span>
              </div>
            </div>

            <div className={styles.socialCardGroup}>
              <a href={linkedin} target="_blank" rel="noreferrer" className={styles.socialCard}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect width="4" height="12" x="2" y="9" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
                <span>LinkedIn</span>
              </a>

              <a href={github} target="_blank" rel="noreferrer" className={styles.socialCard}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                </svg>
                <span>GitHub</span>
              </a>

              <a href={leetcode} target="_blank" rel="noreferrer" className={styles.socialCard}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                </svg>
                <span>LeetCode</span>
              </a>
            </div>

            <button onClick={onOpenResume} className={styles.viewCvBtn}>
              📄 View Full Professional CV
            </button>
          </div>

          {/* Interactive Form */}
          <div className={styles.formCol}>
            <form onSubmit={handleSubmit} className={styles.contactForm}>
              <h3 className={styles.formTitle}>Send a Direct Message</h3>

              {submitted && (
                <div className={styles.successAlert}>
                  ✔ Thank you! Your message has been dispatched successfully. Nikhil will respond shortly.
                </div>
              )}

              <div className={styles.inputGroup}>
                <label htmlFor="name">Your Name</label>
                <input
                  id="name"
                  type="text"
                  required
                  placeholder="e.g. Alex Morgan"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className={styles.input}
                />
              </div>

              <div className={styles.inputGroup}>
                <label htmlFor="email">Email Address</label>
                <input
                  id="email"
                  type="email"
                  required
                  placeholder="alex@company.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className={styles.input}
                />
              </div>

              <div className={styles.inputGroup}>
                <label htmlFor="subject">Subject</label>
                <input
                  id="subject"
                  type="text"
                  required
                  placeholder="Software Engineering Opportunity / Project Discussion"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className={styles.input}
                />
              </div>

              <div className={styles.inputGroup}>
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  rows={4}
                  required
                  placeholder="Hi Nikhil, I reviewed your portfolio and would like to discuss..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className={styles.textarea}
                />
              </div>

              <button type="submit" disabled={loading} className={styles.submitBtn}>
                {loading ? "Sending Message..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
