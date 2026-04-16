"use client";

import Image from "next/image";
import { SectionHeading } from "@/components/ui/SectionHeading";

const techStack = [
  ["C++", "Python"],
  ["TypeScript", "Kafka"],
  ["Redis", "Docker"],
  ["Prometheus", "MySQL / InnoDB"],
];

export function About() {
  return (
    <section
      id="about"
      style={{
        padding: "80px 60px",
      }}
    >
      <SectionHeading number="01." title="about me" />

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "3fr 2fr",
          gap: "48px",
        }}
      >
        <div>
          <p
            style={{
              color: "var(--text-secondary)",
              fontSize: "14px",
              lineHeight: 1.8,
              marginBottom: "16px",
            }}
          >
            Hey! I&apos;m Keshav — a backend and systems engineer who loves digging
            into the internals of software. I currently work on the MySQL InnoDB
            storage engine at Oracle, where I spend most of my time thinking
            about buffer pools, WALs, and MVCC.
          </p>
          <p
            style={{
              color: "var(--text-secondary)",
              fontSize: "14px",
              lineHeight: 1.8,
              marginBottom: "24px",
            }}
          >
            Outside of work, I build systems-level projects: storage engines,
            distributed task queues, consensus protocols — the kind of things
            that are best understood by building from scratch.
          </p>
          <p
            style={{
              color: "var(--text-secondary)",
              fontSize: "14px",
              lineHeight: 1.8,
              marginBottom: "20px",
            }}
          >
            Here&apos;s a stack I&apos;ve been working with lately:
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "8px 24px",
            }}
          >
            {techStack.map(([item1, item2]) => (
              <div key={item1} style={{ display: "contents" }}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    color: "var(--text-muted)",
                    fontSize: "13px",
                  }}
                >
                  <span style={{ color: "var(--accent)" }}>▸</span>
                  {item1}
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    color: "var(--text-muted)",
                    fontSize: "13px",
                  }}
                >
                  <span style={{ color: "var(--accent)" }}>▸</span>
                  {item2}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <div
            style={{
              position: "relative",
              width: "100%",
              aspectRatio: "1",
              outline: "2px solid var(--accent)",
              outlineOffset: "6px",
              backgroundColor: "var(--bg-card)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Image
              src="/KESHAV_JHA.png"
              alt="Keshav Jha"
              fill
              sizes="(max-width: 768px) 280px, 40vw"
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          section#about {
            padding: 60px 24px !important;
          }
          section#about > div {
            grid-template-columns: 1fr !important;
          }
          section#about > div > div:last-child {
            order: -1;
            max-width: 280px;
            margin: 0 auto;
          }
        }

      `}</style>
    </section>
  );
}
