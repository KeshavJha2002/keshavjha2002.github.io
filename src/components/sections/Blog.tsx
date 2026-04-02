"use client";

import { useState, useEffect } from "react";
import { MediumPost } from "@/types";
import { SectionHeading } from "@/components/ui/SectionHeading";

function BlogCard({ post }: { post: MediumPost }) {
  const formattedDate = new Date(post.pubDate).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  const truncatedDesc = post.description
    .replace(/<[^>]*>/g, "")
    .slice(0, 120);

  return (
    <a
      href={post.link}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        display: "block",
        backgroundColor: "var(--bg-card)",
        border: "1px solid var(--border)",
        borderRadius: "6px",
        padding: "20px",
        transition: "all 0.2s ease",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLAnchorElement).style.borderColor =
          "var(--border-hover)";
        (e.currentTarget as HTMLAnchorElement).style.transform =
          "translateY(-2px)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLAnchorElement).style.borderColor =
          "var(--border)";
        (e.currentTarget as HTMLAnchorElement).style.transform =
          "translateY(0)";
      }}
    >
      <h3
        style={{
          color: "var(--text-primary)",
          fontSize: "14px",
          fontWeight: 600,
          margin: "0 0 8px 0",
          lineHeight: 1.5,
        }}
      >
        {post.title}
      </h3>
      <p
        style={{
          color: "var(--text-muted)",
          fontSize: "12px",
          margin: "0 0 8px 0",
        }}
      >
        {formattedDate}
        {post.readTime && ` · ${post.readTime}`}
      </p>
      <p
        style={{
          color: "var(--text-muted)",
          fontSize: "12px",
          lineHeight: 1.7,
          margin: 0,
        }}
      >
        {truncatedDesc}...
      </p>
    </a>
  );
}

function SkeletonCard() {
  return (
    <div
      style={{
        backgroundColor: "var(--bg-card)",
        border: "1px solid var(--border)",
        borderRadius: "6px",
        padding: "20px",
        height: "120px",
      }}
    />
  );
}

export function Blog() {
  const [posts, setPosts] = useState<MediumPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPosts() {
      try {
        const res = await fetch("/api/medium");
        const data = await res.json();
        if (data.posts && data.posts.length > 0) {
          setPosts(data.posts.slice(0, 3));
        }
      } catch {
        console.log("TODO: Medium username not set");
      } finally {
        setLoading(false);
      }
    }
    fetchPosts();
  }, []);

  return (
    <section
      id="blog"
      style={{
        padding: "80px 60px",
      }}
    >
      <SectionHeading number="04." title="latest writing" />

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "20px",
        }}
      >
        {loading ? (
          <>
            <SkeletonCard />
            <SkeletonCard />
            <SkeletonCard />
          </>
        ) : posts.length > 0 ? (
          posts.map((post, i) => (
            <BlogCard key={i} post={post} />
          ))
        ) : (
          <>
            <SkeletonCard />
            <SkeletonCard />
            <SkeletonCard />
          </>
        )}
      </div>

      <style>{`
        @media (max-width: 768px) {
          section#blog {
            padding: 60px 24px !important;
          }
          section#blog > div:last-child {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
