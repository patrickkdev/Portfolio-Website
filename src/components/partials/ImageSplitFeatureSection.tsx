import React from 'react';

interface ImageSplitFeatureSectionProps {
  eyebrow?: string;
  title: string;
  description?: React.ReactNode;
  image: string;
  inverse?: boolean;
  children?: React.ReactNode;
  imageClassName?: string;
}

export default function ImageSplitFeatureSection({
  eyebrow,
  title,
  description,
  image,
  inverse = false,
  children,
  imageClassName,
}: ImageSplitFeatureSectionProps) {
  return (
    <>
      <div
        className={`mx-auto flex max-w-6xl flex-col gap-16 sm:gap-20
        lg:flex-row ${inverse ? 'lg:flex-row-reverse' : ''}`}
      >
        {/* Text */}
        <div className="lg:w-1/2">
          <div className="lg:max-w-lg">
            {eyebrow && (
              <h3 className="text-2xl sm:text-3xl font-semibold text-primary-500">
                {eyebrow}
              </h3>
            )}

            <h2 className="mt-2 text-2xl font-semibold tracking-tight text-pretty sm:text-5xl">
              {title}
            </h2>

            {description}

            {/* Extra content such as feature lists */}
            {children && (
              <div className="mt-10 max-w-xl text-base/7 text-primary lg:max-w-none">
                {children}
              </div>
            )}
          </div>
        </div>

        {/* Image */}
        <img
          alt={title}
          src={image}
          className={'lg:w-1/2 w-full max-w-none rounded-xl shadow-xl ring-1 ring-white/10 object-cover' + (imageClassName ? ` ${imageClassName}` : '')}
        />
      </div>
    </>
  );
}
