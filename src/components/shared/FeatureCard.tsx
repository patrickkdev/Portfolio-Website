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
    <a href={href} className="group space-y-4">
      {
        imageSrc && 
        <div className="overflow-hidden rounded-lg aspect-video relative">
          <Image src={imageSrc} alt={title || ''} fill />
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
          <p className="link-hover-animation group-hover:link-hovered-animation w-fit text-sm text-primary-600 group-hover:underline">{cta}</p>
        }
      </div>
    </a>
  );
}