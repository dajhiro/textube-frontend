'use client';

import ReactMarkdown from 'react-markdown';
import Image from 'next/image';
import { Heart, MessageCircle, Bookmark, Share2, MoreHorizontal, Eye } from 'lucide-react';
import type { Post } from '../mock/posts';

export default function PostDetail({ post, content }: { post: Post, content: string }) {
  return (
    <article className="mx-auto max-w-4xl">
      {/* Title and Thumbnail */}
      <div className="px-4 pb-6 pt-8 md:px-8 md:pb-8 md:pt-12">
        <h1 className="mb-6 text-3xl font-bold leading-tight text-gray-900 md:mb-8 md:text-4xl lg:text-5xl">
          {post.title}
        </h1>

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

      {/* Author Header */}
      <div className="border-b border-gray-200 px-4 py-6 md:px-8">
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

      {/* Content */}
      <div className="px-4 py-10 md:px-8 md:py-16">
        <div className="prose prose-base prose-gray mx-auto max-w-2xl dark:prose-invert prose-headings:font-bold prose-headings:tracking-tight prose-h2:mt-10 prose-h2:text-2xl prose-h3:mt-8 prose-h3:text-xl prose-p:leading-relaxed prose-p:text-gray-700 prose-a:text-emerald-600 prose-a:no-underline hover:prose-a:underline prose-strong:text-gray-900 prose-code:rounded prose-code:bg-gray-100 prose-code:px-1.5 prose-code:py-0.5 prose-code:text-sm prose-code:font-medium prose-code:text-gray-900 prose-pre:bg-gray-900 prose-img:rounded-lg">
          <ReactMarkdown>{content}</ReactMarkdown>
        </div>
      </div>

      {/* Action Buttons - Bottom */}
      <div className="border-t border-gray-200 px-4 py-6 md:px-8">
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
