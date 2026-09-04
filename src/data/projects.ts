import { Project } from "@/types";

export const projects: Project[] = [
  {
    title: "Rediscope",
    desc: "Byte-level Redis observability toolkit that parses offline RDB snapshots, exposes record-to-byte synchronization in a local web UI, validates checksums, and ships as a cross-platform npm/Go CLI.",
    tags: ["Go", "Redis", "RDB", "Node.js", "npm", "Developer Tools"],
    github: "https://github.com/KeshavJha2002/Rediscope",
    external: "https://www.npmjs.com/package/rediscope",
    featured: true,
  },
  {
    title: "ESEKL MCP Server",
    desc: "Evidence-backed MCP server that serves provenance-traced implementation knowledge from mature queue and broker systems through progressive-disclosure tools for architecture critique and verification planning.",
    tags: ["Node.js", "MCP", "npm", "Architecture", "Developer Tools"],
    github: "https://github.com/KeshavJha2002/ESEKL",
    external: "https://www.npmjs.com/package/@esekl/mcp",
    featured: true,
  },
  {
    title: "Deterministic C++ Execution Trace Visualizer",
    desc: "Ichnaea turns a submitted C++ file into an interactive replay graph by validating source, queueing sandboxed compile/run jobs, rewriting the program for tracing, and rendering ordered runtime events.",
    tags: ["C++", "React", "TypeScript", "Docker", "Kafka", "PostgreSQL", "AST Analysis"],
    github: "https://github.com/KeshavJha2002/Ichnaea",
    external: "https://ichnaea-frontend-xs8j-iota.vercel.app/",
    featured: false,
  },
  {
    title: "Pre-LLM RAG Platform",
    desc: "TypeScript workspaces platform for enterprise document intelligence with S3-backed ingestion, PDF extraction, deterministic chunking and embeddings, pgvector persistence, ACL-aware hybrid retrieval, citations, and evaluation.",
    tags: ["TypeScript", "Fastify", "PostgreSQL", "pgvector", "Docker", "SeaweedFS", "AWS SDK"],
    github: "https://github.com/KeshavJha2002/ragstack",
    external: null,
    featured: false,
  },
  {
    title: "Quantitative Strategy Research & Backtesting Platform",
    desc: "NSE equity research platform for screening N50/N150/N250 universes, comparing standalone indicators, multi-timeframe confirmations, projection-cone filters, cached market data, and deterministic regression fixtures.",
    tags: ["Python", "Backtesting", "Multithreading", "Data Pipelines", "Testing"],
    github: "https://github.com/KeshavJha2002/quant-backtester",
    external: "https://quant-backtester-48n8.vercel.app/",
    featured: false,
  },
  {
    title: "Distributed Key-Value Store",
    desc: "Dynamo-inspired AP key-value store simulation with consistent hashing, N=3/W=2/R=2 quorum reads and writes, vector-clock conflict tracking, gossip membership, FastAPI nodes, and Prometheus/Grafana observability.",
    tags: ["Python", "FastAPI", "Docker", "Prometheus", "Grafana", "Nginx"],
    github: "https://github.com/KeshavJha2002/kv_store",
    external: null,
    featured: false,
  },
  {
    title: "Kafka-based Distributed Notification Platform",
    desc: "High-throughput notification pipeline for likes and comments with FastAPI ingestion, Kafka producers and consumers, idempotent PostgreSQL writes, logarithmic sliding-window batching, and Prometheus/Loki observability.",
    tags: ["Python", "FastAPI", "Kafka", "PostgreSQL", "Docker", "Prometheus", "Loki"],
    github: "https://github.com/KeshavJha2002/KNotify",
    external: null,
    featured: false,
  },
];

export const featuredProjects = projects.filter((p) => p.featured);
export const gridProjects = projects.filter((p) => !p.featured);
