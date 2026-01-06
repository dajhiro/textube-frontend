import Link from 'next/link';
import Image from 'next/image';
import type { Post } from '@lib/types/post';

type PostCardProps = Omit<Post, 'id'> & { href: string };

export default function PostCard({
  title,
  description,
  imageUrl,
  author,
  date,
  category,
  likes,
  comments,
  href
}: PostCardProps) {
  return (
    <article className="border-b border-[var(--border)] py-8 first:pt-0">
      <Link
        href={`/post/${href}`}
        className="group flex gap-8 transition-opacity hover:opacity-80"
      >
        {/* Left: Content */}
        <div className="flex-1">
          {/* Category & Author */}
          <div className="mb-2 flex items-center gap-2 text-sm">
            <span className="font-medium text-[var(--text-primary)]">{category}</span>
            <span className="text-[var(--text-tertiary)]">·</span>
            <span className="text-[var(--text-secondary)]">{author}</span>
          </div>

          {/* Title */}
          <h2 className="mb-2 text-xl font-bold leading-tight text-[var(--text-primary)] group-hover:underline md:text-2xl">
            {title}
          </h2>

          {/* Description */}
          <p className="mb-4 line-clamp-2 text-sm text-[var(--text-secondary)] md:text-base">
            {description}
          </p>

          {/* Meta info */}
          <div className="flex items-center gap-4 text-sm text-[var(--text-tertiary)]">
            <time dateTime={date}>{date}</time>
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-1">
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                  <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
                </svg>
                {likes}
              </span>
              <span className="flex items-center gap-1">
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M2.678 11.894a1 1 0 0 1 .287.801 10.97 10.97 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8.06 8.06 0 0 0 8 14c3.996 0 7-2.807 7-6 0-3.192-3.004-6-7-6S1 4.808 1 8c0 1.468.617 2.83 1.678 3.894zm-.493 3.905a21.682 21.682 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a9.68 9.68 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105z"/>
                </svg>
                {comments}
              </span>
            </div>
          </div>
        </div>

        {/* Right: Thumbnail */}
        <div className="relative h-28 w-28 flex-shrink-0 overflow-hidden rounded md:h-32 md:w-32">
          <Image
            src={imageUrl}
            alt={title}
            fill
            sizes="(max-width: 768px) 112px, 128px"
            className="object-cover"
          />
        </div>
      </Link>
    </article>
  );
}
