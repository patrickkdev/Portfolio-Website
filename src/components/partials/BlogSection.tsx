import Post from '@/components/shared/Post';
import { posts } from '@/data/posts';
import SectionHeader from '../shared/SectionHeader';

const BlogSection = () => {
  return (
    <div className="space-y-16">
      <SectionHeader eyebrow="Blog" title="Artigos recentes" />
      <div className="mt-10 grid gap-8 sm:gap-4 md:grid-cols-3 lg:gap-8">
        {posts
          .filter((_, index) => index < 3)
          .map((post) => (
            <Post
              key={post.id}
              href={`/blog/${post.id}`}
              thumbnailUrl={post.thumbnailUrl}
              title={post.title}
              publishedAt={post.publishedAt}
            />
          ))}
      </div>
    </div>
  );
};

export default BlogSection;
