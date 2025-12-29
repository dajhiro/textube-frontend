// app/post/[id]/page.tsx

import PostDetail from "@/app/ui/PostDetail";
import { mockPosts } from "@/mock/posts";

import fs from "fs";
import path from "path";

// app/post/[id]/page.tsx
export default async function Page({ params }: { params: Params }) {
  const { id } = await params;
  const post = mockPosts.find((p) => String(p.id) === String(id));

  if (!post) return <div>게시글을 찾을 수 없습니다</div>;

  const filePath = path.join(process.cwd(), "content", `${post.id}.md`);
  const fileContent = fs.readFileSync(filePath, "utf8");

  return (
    <main>
      {/* HTML 변환 없이 원본 텍스트(fileContent)를 바로 전달 */}
      <PostDetail post={post} content={fileContent} />
    </main>
  );
}
