// app/page.tsx
import PostList from "./ui/PostList";
import { mockPosts } from "@/mock/posts";

export default function HomePage() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-12">
      <h2 className="text-2xl font-semibold mb-8">
        최근 게시글
      </h2>
      <PostList posts={mockPosts} layout="list" />
    </section>
  );
}


