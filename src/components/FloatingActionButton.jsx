import { FaWhatsapp } from 'react-icons/fa'
import { FiMessageCircle } from 'react-icons/fi'
import { business, whatsappHref } from '../data/business'

/**
 * Quick-contact button. Opens WhatsApp when a verified number is set in
 * src/data/business.js; otherwise it jumps to the contact section so it never
 * points at a placeholder number.
 */
export default function FloatingActionButton() {
  const hasWhatsapp = Boolean(business.whatsapp)
  const href = hasWhatsapp
    ? whatsappHref(business.whatsapp, 'Hello Alkaitan, I have a question.')
    : '#contact'
  const label = hasWhatsapp ? 'Chat with Alkaitan on WhatsApp' : 'Contact Alkaitan'
  const Icon = hasWhatsapp ? FaWhatsapp : FiMessageCircle

  return (
    <a
      href={href}
      aria-label={label}
      {...(hasWhatsapp ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      className="group fixed right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-brand text-white shadow-lg shadow-navy/30 transition-colors hover:bg-brand-dark focus-visible:outline-offset-4 sm:right-8"
      style={{ bottom: 'max(1.25rem, env(safe-area-inset-bottom))' }}
    >
      <Icon className="h-7 w-7" aria-hidden="true" />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute right-16 hidden whitespace-nowrap rounded-lg bg-navy px-3 py-1.5 text-sm font-semibold text-white opacity-0 shadow transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100 sm:block"
      >
        {hasWhatsapp ? 'Chat on WhatsApp' : 'Contact us'}
      </span>
    </a>
  )
}
