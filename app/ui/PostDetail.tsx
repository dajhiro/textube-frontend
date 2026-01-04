import ReactMarkdown from 'react-markdown';
import Image from 'next/image';

export default function PostDetail({ post, content }: { post: any, content: string }) {
  return (
    <article className="prose prose-sm md:prose-base lg:prose-lg dark:prose-invert mx-auto py-6 px-4 md:py-8 md:px-6 lg:py-12 lg:px-8 max-w-3xl">
      <Image
        src={post.imageUrl}
        alt={post.title}
        width={800}
        height={450}
        className="rounded-lg mb-6 md:mb-8 lg:mb-10 w-full"
        priority
      />
      <h1 className="mb-6 md:mb-8">{post.title}</h1>

      <ReactMarkdown>{content}</ReactMarkdown>
    </article>
  );
}
