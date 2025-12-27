import AppLayout from '@/pages/AppLayout';
import { GetStaticPaths, GetStaticProps } from 'next';
import Link from 'next/link';
import { FiFacebook, FiLinkedin, FiMail, FiTwitter } from 'react-icons/fi';

import {
  BlogMeta,
  getAllPosts,
  getPostBySlug
} from '@/lib/api/blog';
import { MDXRemote } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import Head from 'next/head';

type Props = {
  meta: BlogMeta;
  mdxSource: any;
};

export default function BlogSingle({ meta, mdxSource }: Props) {
  return (
    <AppLayout title="Blog">
      <Head>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
        <meta name="keywords" content={meta.tags?.join(', ')} />
        <meta name="author" content="Patrick Ferreira" />
        <meta property="og:title" content={meta.title} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:image" content={meta.thumbnail} />
        <meta property="og:url" content={`https://patrick.makztech.com/blog/${meta.slug}`} />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.thumbnail} />
        <meta name="twitter:url" content={`https://patrick.makztech.com/blog/${meta.slug}`} />

        <link rel="canonical" href={`https://patrick.makztech.com/blog/${meta.slug}`} />
      </Head>
      <div className="container mb-10">
        <article>
          <div className="mt-24 flex flex-col">
            <h1 className="text-2xl font-semibold sm:text-3xl md:text-4xl">{meta.title}</h1>
            <p className="mt-4 flex items-center text-gray-400 text-wrap">
              <span>{meta.date}</span>
              <span className="mx-2 h-1.5 w-1.5 rounded-full bg-primary-500"></span>
              {
                meta.tags?.map((tag, index) => (
                  <>
                    <span key={index}>
                      {tag}
                    </span>
                    {meta.tags && index !== meta.tags.length - 1 && <span className="mx-2 h-1.5 w-1.5 rounded-full bg-primary-500"></span>}
                  </>
                ))
              }
            </p>
          </div>
          <div className="prose mt-10 max-w-full dark:prose-invert text-gray-800 dark:text-gray-200">
            <MDXRemote {...mdxSource} />
          </div>
        </article>
        <div className="mt-10  flex">
          <Link href="#">
            <FiTwitter className="mr-3" />
          </Link>
          <Link href="#">
            <FiFacebook className="mx-3" />
          </Link>
          <Link href="#">
            <FiLinkedin className="mx-3" />
          </Link>
          <Link href="#">
            <FiMail className="mx-3" />
          </Link>
        </div>
      </div>
    </AppLayout>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: getAllPosts().map(p => ({
      params: { slug: p.slug },
    })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  const post = getPostBySlug(params!.slug as string);

  return {
    props: {
      meta: post.meta,
      mdxSource: await serialize(post.content),
    },
  };
};