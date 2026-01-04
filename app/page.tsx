// app/page.tsx
import PostList from "@/app/ui/PostList";
import { mockPosts } from "@/app/mock/posts";

export default function HomePage() {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 py-6 md:px-6 md:py-8 lg:px-8 lg:py-12">
      <h2 className="text-xl md:text-2xl font-semibold mb-6 md:mb-8">
        최근 게시글
      </h2>
      <PostList posts={mockPosts} />
    </section>
  );
}


