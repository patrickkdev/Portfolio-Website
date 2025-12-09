import React from 'react';


export type SideBySideSectionProps = {
/** Required title for the section. Rendered as an H2 for accessibility. */
title: React.ReactNode;
/** When true, swaps the visual order so the "right" content appears first on wide screens. */
inverse?: boolean;
/** Left column content. Can be any React node: text, form, image, complex markup. */
left?: React.ReactNode;
/** Right column content. Can be any React node. */
right?: React.ReactNode;
/** Optional container className to tune spacing or background. */
className?: string;
/** Gap between columns at medium+ screens. Accepts any Tailwind spacing like "8" or "12"; used as "gap-x-{gap}". Defaults to "8". */
gap?: string | number;
/** Vertical alignment of columns on larger screens. One of "start", "center", "end". Defaults to "center". */
align?: 'start' | 'center' | 'end';
};


/**
* Responsive side-by-side section.
* - Stacks vertically on small screens.
* - Uses two flexible columns on medium+ screens.
* - `inverse` flips the order on medium+ screens while keeping logical DOM order.
* - Flexible slots: pass any React nodes into left and right.
*/
export default function SideBySideSection({
  title,
  inverse = false,
  left,
  right,
  className = '',
  gap = 8,
  align = 'center',
}: SideBySideSectionProps) {
// Map align prop to Tailwind items-* class for vertical alignment on larger screens
  const alignMap: Record<string, string> = {
    start: 'items-start',
    center: 'items-center',
    end: 'items-end',
  };


  // Build gap class (we do not validate value; keep it flexible for tailwind/JIT setups)
  const gapClass = typeof gap === 'number' ? `gap-x-${gap}` : `gap-x-${gap}`;


  // On md+ we want row or row-reverse depending on inverse.
  // We keep DOM order as left then right so keyboard / screen reader order remains predictable.
  const mdDirectionClass = inverse ? 'md:flex-row-reverse' : 'md:flex-row';


  return (
    <section className={`w-full py-12 md:py-20 ${className}`} aria-labelledby={typeof title === 'string' ? title.replace(/\s+/g, '-').toLowerCase() : undefined}>
      <div className="container mx-auto px-6">
        <div className={`flex flex-col ${mdDirectionClass} md:items-stretch ${alignMap[align]} md:gap-0 ${gapClass}`}>
          <div className="md:w-1/2">
            <h2 className="text-2xl md:text-3xl font-semibold mb-6">{title}</h2>
            <div className="prose max-w-none">{left}</div>
          </div>


          {right && <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center">
            {/* Wrap right content so images scale nicely and block-level content centers */}
            <div className="w-full max-w-full">{right}</div>
          </div>}
        </div>
      </div>
    </section>
  );
}
