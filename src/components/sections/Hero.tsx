"use client";

import { useEffect, useState } from "react";

export function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section
      id="hero"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        padding: "0 60px",
      }}
    >
      <div>
        <p
          className={mounted ? "fade-in-1" : ""}
          style={{
            color: "var(--accent)",
            fontSize: "14px",
            marginBottom: "8px",
            opacity: mounted ? undefined : 0,
          }}
        >
          &gt;_ hi, my name is
        </p>
        <h1
          className={mounted ? "fade-in-2" : ""}
          style={{
            color: "var(--text-primary)",
            fontSize: "64px",
            fontWeight: 700,
            margin: "0 0 8px 0",
            opacity: mounted ? undefined : 0,
          }}
        >
          Keshav Jha.
        </h1>
        <h2
          className={mounted ? "fade-in-2" : ""}
          style={{
            color: "var(--text-muted)",
            fontSize: "52px",
            fontWeight: 700,
            margin: "0 0 24px 0",
            opacity: mounted ? undefined : 0,
          }}
        >
          I build the parts you never see.
        </h2>
        <p
          className={mounted ? "fade-in-3" : ""}
          style={{
            color: "var(--text-muted)",
            fontSize: "14px",
            maxWidth: "520px",
            lineHeight: 1.9,
            margin: "0 0 32px 0",
            opacity: mounted ? undefined : 0,
          }}
        >
          Software engineer at Oracle (MySQL InnoDB), obsessed with storage
          internals, distributed systems, and the kind of code that runs
          closest to the metal.
        </p>
        <div
          className={mounted ? "fade-in-3" : ""}
          style={{
            display: "flex",
            gap: "16px",
            opacity: mounted ? undefined : 0,
          }}
        >
          <a
            href="/#projects"
            style={{
              color: "var(--accent)",
              fontSize: "13px",
              padding: "12px 24px",
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
            view my work
          </a>
          <a
            href="/#blog"
            style={{
              color: "var(--text-muted)",
              fontSize: "13px",
              padding: "12px 24px",
              border: "1px solid var(--text-muted)",
              borderRadius: "4px",
              fontFamily: "inherit",
              display: "inline-block",
              transition: "all 0.2s ease",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.color =
                "var(--accent)";
              (e.currentTarget as HTMLAnchorElement).style.borderColor =
                "var(--accent)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.color =
                "var(--text-muted)";
              (e.currentTarget as HTMLAnchorElement).style.borderColor =
                "var(--text-muted)";
            }}
          >
            read blog →
          </a>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          section#hero {
            padding: 0 24px !important;
            padding-top: 80px !important;
          }
          section#hero h1 {
            font-size: 40px !important;
          }
          section#hero h2 {
            font-size: 32px !important;
          }
        }
      `}</style>
    </section>
  );
}
