"use client";

import { featuredProjects } from "@/data/projects";
import { Tag } from "@/components/ui/Tag";

const RediscopeDiagram = () => (
  <pre
    style={{
      backgroundColor: "var(--accent-subtle)",
      border: "0.5px solid var(--accent-border)",
      borderRadius: "4px",
      padding: "20px",
      fontFamily: "inherit",
      fontSize: "12px",
      color: "var(--text-muted)",
      overflow: "auto",
      margin: 0,
    }}
  >
    {`
  dump.rdb
      │
      ├── checksum validation
      │
      ├── byte parser → record index
      │                 │
      ▼                 ▼
  CLI package      local web inspector
      │                 │
      └──── npm install rediscope
    `}
  </pre>
);

const EseklDiagram = () => (
  <pre
    style={{
      backgroundColor: "var(--accent-subtle)",
      border: "0.5px solid var(--accent-border)",
      borderRadius: "4px",
      padding: "20px",
      fontFamily: "inherit",
      fontSize: "12px",
      color: "var(--text-muted)",
      overflow: "auto",
      margin: 0,
    }}
  >
    {`
  mature systems evidence
              │
              ▼
  provenance-traced knowledge
              │
      ┌───────┴────────┐
      ▼                ▼
  architecture     verification
  critique         planning
      │                │
      └──── MCP tools ─┘
    `}
  </pre>
);

export function Featured() {
  const project1 = featuredProjects[0];
  const project2 = featuredProjects[1];

  if (!project1 || !project2) return null;

  return (
    <div
      style={{
        paddingBottom: "64px",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "80px",
        }}
      >
        <div
          style={{
            display: "flex",
            gap: "48px",
            alignItems: "center",
          }}
        >
          <div style={{ flex: 1 }}>
            <p
              style={{
                color: "var(--accent)",
                fontSize: "12px",
                marginBottom: "8px",
                textTransform: "uppercase",
                letterSpacing: "1px",
              }}
            >
              featured project
            </p>
            <h3
              style={{
                color: "var(--text-primary)",
                fontSize: "24px",
                fontWeight: 600,
                margin: "0 0 16px 0",
              }}
            >
              {project1.title}
            </h3>
            <p
              style={{
                color: "var(--text-muted)",
                fontSize: "14px",
                lineHeight: 1.8,
                marginBottom: "20px",
              }}
            >
              {project1.desc}
            </p>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "8px",
                marginBottom: "20px",
              }}
            >
              {project1.tags.map((tag) => (
                <Tag key={tag}>{tag}</Tag>
              ))}
            </div>
            <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
              <a
                href={project1.github}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: "var(--accent)",
                  fontSize: "13px",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                }}
              >
                View on GitHub →
              </a>
              {project1.external && (
                <a
                  href={project1.external}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: "var(--accent)",
                    fontSize: "13px",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "6px",
                  }}
                >
                  Open package →
                </a>
              )}
            </div>
          </div>
          <div style={{ flex: 1 }}>
            <RediscopeDiagram />
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "row-reverse",
            gap: "48px",
            alignItems: "center",
          }}
        >
          <div style={{ flex: 1 }}>
            <p
              style={{
                color: "var(--accent)",
                fontSize: "12px",
                marginBottom: "8px",
                textTransform: "uppercase",
                letterSpacing: "1px",
              }}
            >
              featured project
            </p>
            <h3
              style={{
                color: "var(--text-primary)",
                fontSize: "24px",
                fontWeight: 600,
                margin: "0 0 16px 0",
              }}
            >
              {project2.title}
            </h3>
            <p
              style={{
                color: "var(--text-muted)",
                fontSize: "14px",
                lineHeight: 1.8,
                marginBottom: "20px",
              }}
            >
              {project2.desc}
            </p>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "8px",
                marginBottom: "20px",
              }}
            >
              {project2.tags.map((tag) => (
                <Tag key={tag}>{tag}</Tag>
              ))}
            </div>
            <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
              <a
                href={project2.github}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: "var(--accent)",
                  fontSize: "13px",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                }}
              >
                View on GitHub →
              </a>
              {project2.external && (
                <a
                  href={project2.external}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: "var(--accent)",
                    fontSize: "13px",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "6px",
                  }}
                >
                  Open package →
                </a>
              )}
            </div>
          </div>
          <div style={{ flex: 1 }}>
            <EseklDiagram />
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          section > div {
            gap: 40px !important;
          }
          section > div > div {
            flex-direction: column !important;
          }
        }
      `}</style>
    </div>
  );
}
