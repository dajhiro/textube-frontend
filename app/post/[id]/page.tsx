import PostDetail from "@components/posts/PostDetail";
import { mapBackendPost } from "@lib/utils/postMapper";
import type { BackendPost } from "@lib/types/post";
import { notFound } from "next/navigation";

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000';

async function getPost(id: string) {
  try {
    const res = await fetch(`${API_URL}/posts/${id}`, {
      cache: 'no-store',
    });

    if (!res.ok) {
      if (res.status === 404) return null;
      throw new Error('Failed to fetch post');
    }

    const backendPost: BackendPost = await res.json();
    return backendPost;
  } catch (error) {
    console.error('Error fetching post:', error);
    return null;
  }
}

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const backendPost = await getPost(id);

  if (!backendPost) {
    notFound();
  }

  // Transform to frontend format
  const post = mapBackendPost(backendPost);

  return (
    <main>
      <PostDetail post={post} content={backendPost.content} />
    </main>
  );
}
