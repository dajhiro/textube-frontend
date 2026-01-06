// app/page.tsx
import PostList from "@components/posts/PostList";
import { mapBackendPosts } from "@lib/utils/postMapper";
import type { BackendPost } from "@lib/types/post";

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000';

async function getPosts() {
  try {
    const res = await fetch(`${API_URL}/posts?limit=20`, {
      cache: 'no-store', // 항상 최신 데이터 가져오기
    });

    if (!res.ok) {
      throw new Error('Failed to fetch posts');
    }

    const data = await res.json();
    const backendPosts: BackendPost[] = data.posts || [];

    // Transform backend posts to frontend format
    return mapBackendPosts(backendPosts);
  } catch (error) {
    console.error('Error fetching posts:', error);
    return [];
  }
}

export default async function HomePage() {
  const posts = await getPosts();

  return (
    <section className="w-full max-w-7xl mx-auto px-4 py-6 md:px-6 md:py-8 lg:px-8 lg:py-12">
      <h2 className="text-xl md:text-2xl font-semibold mb-6 md:mb-8">
        최근 게시글
      </h2>
      {posts.length > 0 ? (
        <PostList posts={posts} />
      ) : (
        <p className="text-center text-[var(--text-secondary)] py-12">
          게시글이 없습니다.
        </p>
      )}
    </section>
  );
}


