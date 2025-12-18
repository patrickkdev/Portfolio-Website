import React from 'react';

interface ImageSplitFeatureSectionProps {
  eyebrow?: string;
  title: string;
  description?: React.ReactNode;
  image: string;
  inverse?: boolean;
  children?: React.ReactNode;
  imageClassName?: string;
  hideImageOnMobile?: boolean;
}

export default function ImageSplitFeatureSection({
  eyebrow,
  title,
  description,
  image,
  inverse = false,
  children,
  imageClassName,
  hideImageOnMobile = true,
}: ImageSplitFeatureSectionProps) {
  return (
    <>
      <div
        className={`mx-auto flex max-w-6xl flex-col gap-12 sm:gap-16
        lg:flex-row ${inverse ? 'lg:flex-row-reverse' : ''}`}
      >
        {/* Text */}
        <div className="lg:w-1/2 flex place-self-center">
          <div className="lg:max-w-lg">
            {eyebrow && (
              <h3 className="mb-3 text-xs font-medium uppercase tracking-wide md:text-sm">
                {eyebrow}
              </h3>
            )}

            <h2 className="mt-2 text-2xl font-semibold leading-tight tracking-tight md:text-4xl lg:text-5xl text-pretty">
              {title}
            </h2>

            <p className="mt-6 lg:mt-4 font-sans text-primary opacity-90 antialiased text-base md:text-lg lg:text-xl text-pretty leading-relaxed md:leading-7 tracking-normal">
              {description}
            </p>

            {/* Extra content such as feature lists */}
            {children && (
              <div className="mt-10 max-w-xl lg:max-w-none">
                {children}
              </div>
            )}
          </div>
        </div>

        {/* Image */}
        <img
          alt={title}
          src={image}
          className={'lg:w-1/2 w-full max-w-none rounded-xl shadow-xl ring-1 ring-white/10 object-cover' + (hideImageOnMobile ? ' hidden lg:block' : '') + (imageClassName ? ` ${imageClassName}` : '')}
        />
      </div>
    </>
  );
}
