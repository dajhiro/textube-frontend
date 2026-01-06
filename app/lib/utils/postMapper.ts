import type { BackendPost, Post } from '@lib/types/post';

/**
 * Extract description from markdown content or SEO metadata
 */
function extractDescription(post: BackendPost): string {
  // Try SEO description first
  if (post.metadata?.seo?.description) {
    return post.metadata.seo.description;
  }

  // Extract first paragraph from content
  const content = post.content;
  const firstParagraph = content
    .split('\n\n')[0]
    .replace(/[#*`]/g, '') // Remove markdown formatting
    .trim();

  // Limit to 150 characters
  return firstParagraph.length > 150
    ? firstParagraph.substring(0, 147) + '...'
    : firstParagraph;
}

/**
 * Format date from ISO string to "YYYY.MM.DD" format
 */
function formatDate(isoDate: string): string {
  const date = new Date(isoDate);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}.${month}.${day}`;
}

/**
 * Map backend Post to frontend Post
 */
export function mapBackendPost(backendPost: BackendPost): Post {
  return {
    id: String(backendPost.id),
    title: backendPost.title,
    description: extractDescription(backendPost),
    imageUrl: backendPost.thumbnailUrl,
    author: backendPost.user?.name || backendPost.channel?.name || 'TexTube',
    date: formatDate(backendPost.createdAt),
    category: backendPost.category,
    likes: backendPost.likeCount,
    comments: backendPost.commentCount,
    views: backendPost.viewCount,
  };
}

/**
 * Map array of backend Posts to frontend Posts
 */
export function mapBackendPosts(backendPosts: BackendPost[]): Post[] {
  return backendPosts.map(mapBackendPost);
}
