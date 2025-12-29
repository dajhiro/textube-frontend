import ReactMarkdown from 'react-markdown';
import Image from 'next/image';

export default function PostDetail({ post, content }: { post: any, content: string }) {
  return (
    // 1. prose 클래스를 적용 (dark:prose-invert는 다크모드용)
    // 2. max-w-none을 주어야 글 너비가 답답하게 잘리지 않습니다.
    <article className="prose lg:prose-xl dark:prose-invert mx-auto py-10 px-4 max-w-4xl">
      {/* 제목: prose 내부의 h1으로 작동합니다 */}
      <h1>{post.title}</h1>
      {/* 개괄: 선택 */ }
      {/* 발행일자, 조회수 */ }
      {/* 큐레이터 (또는 유튜브 저자), 공유 */}
      <Image
        src={post.imageUrl}
        alt={post.title}
        width={800}
        height={450}
        className="rounded-lg mb-10"
        priority
      />

      {/* 마크다운 본문: 여기서 h1, h2, p 등이 생성됩니다 */}
      <ReactMarkdown>{content}</ReactMarkdown>

    </article>
  );
}
