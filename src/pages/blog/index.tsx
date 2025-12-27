import FeatureCard from '@/components/shared/FeatureCard';
import PageTitle from '@/components/shared/PageTitle';
import Pagination from '@/components/shared/Pagination';
import { BlogMeta, getAllPosts } from '@/lib/api/blog';
import AppLayout from '@/pages/AppLayout';
import { GetStaticProps } from 'next/types';

type Props = {
  posts: BlogMeta[];
};

const Blog = ({ posts }: Props) => {
  return (
    <AppLayout title="Blog">
      <PageTitle
        breadcrumb={[
          { label: 'Início', path: '/' },
          { label: 'Blog', path: '' },
        ]}
      >
        Blog
      </PageTitle>
      <div className="container py-10">
        <div className="grid gap-8 sm:gap-4 md:grid-cols-3 lg:gap-8">
          {posts.map((post) => (
            <FeatureCard
              key={post.slug}
              href={`/blog/${post.slug}`}
              imageSrc={post.thumbnail}
              title={post.title}
              excerpt={post.date}
            />
          ))}
        </div>
        <div className="mt-12">
          <Pagination />
        </div>
      </div>
    </AppLayout>
  );
};

export default Blog;

export const getStaticProps: GetStaticProps<Props> = async () => {
  return {
    props: {
      posts: getAllPosts(),
    },
  };
};
