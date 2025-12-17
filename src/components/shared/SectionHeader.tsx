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
        <h3 className="text-primary-500 font-semibold">
          {eyebrow}
        </h3>
      }
      <p className="text-3xl font-semibold sm:text-4xl">
        {title}
      </p>
      {
        subtitle &&
        <p className="opacity-80">
          {subtitle}
        </p>
      }
    </div>
  );
}