import { posts } from '@/data/posts';
import SectionHeader from '../shared/SectionHeader';

const BlogSection = () => {
  return (
    <div className="space-y-12 lg:space-y-16">
      <SectionHeader 
        eyebrow="Blog" 
        title="Artigos recentes" 
      />

      <div className="mt-16 grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
        {posts.slice(0, 3).map((post) => (
          <article key={post.id} className="flex flex-col items-start justify-between group">
            {/* Image Container */}
            <div className="relative w-full overflow-hidden rounded-2xl bg-gray-100">
              <img
                src={post.thumbnailUrl || 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800'}
                alt={post.title}
                className="aspect-video w-full object-cover transition duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
            </div>

            {/* Metadata & Title */}
            <div className="max-w-xl">
              <div className="mt-6 flex items-center gap-x-4 text-xs">
                <time dateTime={post.publishedAt} className="text-gray-500">
                  {post.publishedAt}
                </time>
                <span className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">
                  {post.readingTimeInMinutes} min
                </span>
              </div>
                
              <div className="group relative">
                <h3 className="mt-3 text-xl font-semibold leading-6 text-gray-900 group-hover:text-blue-600 transition-colors">
                  <a href={`/posts/${post.id}`}>
                    <span className="absolute inset-0" />
                    {post.title}
                  </a>
                </h3>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default BlogSection;