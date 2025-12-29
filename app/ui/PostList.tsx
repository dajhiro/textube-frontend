import PostCard from './PostCard';

type PostListProps = {
  posts: Post[];
};

export default function PostList({ posts=[] }: PostListProps) {
  return (
    <div>
      {posts.map(post => (
        <PostCard
          key={post.id}
          title={post.title}
          imageUrl={post.imageUrl}
          href={post.id}
        />
      ))}
    </div>
  );
}

