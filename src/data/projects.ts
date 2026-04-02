import { Project } from "@/types";

export const projects: Project[] = [
  {
    title: "Notification System v2",
    desc: "Reworked notification system with Docker, Grafana, and benchmarks.",
    tags: ["Go", "Kafka", "Docker", "Grafana"],
    github: "#",
    external: null,
    featured: false,
  },
  {
    title: "LLD Compendium",
    desc: "Rate limiter (3 algos), consistent hashing, WAL, LSM tree, MVCC cache, Bloom filter, Pub-Sub — each a clean standalone implementation.",
    tags: ["Python", "TypeScript"],
    github: "#",
    external: null,
    featured: false,
  },
  {
    title: "Mini Storage Engine",
    desc: "KV store with WAL + MVCC + B-Tree/LSM. Written in C++ and Python, built to understand InnoDB from the ground up.",
    tags: ["C++", "Python", "WAL", "MVCC"],
    github: "#",
    external: null,
    featured: true,
  },
  {
    title: "Distributed Task Queue",
    desc: "Priority queues, dead-letter queues, and Prometheus observability — built from scratch.",
    tags: ["Go", "Redis", "Prometheus"],
    github: "#",
    external: null,
    featured: false,
  },
  {
    title: "Mini Query Engine",
    desc: "SQL tokenizer → parser → planner → executor pipeline.",
    tags: ["Python", "SQL"],
    github: "#",
    external: null,
    featured: false,
  },
  {
    title: "Raft Consensus",
    desc: "5-node Docker cluster implementing the Raft consensus protocol.",
    tags: ["Go", "Docker", "Raft"],
    github: "#",
    external: null,
    featured: false,
  },
  {
    title: "Agent Orchestrator",
    desc: "Claude API + git worktree + tmux + Redis. Spins isolated agents per task, merges results.",
    tags: ["Python", "Redis", "Claude API"],
    github: "#",
    external: null,
    featured: false,
  },
  {
    title: "Real-Time Collab Editor Backend",
    desc: "CRDT-based backend for real-time collaborative text editing.",
    tags: ["TypeScript", "CRDT"],
    github: "#",
    external: null,
    featured: false,
  },
  {
    title: "Observability Platform Lite",
    desc: "Custom time-series storage with an alerting engine.",
    tags: ["Go", "TypeScript"],
    github: "#",
    external: null,
    featured: false,
  },
  {
    title: "Distributed KV Store",
    desc: "Dynamo-style KV store: consistent hashing, quorum replication (R+W>N), gossip protocol, vector clocks, client SDK with failover.",
    tags: ["C++", "Docker", "Gossip", "Quorum"],
    github: "#",
    external: null,
    featured: true,
  },
];

export const featuredProjects = projects.filter((p) => p.featured);
export const gridProjects = projects.filter((p) => !p.featured);
