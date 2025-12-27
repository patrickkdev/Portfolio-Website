import Image from 'next/image';
import Link from 'next/link';

import { BlogMeta } from '@/lib/api/blog';
import { ArrowRight } from 'lucide-react';
import SectionHeader from '../shared/SectionHeader';

const BlogSection = ({ posts }: { posts: BlogMeta[] }) => {
  return (
    <section className="space-y-12 lg:space-y-16">
      <SectionHeader
        eyebrow="Blog"
        title="Artigos recentes"
        subtitle="Sobre tecnologia, SaaS, UI/UX, open source e decisões técnicas."
      />

      <div className="grid gap-12">
        {posts.slice(0, 3).map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group transition hover:translate-y-[-1px]"
          >
            <div className="flex gap-6 max-md:flex-col">
              <Image
                height={384}
                width={512}
                src={post.thumbnail}
                alt={post.title}
                className="aspect-video w-72 shrink-0 rounded-lg object-cover max-md:w-full"
              />

              <div className="flex flex-col justify-between">
                <div>
                  <time
                    dateTime={post.date}
                    className="text-sm opacity-60"
                  >
                    {post.date}
                  </time>

                  <h3 className="mt-3 text-lg font-semibold leading-snug transition-colors group-hover:opacity-90">
                    {post.title}
                  </h3>

                  <p className="mt-2 line-clamp-2 text-sm opacity-80">
                    {post.description}
                  </p>
                </div>

                <span className="mt-4 inline-flex items-center gap-1 text-sm opacity-70">
                  Ler artigo
                  <ArrowRight
                    size={14}
                    className="transition-transform group-hover:translate-x-0.5"
                  />
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default BlogSection;