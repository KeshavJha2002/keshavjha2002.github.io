"use client";

import { ExternalLink } from "lucide-react";
import { GITHUB, LINKEDIN, TWITTER } from "@/data/meta";
import { Project } from "@/types";
import { Tag } from "./Tag";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div
      style={{
        backgroundColor: "var(--bg-card)",
        border: "1px solid var(--border)",
        borderRadius: "6px",
        padding: "20px",
        display: "flex",
        flexDirection: "column",
        gap: "12px",
        transition: "all 0.2s ease",
        cursor: "default",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLDivElement).style.borderColor =
          "var(--border-hover)";
        (e.currentTarget as HTMLDivElement).style.transform =
          "translateY(-4px)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLDivElement).style.borderColor =
          "var(--border)";
        (e.currentTarget as HTMLDivElement).style.transform =
          "translateY(0)";
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
        }}
      >
        <span
          style={{
            color: "var(--accent)",
            fontSize: "28px",
            lineHeight: 1,
          }}
        >
          ◫
        </span>
        <div style={{ display: "flex", gap: "8px" }}>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "var(--text-muted)", display: "flex" }}
            onMouseEnter={(e) =>
              ((e.currentTarget as HTMLAnchorElement).style.color =
                "var(--accent)")
            }
            onMouseLeave={(e) =>
              ((e.currentTarget as HTMLAnchorElement).style.color =
                "var(--text-muted)")
            }
            aria-label="GitHub"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
              <path d="M9 18c-4.51 2-5-2-7-2" />
            </svg>
          </a>
          {project.external && (
            <a
              href={project.external}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "var(--text-muted)", display: "flex" }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLAnchorElement).style.color =
                  "var(--accent)")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLAnchorElement).style.color =
                  "var(--text-muted)")
              }
            >
              <ExternalLink size={18} strokeWidth={1.5} />
            </a>
          )}
        </div>
      </div>

      <h3
        style={{
          color: "var(--text-primary)",
          fontSize: "14px",
          fontWeight: 600,
          margin: 0,
        }}
      >
        {project.title}
      </h3>

      <p
        style={{
          color: "var(--text-muted)",
          fontSize: "12px",
          lineHeight: 1.8,
          margin: 0,
          flex: 1,
        }}
      >
        {project.desc}
      </p>

      <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
        {project.tags.map((tag) => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </div>
    </div>
  );
}
