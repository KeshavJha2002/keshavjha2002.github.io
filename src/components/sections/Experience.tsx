"use client";

import { useState } from "react";
import { experiences } from "@/data/experience";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Experience() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section
      id="experience"
      style={{
        padding: "80px 60px",
      }}
    >
      <SectionHeading number="02." title="where i've worked" />

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "160px 1fr",
          gap: "48px",
          minHeight: 0,
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "0",
          }}
        >
          {experiences.map((exp, index) => (
            <button
              key={exp.company}
              onClick={() => setActiveTab(index)}
              style={{
                background: "transparent",
                border: "none",
                borderLeft: `2px solid ${
                  activeTab === index ? "var(--accent)" : "transparent"
                }`,
                color:
                  activeTab === index
                    ? "var(--accent)"
                    : "var(--text-muted)",
                padding: "10px 16px",
                textAlign: "left",
                fontSize: "14px",
                fontFamily: "inherit",
                cursor: "pointer",
                transition: "all 0.2s ease",
              }}
              onMouseEnter={(e) => {
                if (activeTab !== index) {
                  (e.currentTarget as HTMLButtonElement).style.color =
                    "var(--text-secondary)";
                }
              }}
              onMouseLeave={(e) => {
                if (activeTab !== index) {
                  (e.currentTarget as HTMLButtonElement).style.color =
                    "var(--text-muted)";
                }
              }}
            >
              {exp.company}
            </button>
          ))}
        </div>

        <div
          key={activeTab}
          className="fade-in-content"
          style={{
            padding: "4px 0",
          }}
        >
          <h3
            style={{
              color: "var(--text-primary)",
              fontSize: "18px",
              fontWeight: 600,
              margin: "0 0 4px 0",
            }}
          >
            {experiences[activeTab].role}
          </h3>
          <a
            href={experiences[activeTab].url}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: "var(--accent)",
              fontSize: "13px",
              display: "inline-block",
              marginBottom: "16px",
            }}
          >
            @{experiences[activeTab].company}
          </a>
          <p
            style={{
              color: "var(--text-muted)",
              fontSize: "12px",
              margin: "0 0 20px 0",
            }}
          >
            {experiences[activeTab].period}
          </p>
          <ul
            style={{
              listStyle: "none",
              padding: 0,
              margin: 0,
              display: "flex",
              flexDirection: "column",
              gap: "12px",
            }}
          >
            {experiences[activeTab].bullets.map((bullet, i) => (
              <li
                key={i}
                style={{
                  display: "flex",
                  gap: "12px",
                  color: "var(--text-muted)",
                  fontSize: "14px",
                  lineHeight: 1.7,
                }}
              >
                <span style={{ color: "var(--accent)", flexShrink: 0 }}>
                  ▸
                </span>
                <span>{bullet}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          section#experience {
            padding: 60px 24px !important;
          }
          section#experience > div {
            grid-template-columns: 1fr !important;
          }
          section#experience .tabs {
            flex-direction: row !important;
            overflow-x: auto;
            gap: 0;
          }
          section#experience .tab {
            white-space: nowrap;
          }
        }
      `}</style>
    </section>
  );
}
