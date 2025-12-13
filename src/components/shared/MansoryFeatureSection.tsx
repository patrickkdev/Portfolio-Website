
// Masonry-style feature section
export default function MasonryFeatureSection({ eyebrow, title, description, children }: { eyebrow?: string; title: string; description?: string; children: React.ReactNode[] }) {
  return (
    <section className="max-w-6xl mx-auto px-6 py-12 sm:px-12 lg:px-16 space-y-8">
      <header className="space-y-4 text-center">
        {eyebrow && <h3 className="font-semibold text-primary-500">{eyebrow}</h3>}
        <h2 className="text-3xl font-bold text-primary">
          {title}
        </h2>
        <p className="text-primary opacity-80">
          {description}
        </p>
      </header>

      <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6">
        {children}
      </div>

      <div className="mt-8 text-center">
        <a
          href="#"
          className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-indigo-600 text-white hover:bg-indigo-700 transition"
        >
          Read more insights
        </a>
      </div>
    </section>
  );
}
