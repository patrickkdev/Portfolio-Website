import Image from 'next/image';

type Props = {
  imageSrc?: string;
  excerpt?: string;
  title?: string;
  description?: string;
  cta?: string;
  href: string;
};


export default function FeatureCard({ imageSrc, excerpt, title, description, cta, href }: Props) {
  return (
    <a href={href} className="space-y-4">
      {
        imageSrc && 
        <div className="overflow-hidden rounded-lg">
          <Image src={imageSrc} alt={title || ''} width={400} height={200} className="hover:scale-105" />
        </div>
      }
      <div className="flex flex-col gap-2">
        {
          excerpt &&
          <small className="text-xs font-medium text-primary-600">{excerpt}</small>
        }
        <h3 className="font-display text-xl font-semibold !leading-[1.25] max-sm:text-lg">{title}</h3>
        {
          description &&
          <p className="text-sm text-primary opacity-80">{description?.substring(0, 100)}</p>
        }
        {
          cta && 
          <p className="link-hover-animation group-hover:link-hovered-animation w-fit text-sm text-primary-600 hover:underline">{cta}</p>
        }
      </div>
    </a>
  );
}