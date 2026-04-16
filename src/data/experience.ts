import { Experience } from "@/types";

export const experiences: Experience[] = [
  {
    company: "Oracle",
    url: "https://www.oracle.com",
    role: "Member of Technical Staff, MySQL-InnoDB",
    period: "June 2025 – Present",
    bullets: [
      "Proposed and prototyped a multi-page undo logging mechanism in InnoDB to overcome the single-page limitation, demonstrating ~16x higher large-update capacity and directly improving OLTP transaction throughput.",
      "Fixed security vulnerabilities in page parsing logic, addressing malformed input handling and unsafe memory access patterns that could lead to buffer overflows.",
      "Identified and fixed underflow bugs in auto-increment handling across SQL and InnoDB layers, and reworked allocation logic to realign with documented increment and node-offset semantics.",
      "Resolved rollback inconsistency between FTS preprocessing and main table operations for FK inserts, ensuring proper FTS state cleanup on failure and eliminating crash-prone behavior.",
      "Worked on 30+ bugs across InnoDB internals spanning index page handling, key management, Index Condition Pushdown (ICP), and undo log correctness.",
      "Tools used: C++, Python, GDB, Git, Bash, MySQL.",
    ],
  },
  {
    company: "Uber",
    url: "https://www.uber.com",
    role: "Business Analyst Intern, U4B",
    period: "January 2025 – June 2025",
    bullets: [
      "Diagnosed a critical inefficiency in Uber for Business, uncovering about $600,000 in prior losses and enabling prevention of about $220,000 in ongoing monthly leakage through systematic MySQL query analysis.",
      "Automated and optimized Python scripts powering quarterly and annual scorecards, cutting report generation time and improving delivery consistency for business stakeholders.",
      "Built a dynamic Tableau dashboard with sheet-swapping, parameter actions, and paginated views for Uber for Business stakeholders.",
      "Tools used: Python, MySQL.",
    ],
  },
  {
    company: "BNY Mellon",
    url: "https://www.bnymellon.com",
    role: "Software Engineer Intern, BNY Pershing",
    period: "May 2024 – July 2024",
    bullets: [
      "Implemented FIX protocol support for efficient and secure information transfer between financial systems, improving interoperability and reliability.",
      "Automated transaction-related workflows, streamlining processes and increasing system reliability through robust test scripts.",
      "Tools used: C#, .NET Framework.",
    ],
  },
];
