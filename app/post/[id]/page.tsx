import PostDetail from "@/app/ui/PostDetail";
import { mockPosts } from "@/app/mock/posts";
import fs from "fs";
import path from "path";

// Generate static params for all posts at build time
export async function generateStaticParams() {
  return mockPosts.map((post) => ({
    id: post.id,
  }));
}

// Force static generation
export const dynamic = 'force-static';

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const post = mockPosts.find((p) => String(p.id) === String(id));

  if (!post) return <div>게시글을 찾을 수 없습니다</div>;

  const filePath = path.join(process.cwd(), "content", `${post.id}.md`);
  const fileContent = fs.readFileSync(filePath, "utf8");

  return (
    <main>
      <PostDetail post={post} content={fileContent} />
    </main>
  );
}
