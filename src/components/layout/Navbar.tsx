"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { NAV_LINKS, RESUME_URL } from "@/data/meta";
import { ThemeToggle } from "@/components/ui/ThemeToggle";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeHref, setActiveHref] = useState(NAV_LINKS[0].href);

  useEffect(() => {
    const sections = NAV_LINKS.map((link) => {
      const id = link.href.split("#")[1];
      return id ? document.getElementById(id) : null;
    }).filter((section): section is HTMLElement => Boolean(section));

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visibleEntry) {
          setActiveHref(`/#${visibleEntry.target.id}`);
        }
      },
      {
        rootMargin: "-30% 0px -55% 0px",
        threshold: [0.1, 0.25, 0.5, 0.75],
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

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
        <Link
          href="/"
          style={{
            color: "var(--accent)",
            fontSize: "16px",
            fontWeight: 600,
            fontFamily: "inherit",
          }}
        >
          &gt;_ kj
        </Link>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "32px",
          }}
          className="desktop-nav"
        >
          {NAV_LINKS.map((link) => (
            (() => {
              const isActive = activeHref === link.href;

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  style={{
                    color: isActive ? "var(--accent)" : "var(--text-muted)",
                    fontSize: "13px",
                    fontFamily: "inherit",
                    padding: "6px 0",
                    borderBottom: isActive
                      ? "1px solid var(--accent)"
                      : "1px solid transparent",
                    transition: "color 0.2s ease, border-color 0.2s ease",
                  }}
                  onMouseEnter={(e) =>
                    ((e.currentTarget as HTMLAnchorElement).style.color =
                      "var(--accent)")
                  }
                  onMouseLeave={(e) =>
                    ((e.currentTarget as HTMLAnchorElement).style.color =
                      isActive ? "var(--accent)" : "var(--text-muted)")
                  }
                >
                  {link.label}
                </Link>
              );
            })()
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
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              style={{
                color:
                  activeHref === link.href
                    ? "var(--accent)"
                    : "var(--text-muted)",
                fontSize: "24px",
                fontFamily: "inherit",
                borderBottom:
                  activeHref === link.href
                    ? "1px solid var(--accent)"
                    : "1px solid transparent",
              }}
            >
              {link.label}
            </Link>
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
