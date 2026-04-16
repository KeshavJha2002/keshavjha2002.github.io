"use client";

import { useState } from "react";
import { gridProjects } from "@/data/projects";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { ChevronDown } from "lucide-react";

const INITIAL_COUNT = 6;

export function Projects() {
  const [showAll, setShowAll] = useState(false);
  const displayedProjects = showAll
    ? gridProjects
    : gridProjects.slice(0, INITIAL_COUNT);

  return (
    <section
      id="project-grid"
      style={{
        padding: "80px 60px",
      }}
    >
      {/* <SectionHeading number="03." title="things i've built" /> */}

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "20px",
          marginBottom: "32px",
          maxHeight: showAll ? "none" : `${INITIAL_COUNT * 200}px`,
          overflow: "hidden",
          transition: "max-height 0.5s ease",
        }}
      >
        {displayedProjects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>

      {gridProjects.length > INITIAL_COUNT && (
        <div style={{ display: "flex", justifyContent: "center" }}>
          <button
            onClick={() => setShowAll(!showAll)}
            style={{
              background: "transparent",
              border: "none",
              color: "var(--text-muted)",
              fontSize: "13px",
              fontFamily: "inherit",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: "6px",
              padding: "8px 16px",
              transition: "color 0.2s ease",
            }}
            onMouseEnter={(e) =>
              ((e.currentTarget as HTMLButtonElement).style.color =
                "var(--accent)")
            }
            onMouseLeave={(e) =>
              ((e.currentTarget as HTMLButtonElement).style.color =
                "var(--text-muted)")
            }
          >
            {showAll ? "show less" : "show more"}{" "}
            <ChevronDown
              size={16}
              style={{
                transform: showAll ? "rotate(180deg)" : "rotate(0deg)",
                transition: "transform 0.2s ease",
              }}
            />
          </button>
        </div>
      )}

      <style>{`
        @media (max-width: 1024px) {
          section#projects > div:first-of-type {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 768px) {
          section#projects {
            padding: 60px 24px !important;
          }
          section#projects > div:first-of-type {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
