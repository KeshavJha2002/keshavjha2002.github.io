import { NextResponse } from "next/server";
import { fetchMediumPosts } from "@/lib/medium";

export const revalidate = 3600;

export async function GET() {
  const posts = await fetchMediumPosts();

  return NextResponse.json({ posts });
}
