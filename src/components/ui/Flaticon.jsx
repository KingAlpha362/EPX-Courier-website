import { FLATICONS } from '@/constants/flaticons';
import { cn } from '@/lib/utils';

export function Flaticon({ icon, className, alt = '' }) {
  const src = FLATICONS[icon];
  if (!src) return null;

  return (
    <img
      src={src}
      alt={alt}
      width={24}
      height={24}
      loading="lazy"
      decoding="async"
      className={cn('flaticon-icon object-contain shrink-0', className)}
    />
  );
}
