import { MediumPost } from "@/types";
import { MEDIUM_USERNAME } from "@/data/meta";

const PINNED_POST_LINKS = [
  "https://medium.com/@jhakeshav14275/essential-react-concepts-you-must-know-for-developers-interviews-995bf7e690db",
];

const EXCLUDED_POST_TITLE_PATTERNS = [/\bHTTP\b/i];

interface Rss2JsonResponse {
  status: string;
  feed: {
    url: string;
    title: string;
    description: string;
  };
  items: Array<{
    title: string;
    link: string;
    pubDate: string;
    description: string;
    content?: string;
    categories?: string[];
  }>;
}

export async function fetchMediumPosts(): Promise<MediumPost[]> {
  if (!MEDIUM_USERNAME) {
    return [];
  }

  const rssUrl = `https://medium.com/feed/@${MEDIUM_USERNAME.replace("@", "")}`;
  const apiUrl = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(rssUrl)}`;

  try {
    const res = await fetch(apiUrl, {
      next: { revalidate: 3600 },
    });

    if (!res.ok) {
      return [];
    }

    const data: Rss2JsonResponse = await res.json();

    if (data.status !== "ok" || !data.items) {
      return [];
    }

    const posts = data.items.map((item) => ({
      title: item.title,
      link: item.link,
      pubDate: item.pubDate,
      description: item.description || item.content || "",
      readTime: estimateReadTime(item.content || item.description),
    }));

    const filteredPosts = posts.filter((post) =>
      EXCLUDED_POST_TITLE_PATTERNS.every((pattern) => !pattern.test(post.title))
    );

    const pinnedPosts = PINNED_POST_LINKS.map((link) =>
      filteredPosts.find((post) => normalizeMediumUrl(post.link) === normalizeMediumUrl(link))
    ).filter((post): post is MediumPost => Boolean(post));

    const pinnedLinks = new Set(
      pinnedPosts.map((post) => normalizeMediumUrl(post.link))
    );

    const remainingPosts = filteredPosts.filter(
      (post) => !pinnedLinks.has(normalizeMediumUrl(post.link))
    );

    return [...pinnedPosts, ...remainingPosts];
  } catch {
    return [];
  }
}

function estimateReadTime(content: string): string | undefined {
  const text = content.replace(/<[^>]*>/g, "");
  const wordCount = text.split(/\s+/).length;
  const minutes = Math.ceil(wordCount / 200);
  return `${minutes} min read`;
}

function normalizeMediumUrl(url: string): string {
  return url.replace(/\/$/, "");
}
