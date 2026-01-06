import PostCard from './PostCard';
import type { Post } from '@lib/types/post';

type PostListProps = {
  posts: Post[];
};

export default function PostList({ posts = [] }: PostListProps) {
  return (
    <div className="mx-auto max-w-4xl">
      {posts.map(post => (
        <PostCard
          key={post.id}
          {...post}
          href={post.id}
        />
      ))}
    </div>
  );
}

