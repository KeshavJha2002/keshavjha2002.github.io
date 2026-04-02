import { Experience } from "@/types";

export const experiences: Experience[] = [
  {
    company: "Oracle",
    url: "https://www.oracle.com",
    role: "Software Engineer",
    period: "July 2024 – Present",
    bullets: [
      "Engineered MySQL Clone utility reducing storage overhead by 80% through an incremental checksum-based mechanism for efficient data transfer",
      "Optimized InnoDB dictionary subsystem, improving lock-free dictionary access and reducing LRU scan latency by 50%",
      "Developed comprehensive regression test suite with 30+ test cases to ensure reliability of dictionary module changes",
    ],
  },
];
