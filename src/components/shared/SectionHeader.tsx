import classNames from 'classnames';

type props = {
  eyebrow?: React.ReactNode;
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  centered?: boolean
  className?: string
}

export default function SectionHeader({ eyebrow, title, subtitle, centered, className }: props) {
  return (
    <div className={classNames('max-w-3xl space-y-3', centered && 'mx-auto text-center', className)}>
      {
        eyebrow &&
        <span className="text-sm font-semibold tracking-wide uppercase text-primary-600 dark:text-primary-400">
          {eyebrow}
        </span>
      }
      <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
        {title}
      </h2>
      {
        subtitle &&
        <p className="mt-4 opacity-80 text-pretty">
          {subtitle}
        </p>
      }
    </div>
  );
}