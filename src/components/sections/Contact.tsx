"use client";

import { EMAIL } from "@/data/meta";

export function Contact() {
  return (
    <section
      id="contact"
      style={{
        padding: "120px 60px",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div style={{ maxWidth: "560px", textAlign: "center" }}>
        <p
          style={{
            color: "var(--accent)",
            fontSize: "14px",
            marginBottom: "8px",
          }}
        >
          05. what&apos;s next
        </p>
        <h2
          style={{
            color: "var(--text-primary)",
            fontSize: "52px",
            fontWeight: 700,
            margin: "0 0 16px 0",
          }}
        >
          get in touch.
        </h2>
        <p
          style={{
            color: "var(--text-muted)",
            fontSize: "14px",
            lineHeight: 1.8,
            marginBottom: "32px",
          }}
        >
          I&apos;m always up for a deep-tech conversation — storage engines,
          distributed systems, or just interesting engineering problems. My
          inbox is open.
        </p>
        <a
          href={`mailto:${EMAIL}`}
          style={{
            color: "var(--accent)",
            fontSize: "14px",
            padding: "12px 28px",
            border: "1px solid var(--accent)",
            borderRadius: "4px",
            fontFamily: "inherit",
            display: "inline-block",
            transition: "all 0.2s ease",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLAnchorElement).style.backgroundColor =
              "var(--accent-subtle)";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLAnchorElement).style.backgroundColor =
              "transparent";
          }}
        >
          say hello →
        </a>
      </div>

      <style>{`
        @media (max-width: 768px) {
          section#contact {
            padding: 80px 24px !important;
          }
          section#contact h2 {
            font-size: 36px !important;
          }
        }
      `}</style>
    </section>
  );
}
