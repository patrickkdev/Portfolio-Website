import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';

const BLOG_DIR = path.join(process.cwd(), '_posts');

export type BlogMeta = {
  title: string;
  thumbnail: string;
  description: string;
  date: string;
  tags?: string[];
  slug: string;
};

function getFiles() {
  return fs.readdirSync(BLOG_DIR).filter(f => f.endsWith('.mdx'));
}

export function getAllPosts(): BlogMeta[] {
  return getFiles()
    .map(file => {
      const slug = file.replace(/\.mdx$/, '');
      const filePath = path.join(BLOG_DIR, file);
      const source = fs.readFileSync(filePath, 'utf8');
      const { data } = matter(source);

      return {
        ...(data as Omit<BlogMeta, 'slug'>),
        slug,
      };
    })
    .sort(
      (a, b) =>
        new Date(b.date).getTime() - new Date(a.date).getTime()
    );
}

export function getLatestPosts(limit: number): BlogMeta[] {
  return getAllPosts().slice(0, limit);
}

export function getPostBySlug(slug: string) {
  const filePath = path.join(BLOG_DIR, `${slug}.mdx`);
  const source = fs.readFileSync(filePath, 'utf8');
  const { content, data } = matter(source);

  return {
    content,
    meta: {
      ...(data as Omit<BlogMeta, 'slug'>),
      slug,
    },
  };
}
