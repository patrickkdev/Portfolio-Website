import Image from 'next/image';
import Link from 'next/link';

import { posts } from '@/data/posts';
import { ArrowRight } from 'lucide-react';
import SectionHeader from '../shared/SectionHeader';

const BlogSection = () => {
  return (
    <div className="space-y-12 lg:space-y-16">
      <SectionHeader 
        eyebrow="Blog" 
        title="Artigos recentes" 
      />

      <div className="">
        {posts.slice(0, 3).map((post) => (
          <Link
            key={post.id}
            href={`/blog/${post.id}`}
            className='group flex gap-6 border-t border-t-zinc-500 py-6 max-md:flex-col w-full'
          >
            <Image
              height={384}
              width={512}
              src={post.thumbnailUrl}
              alt={post.title}
              className="w-72 max-md:w-full shrink-0 rounded-lg aspect-video object-cover"
            />
            <div className='flex w-full flex-col justify-evenly'>
              <div>
                <time
                  dateTime={post.publishedAt}
                  className='text-sm opacity-70'
                >
                  {post.publishedAt}
                </time>
                <p
                  className='mt-3 line-clamp-2 text-lg font-semibold leading-[1.4]'
                >
                  {post.title}
                </p>
                <p className='mt-2 line-clamp-2 text-sm'>{post.description}</p>
              </div>

              <div
                className='mt-4 flex justify-between gap-6 max-xs:flex-col-reverse xs:mt-6 xs:items-center'
              >
                <span className='link-hover-animation group-hover:link-hovered-animation w-fit text-sm text-primary-500'>Ler
                  <ArrowRight
                    size={16}
                    className='ml-1 inline-block transition-all duration-300 group-hover:ml-2'
                  />
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BlogSection;