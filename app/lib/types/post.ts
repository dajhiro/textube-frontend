// Backend Post type from NestJS API
export interface BackendPost {
  id: number;
  title: string;
  content: string;
  thumbnailUrl: string;
  youtubeId: string;
  metadata: {
    seo?: {
      title?: string;
      description?: string;
      keywords?: string[];
    };
    ai_stats?: {
      total_tokens?: number;
      processing_time?: number;
    };
  };
  category: string;
  tags: string[];
  viewCount: number;
  likeCount: number;
  commentCount: number;
  isReady: boolean;
  isPublic: boolean;
  createdAt: string;
  updatedAt: string;
  channelId: string;
  userId: number;
  user: {
    id: number;
    name?: string;
    image?: string;
  };
  channel: {
    id: string;
    name: string;
    image?: string;
  };
}

// Frontend Post type
export interface Post {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  author: string;
  date: string;
  category: string;
  likes: number;
  comments: number;
  views: number;
}
