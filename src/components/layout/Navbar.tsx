"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { NAV_LINKS, RESUME_URL } from "@/data/meta";
import { ThemeToggle } from "@/components/ui/ThemeToggle";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          height: "60px",
          backgroundColor: "var(--bg-primary)",
          borderBottom: "0.5px solid var(--border)",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 60px",
          zIndex: 100,
        }}
      >
        <a
          href="/"
          style={{
            color: "var(--accent)",
            fontSize: "16px",
            fontWeight: 600,
            fontFamily: "inherit",
          }}
        >
          &gt;_ kj
        </a>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "32px",
          }}
          className="desktop-nav"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              style={{
                color: "var(--text-muted)",
                fontSize: "13px",
                fontFamily: "inherit",
                transition: "color 0.2s ease",
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
              {link.label}
            </a>
          ))}

          <a
            href={RESUME_URL}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: "var(--accent)",
              fontSize: "13px",
              padding: "6px 14px",
              border: "1px solid var(--accent)",
              borderRadius: "4px",
              fontFamily: "inherit",
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
            resume.pdf
          </a>

          <ThemeToggle />
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <div className="mobile-theme-toggle">
            <ThemeToggle />
          </div>
          <button
            className="mobile-menu-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{
              background: "transparent",
              border: "none",
              color: "var(--text-muted)",
              padding: "8px",
            }}
          >
            {mobileMenuOpen ? (
              <X size={24} strokeWidth={1.5} />
            ) : (
              <Menu size={24} strokeWidth={1.5} />
            )}
          </button>
        </div>
      </nav>

      {mobileMenuOpen && (
        <div
          style={{
            position: "fixed",
            top: "60px",
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "var(--bg-primary)",
            zIndex: 99,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "24px",
          }}
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              style={{
                color: "var(--text-muted)",
                fontSize: "24px",
                fontFamily: "inherit",
              }}
            >
              {link.label}
            </a>
          ))}
          <a
            href={RESUME_URL}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: "var(--accent)",
              fontSize: "18px",
              padding: "8px 20px",
              border: "1px solid var(--accent)",
              borderRadius: "4px",
              fontFamily: "inherit",
              marginTop: "16px",
            }}
          >
            resume.pdf
          </a>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav {
            display: none !important;
          }
          .mobile-menu-btn {
            display: flex !important;
          }
          nav {
            padding: 0 24px !important;
          }
        }
        @media (min-width: 769px) {
          .mobile-menu-btn {
            display: none !important;
          }
        }
        .mobile-theme-toggle {
          display: none;
        }
        @media (max-width: 768px) {
          .mobile-theme-toggle {
            display: flex !important;
          }
        }
      `}</style>
    </>
  );
}
