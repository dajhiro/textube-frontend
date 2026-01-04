'use client';

import ReactMarkdown from 'react-markdown';
import Image from 'next/image';
import { Heart, MessageCircle, Bookmark, Share2, MoreHorizontal, Eye } from 'lucide-react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneLight } from 'react-syntax-highlighter/dist/esm/styles/prism';
import type { Post } from '../mock/posts';

export default function PostDetail({ post, content }: { post: Post, content: string }) {
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
        <h1 className="text-2xl font-bold leading-tight text-gray-900 md:text-3xl">
          {post.title}
        </h1>
      </div>

      {/* Author Header */}
      <div className="border-b border-gray-200 px-4 pb-4 md:px-8 md:pb-6">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="relative h-12 w-12 flex-shrink-0 overflow-hidden rounded-full bg-gray-200">
              <div className="flex h-full w-full items-center justify-center text-lg font-semibold text-gray-600">
                {post.author[0]}
              </div>
            </div>
            <div>
              <div className="font-medium text-gray-900">{post.author}</div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
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

      {/* Content - Obsidian Minimal Theme Style */}
      <div className="px-4 py-6 md:px-8 md:py-10 bg-gray-50">
        <div className="prose prose-lg mx-auto max-w-3xl
          prose-headings:font-semibold
          prose-headings:text-gray-900
          prose-headings:tracking-tight

          prose-h1:text-2xl
          prose-h1:mb-6
          prose-h1:mt-10
          prose-h1:first:mt-0

          prose-h2:text-xl
          prose-h2:mt-10
          prose-h2:mb-4
          prose-h2:pb-2
          prose-h2:border-b
          prose-h2:border-gray-200

          prose-h3:text-lg
          prose-h3:mt-8
          prose-h3:mb-3

          prose-p:text-gray-700
          prose-p:leading-[1.75]
          prose-p:mb-6
          prose-p:text-[17px]

          prose-a:text-blue-600
          prose-a:no-underline
          prose-a:font-normal
          hover:prose-a:text-blue-700
          hover:prose-a:underline

          prose-strong:text-gray-900
          prose-strong:font-semibold

          prose-em:text-gray-700
          prose-em:italic

          prose-code:text-sm
          prose-code:bg-gray-100
          prose-code:text-gray-800
          prose-code:px-1.5
          prose-code:py-0.5
          prose-code:rounded
          prose-code:font-mono
          prose-code:before:content-['']
          prose-code:after:content-['']

          prose-pre:bg-gray-50
          prose-pre:text-gray-900
          prose-pre:rounded-lg
          prose-pre:border
          prose-pre:border-gray-200
          prose-pre:p-0
          prose-pre:overflow-x-auto

          prose-pre>code:bg-transparent
          prose-pre>code:text-gray-900
          prose-pre>code:p-0
          prose-pre>code:before:content-['']
          prose-pre>code:after:content-['']

          prose-blockquote:border-l-4
          prose-blockquote:border-gray-300
          prose-blockquote:pl-6
          prose-blockquote:italic
          prose-blockquote:text-gray-600
          prose-blockquote:bg-gray-50
          prose-blockquote:py-0.5
          prose-blockquote:my-6

          prose-ul:my-6
          prose-ul:list-disc
          prose-ul:pl-6

          prose-ol:my-6
          prose-ol:list-decimal
          prose-ol:pl-6

          prose-li:text-gray-700
          prose-li:my-2
          prose-li:leading-relaxed

          prose-img:rounded-xl
          prose-img:shadow-md
          prose-img:my-8

          prose-hr:border-gray-200
          prose-hr:my-12

          dark:prose-invert
          dark:prose-headings:text-gray-100
          dark:prose-p:text-gray-300
          dark:prose-a:text-blue-400
          dark:prose-strong:text-gray-100
          dark:prose-code:bg-gray-800
          dark:prose-code:text-gray-200
          dark:prose-blockquote:border-gray-600
          dark:prose-blockquote:text-gray-400
        ">
          <ReactMarkdown
            components={{
              code({ node, inline, className, children, ...props }: any) {
                const match = /language-(\w+)/.exec(className || '');
                return !inline && match ? (
                  <SyntaxHighlighter
                    style={oneLight}
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
      <div className="border-t border-gray-200 px-4 py-4 md:px-8 md:py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-6">
            <button className="flex items-center gap-2 text-gray-600 transition-colors hover:text-gray-900">
              <Heart size={20} />
              <span className="text-sm">{post.likes}</span>
            </button>
            <button className="flex items-center gap-2 text-gray-600 transition-colors hover:text-gray-900">
              <MessageCircle size={20} />
              <span className="text-sm">{post.comments}</span>
            </button>
          </div>
          <div className="flex items-center gap-2">
            <button className="rounded-full p-2 transition-colors hover:bg-gray-100" aria-label="Bookmark">
              <Bookmark size={20} className="text-gray-600" />
            </button>
            <button className="rounded-full p-2 transition-colors hover:bg-gray-100" aria-label="Share">
              <Share2 size={20} className="text-gray-600" />
            </button>
            <button className="rounded-full p-2 transition-colors hover:bg-gray-100" aria-label="More options">
              <MoreHorizontal size={20} className="text-gray-600" />
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}
