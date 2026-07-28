import { Project } from "@/types";

export const projects: Project[] = [
  {
    title: "Deterministic C++ Execution Trace Visualizer",
    desc: "Interactive C++ execution visualizer that combines source-aware static analysis with runtime instrumentation to replay ordered call and return events, including arguments, return values, and value propagation.",
    tags: ["C++", "React", "TypeScript", "Docker", "Kafka", "PostgreSQL", "AST Analysis"],
    github: "https://github.com/KeshavJha2002/Ichnaea",
    external: "https://ichnaea-frontend-xs8j-iota.vercel.app/",
    featured: true,
  },
  {
    title: "Pre-LLM RAG Platform",
    desc: "TypeScript monorepo for enterprise RAG foundations: durable document ingestion, PDF extraction, chunking, ACL-aware hybrid retrieval, reranking, context construction, citations, and evaluation.",
    tags: ["TypeScript", "Fastify", "PostgreSQL", "pgvector", "Docker", "SeaweedFS", "AWS SDK"],
    github: "https://github.com/KeshavJha2002/ragstack",
    external: null,
    featured: true,
  },
  {
    title: "Distributed Key-Value Store",
    desc: "Dynamo-style key-value store with quorum replication, vector clocks, consistent hashing, gossip failure detection, a custom Skip List MemTable, and crash-safe persistence.",
    tags: ["Python", "Docker", "Prometheus", "Grafana", "Nginx"],
    github: "https://github.com/KeshavJha2002/kv_store",
    external: null,
    featured: false,
  },
  {
    title: "Quantitative Strategy Research & Backtesting Platform",
    desc: "Reusable Python research platform with validated market-data pipelines, cached preprocessing, multithreaded strategy screening, deterministic portfolio simulation, and risk-adjusted reporting.",
    tags: ["Python", "Multithreading", "Data Pipelines", "Testing"],
    github: "https://github.com/KeshavJha2002/quant-backtester",
    external: null,
    featured: false,
  },
  {
    title: "Kafka-based Distributed Notification Platform",
    desc: "Event-driven notification platform with FastAPI, Kafka, PostgreSQL, idempotent consumers, retries, manual offsets, adaptive batching, and Prometheus/Grafana observability.",
    tags: ["Python", "Kafka", "PostgreSQL", "Docker", "Prometheus", "Grafana"],
    github: "https://github.com/KeshavJha2002/KNotify",
    external: null,
    featured: false,
  },
];

export const featuredProjects = projects.filter((p) => p.featured);
export const gridProjects = projects.filter((p) => !p.featured);
