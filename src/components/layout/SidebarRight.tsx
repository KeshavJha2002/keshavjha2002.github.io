"use client";

import { EMAIL } from "@/data/meta";

export function SidebarRight() {
  return (
    <>
      <div
        className="sidebar-right"
        style={{
          position: "fixed",
          right: 0,
          top: 0,
          bottom: 0,
          width: "48px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          paddingTop: "80px",
          paddingBottom: "24px",
          justifyContent: "space-between",
          zIndex: 50,
        }}
      >
        <a
          href={`mailto:${EMAIL}`}
          style={{
            color: "var(--text-muted)",
            fontSize: "11px",
            writingMode: "vertical-rl",
            fontFamily: "inherit",
            letterSpacing: "1px",
          }}
          onMouseEnter={(e) =>
            ((e.currentTarget as HTMLAnchorElement).style.color =
              "var(--accent)")
          }
          onMouseLeave={(e) =>
            ((e.currentTarget as HTMLAnchorElement).style.color =
              "var(--text-muted)")
          }
        >
          {EMAIL}
        </a>

        <div
          style={{
            width: "1px",
            flex: 1,
            backgroundColor: "var(--border)",
            marginTop: "16px",
          }}
        />
      </div>

      <style>{`
        @media (max-width: 768px) {
          .sidebar-right {
            display: none !important;
          }
        }
      `}</style>
    </>
  );
}
