'use client';

import ReactMarkdown from 'react-markdown';
import Image from 'next/image';
import { Heart, MessageCircle, Bookmark, Share2, MoreHorizontal, Eye } from 'lucide-react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneLight, oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { useTheme } from 'next-themes';
import type { Post } from '@lib/types/post';

export default function PostDetail({ post, content }: { post: Post, content: string }) {
  const { resolvedTheme } = useTheme();
  const codeStyle = resolvedTheme === 'dark' ? oneDark : oneLight;

  return (
    <article className="mx-auto max-w-4xl">
      {/* Thumbnail */}
      <div className="p-4 md:p-8">
        <div className="relative aspect-video w-full overflow-hidden rounded-lg">
          <Image
            src={post.imageUrl}
            alt={post.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 896px, 896px"
            className="object-cover"
            priority
          />
        </div>
      </div>

      {/* Title */}
      <div className="px-4 pb-4 md:px-8 md:pb-6">
        <h1 className="text-2xl font-bold leading-tight text-[var(--text-primary)] md:text-3xl">
          {post.title}
        </h1>
      </div>

      {/* Author Header */}
      <div className="border-b border-[var(--border)] px-4 pb-4 md:px-8 md:pb-6">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="relative h-12 w-12 flex-shrink-0 overflow-hidden rounded-full bg-[var(--surface-hover)]">
              <div className="flex h-full w-full items-center justify-center text-lg font-semibold text-[var(--text-secondary)]">
                {post.author[0]}
              </div>
            </div>
            <div>
              <div className="font-medium text-[var(--text-primary)]">{post.author}</div>
              <div className="flex items-center gap-2 text-sm text-[var(--text-secondary)]">
                <time dateTime={post.date}>{post.date}</time>
                <span>·</span>
                <span className="flex items-center gap-1">
                  <Eye size={16} />
                  {post.views.toLocaleString()}
                </span>
              </div>
            </div>
          </div>
          <button className="rounded-full bg-emerald-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-emerald-700">
            Follow
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="px-4 py-6 md:px-8 md:py-10">
        <div className="markdown">
          <ReactMarkdown
            components={{
              code({ node, inline, className, children, ...props }: any) {
                const match = /language-(\w+)/.exec(className || '');
                return !inline && match ? (
                  <SyntaxHighlighter
                    style={codeStyle}
                    language={match[1]}
                    PreTag="div"
                    wrapLongLines={false}
                    customStyle={{
                      margin: 0,
                      padding: '12px 16px',
                      fontSize: '14px',
                      borderRadius: '0.5rem',
                    }}
                    {...props}
                  >
                    {String(children).replace(/\n$/, '')}
                  </SyntaxHighlighter>
                ) : (
                  <code className={className} {...props}>
                    {children}
                  </code>
                );
              },
            }}
          >
            {content}
          </ReactMarkdown>
        </div>
      </div>

      {/* Action Buttons - Bottom */}
      <div className="border-t border-[var(--border)] px-4 py-4 md:px-8 md:py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-6">
            <button className="flex items-center gap-2 text-[var(--text-secondary)] transition-colors hover:text-[var(--text-primary)]">
              <Heart size={20} />
              <span className="text-sm">{post.likes}</span>
            </button>
            <button className="flex items-center gap-2 text-[var(--text-secondary)] transition-colors hover:text-[var(--text-primary)]">
              <MessageCircle size={20} />
              <span className="text-sm">{post.comments}</span>
            </button>
          </div>
          <div className="flex items-center gap-2">
            <button className="rounded-full p-2 transition-colors hover:bg-[var(--surface-hover)]" aria-label="Bookmark">
              <Bookmark size={20} className="text-[var(--text-secondary)]" />
            </button>
            <button className="rounded-full p-2 transition-colors hover:bg-[var(--surface-hover)]" aria-label="Share">
              <Share2 size={20} className="text-[var(--text-secondary)]" />
            </button>
            <button className="rounded-full p-2 transition-colors hover:bg-[var(--surface-hover)]" aria-label="More options">
              <MoreHorizontal size={20} className="text-[var(--text-secondary)]" />
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}
