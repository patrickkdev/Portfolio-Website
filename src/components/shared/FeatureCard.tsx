
type Props = {
  title: string;
  excerpt: string;
  reading: string;
  href?: string;
};


export default function BlogPostCard({ title, excerpt, reading, href }: Props) {
  return (
    <a href={href}>
      <article
        className="mb-6 p-6 rounded-2xl bg-white dark:bg-slate-900 shadow-sm hover:shadow-md transition-shadow duration-200 ease-out border border-transparent hover:border-slate-100"
        style={{ breakInside: 'avoid' }}
      >
        <a href="#" className="block focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-indigo-500 rounded">
          <div className="h-36 rounded-lg mb-4 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-900 flex items-end">
            {/* Image/block placeholder — keeps cards feeling like posts */}
            <div className="px-4 pb-3">
              <span className="inline-block text-xs font-medium uppercase tracking-wide text-slate-500 bg-white/60 backdrop-blur rounded-full px-2 py-1">{reading}</span>
            </div>
          </div>
          <h3 className="text-lg font-semibold leading-tight text-slate-900 dark:text-slate-100 mb-2">{title}</h3>
          <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{excerpt}</p>
        </a>
      </article>
    </a>
  );
}