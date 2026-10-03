import { MdRestaurant } from 'react-icons/md'

/**
 * Shows a real photo when `src` is provided, otherwise a branded placeholder.
 * Placeholders are decorative (aria-hidden); the surrounding text names the content.
 * Always size the parent (aspect ratio) so images never cause layout shift.
 */
export default function ImageSlot({ src, alt = '', width, height, eager = false, className = '' }) {
  if (src) {
    return (
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        loading={eager ? 'eager' : 'lazy'}
        decoding="async"
        className={`h-full w-full object-cover ${className}`}
      />
    )
  }
  return (
    <div
      aria-hidden="true"
      className={`threads flex h-full w-full flex-col items-center justify-center gap-2 bg-pale text-brand ${className}`}
    >
      <MdRestaurant className="h-10 w-10 opacity-70" />
      <span className="px-4 text-center text-sm font-medium text-navy/70">Photo coming soon</span>
    </div>
  )
}
