import { useState } from 'react';
import { BRAND } from '@/constants/images';
import { cn } from '@/lib/utils';

/**
 * @param {'dark' | 'light'} variant - dark = on navy/hero; light = on white mobile menu
 */
export function BrandLogo({ variant = 'dark', className, ...props }) {
  const sources =
    variant === 'light'
      ? [BRAND.logoHeader, BRAND.logoOnDark]
      : [BRAND.logoHeader, BRAND.logoOnDark];

  const [index, setIndex] = useState(0);
  const src = sources[index] ?? BRAND.logoHeader;

  const handleError = () => {
    setIndex((i) => (i < sources.length - 1 ? i + 1 : i));
  };

  return (
    <img
      src={src}
      alt="E.P.X. Courier Services"
      width={200}
      height={48}
      
      onError={handleError}
      className={cn('h-12 w-auto max-w-[220px] object-contain object-left', className)}
      {...props}
    />
  );
}
