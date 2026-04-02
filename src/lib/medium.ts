import { MediumPost } from "@/types";
import { MEDIUM_USERNAME } from "@/data/meta";

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

    return data.items.map((item) => ({
      title: item.title,
      link: item.link,
      pubDate: item.pubDate,
      description: item.description || item.content || "",
      readTime: estimateReadTime(item.content || item.description),
    }));
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
