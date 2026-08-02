import React, { useState, useRef, useEffect } from "react";
import styles from "./TerminalModal.module.css";
import { portfolioData } from "../data/portfolioData";

interface TerminalModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface CommandHistory {
  command: string;
  output: React.ReactNode;
}

export const TerminalModal: React.FC<TerminalModalProps> = ({ isOpen, onClose }) => {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<CommandHistory[]>([
    {
      command: "welcome",
      output: (
        <div>
          <p className={styles.greenText}>★ Welcome to Nikhil Chalamalla's Interactive Developer Terminal v2.5</p>
          <p className={styles.dimText}>Type <span className={styles.highlightText}>'help'</span> to view available commands.</p>
        </div>
      ),
    },
  ]);

  const inputRef = useRef<HTMLInputElement>(null);
  const terminalEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history]);

  if (!isOpen) return null;

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = input.trim().toLowerCase();
    if (!trimmed) return;

    let output: React.ReactNode = null;

    switch (trimmed) {
      case "help":
        output = (
          <div className={styles.cmdGrid}>
            <div><span className={styles.highlightText}>whoami</span> - Display developer bio & credentials</div>
            <div><span className={styles.highlightText}>skills</span> - List programming languages & tech stack</div>
            <div><span className={styles.highlightText}>projects</span> - List key software engineering projects</div>
            <div><span className={styles.highlightText}>certifications</span> - Display cloud & technical certificates</div>
            <div><span className={styles.highlightText}>contact</span> - Show email, phone & social profiles</div>
            <div><span className={styles.highlightText}>education</span> - View university & degree details</div>
            <div><span className={styles.highlightText}>clear</span> - Clear terminal screen</div>
            <div><span className={styles.highlightText}>exit</span> - Close terminal window</div>
          </div>
        );
        break;

      case "whoami":
        output = (
          <div>
            <p className={styles.cyanText}><strong>{portfolioData.personalInfo.name}</strong></p>
            <p>{portfolioData.personalInfo.roleTitle}</p>
            <p className={styles.dimText}>{portfolioData.personalInfo.bio}</p>
          </div>
        );
        break;

      case "skills":
        output = (
          <div>
            {portfolioData.skills.map((s, idx) => (
              <div key={idx} style={{ marginBottom: "8px" }}>
                <span className={styles.goldText}>[{s.category}]</span>{" "}
                {s.items.map(item => item.name).join(", ")}
              </div>
            ))}
          </div>
        );
        break;

      case "projects":
        output = (
          <div>
            {portfolioData.projects.map((p, idx) => (
              <div key={idx} style={{ marginBottom: "10px" }}>
                <span className={styles.greenText}>★ {p.title}</span> <span className={styles.dimText}>({p.period})</span>
                <p style={{ margin: "2px 0 4px 12px" }}>{p.solution}</p>
                <p style={{ margin: "0 0 0 12px" }} className={styles.cyanText}>Tech: {p.tech.join(" | ")}</p>
              </div>
            ))}
          </div>
        );
        break;

      case "certifications":
        output = (
          <div>
            {portfolioData.certifications.map((c, idx) => (
              <p key={idx}>
                <span className={styles.goldText}>✔ {c.name}</span> — <span className={styles.dimText}>{c.issuer} ({c.date})</span>
              </p>
            ))}
            <p className={styles.greenText}>✔ Solved 370+ DSA Problems on LeetCode</p>
          </div>
        );
        break;

      case "contact":
        output = (
          <div>
            <p>📧 Email: <a href={`mailto:${portfolioData.personalInfo.email}`} className={styles.link}>{portfolioData.personalInfo.email}</a></p>
            <p>📞 Phone: {portfolioData.personalInfo.phone}</p>
            <p>🔗 LinkedIn: <a href={portfolioData.personalInfo.linkedin} target="_blank" rel="noreferrer" className={styles.link}>{portfolioData.personalInfo.linkedin}</a></p>
            <p>💻 GitHub: <a href={portfolioData.personalInfo.github} target="_blank" rel="noreferrer" className={styles.link}>{portfolioData.personalInfo.github}</a></p>
          </div>
        );
        break;

      case "education":
        output = (
          <div>
            {portfolioData.education.map((edu, idx) => (
              <p key={idx}>
                🎓 <strong>{edu.institution}</strong> — {edu.degree} ({edu.score}, {edu.period})
              </p>
            ))}
          </div>
        );
        break;

      case "clear":
        setHistory([]);
        setInput("");
        return;

      case "exit":
        onClose();
        setInput("");
        return;

      default:
        output = (
          <p className={styles.redText}>
            Command not recognized: '{trimmed}'. Type <span className={styles.highlightText}>'help'</span> for available commands.
          </p>
        );
        break;
    }

    setHistory((prev) => [...prev, { command: input, output }]);
    setInput("");
  };

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <div className={styles.header}>
          <div className={styles.dots}>
            <span className={`${styles.dot} ${styles.redDot}`} onClick={onClose} />
            <span className={`${styles.dot} ${styles.yellowDot}`} />
            <span className={`${styles.dot} ${styles.greenDot}`} />
          </div>
          <div className={styles.title}>chalamalla-nikhil@dev-terminal:~</div>
          <button className={styles.closeBtn} onClick={onClose}>×</button>
        </div>

        <div className={styles.body}>
          {history.map((item, idx) => (
            <div key={idx} className={styles.historyBlock}>
              <div className={styles.promptLine}>
                <span className={styles.promptUser}>nikhil@portfolio</span>
                <span className={styles.promptSeparator}>:</span>
                <span className={styles.promptDir}>~</span>
                <span className={styles.promptSymbol}>$</span>
                <span className={styles.commandText}>{item.command}</span>
              </div>
              <div className={styles.outputBlock}>{item.output}</div>
            </div>
          ))}

          <form onSubmit={handleCommand} className={styles.inputForm}>
            <span className={styles.promptUser}>nikhil@portfolio</span>
            <span className={styles.promptSeparator}>:</span>
            <span className={styles.promptDir}>~</span>
            <span className={styles.promptSymbol}>$</span>
            <input
              ref={inputRef}
              type="text"
              className={styles.input}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type command ('help', 'skills', 'projects', 'exit')..."
              autoFocus
            />
          </form>
          <div ref={terminalEndRef} />
        </div>
      </div>
    </div>
  );
};
