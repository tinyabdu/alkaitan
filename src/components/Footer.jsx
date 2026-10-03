import { FaFacebookF, FaInstagram, FaTiktok, FaXTwitter } from 'react-icons/fa6'
import { FiMail, FiMapPin, FiPhone } from 'react-icons/fi'
import { business, directionsHref, telHref, legalLinks } from '../data/business'
import { categories } from '../data/menu'
import Logo from './Logo'
import SubscribeForm from './SubscribeForm'

const socialIcons = { instagram: FaInstagram, facebook: FaFacebookF, tiktok: FaTiktok, x: FaXTwitter }

const linkClass = 'text-white/85 underline-offset-4 transition-colors hover:text-white hover:underline'

function Column({ title, children }) {
  return (
    <div>
      <h2 className="text-lg font-bold text-white">{title}</h2>
      {children}
    </div>
  )
}

export default function Footer() {
  const directions = directionsHref(business)

  const helpful = [
    { label: 'Request a table', href: '#reservations' },
    { label: 'Contact us', href: '#contact' },
    ...(directions ? [{ label: 'Get directions', href: directions, external: true }] : []),
    { label: 'Back to top', href: '#home' },
  ]

  return (
    <footer className="on-dark bg-navy text-white">
      <div className="container-page grid gap-10 py-16 sm:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr_1.3fr] lg:gap-8">
        {/* Brand + subscribe */}
        <div className="sm:col-span-2 lg:col-span-1">
          <a href="#home" aria-label="Alkaitan Restaurant, back to top">
            <Logo light />
          </a>
          <p className="mt-3 max-w-[16rem] text-sm text-white/85">Delicious food, made to share</p>

          <h2 className="mt-10 text-lg font-bold text-white">Subscribe now</h2>
          <SubscribeForm />
        </div>

        <nav aria-label="Footer: helpful links">
          <Column title="Helpful links">
            <ul className="mt-4 space-y-3">
              {helpful.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className={linkClass}
                    {...(l.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </Column>
        </nav>

        <nav aria-label="Footer: menu categories">
          <Column title="Our menu">
            <ul className="mt-4 space-y-3">
              {categories.map((c) => (
                <li key={c}>
                  <a href="#menu" className={linkClass}>
                    {c}
                  </a>
                </li>
              ))}
            </ul>
          </Column>
        </nav>

        {/* Contact */}
        <Column title="Contact us">
          <ul className="mt-4 space-y-4 text-white/85">
            <li className="flex items-start gap-3">
              <FiPhone className="mt-1 h-5 w-5 shrink-0" aria-hidden="true" />
              {business.phone ? (
                <a href={telHref(business.phone)} className={`${linkClass} underline`}>
                  {business.phone}
                </a>
              ) : (
                <span>Phone to be confirmed</span>
              )}
            </li>
            <li className="flex items-start gap-3">
              <FiMail className="mt-1 h-5 w-5 shrink-0" aria-hidden="true" />
              {business.email ? (
                <a href={`mailto:${business.email}`} className={`${linkClass} break-all underline`}>
                  {business.email}
                </a>
              ) : (
                <span>Email to be confirmed</span>
              )}
            </li>
            <li className="flex items-start gap-3">
              <FiMapPin className="mt-1 h-5 w-5 shrink-0" aria-hidden="true" />
              <span>{business.address ?? 'Address to be confirmed'}</span>
            </li>
          </ul>

          {business.socials.length > 0 && (
            <ul className="mt-6 flex gap-3" aria-label="Social media links">
              {business.socials.map((s) => {
                const Icon = socialIcons[s.key]
                if (!Icon) return null
                return (
                  <li key={s.key}>
                    <a
                      href={s.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Alkaitan on ${s.label ?? s.key}`}
                      className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-navy transition-colors hover:bg-pale"
                    >
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </a>
                  </li>
                )
              })}
            </ul>
          )}
        </Column>
      </div>

      {/* Bottom bar: divider, centred copyright, legal links on the right */}
      <div className="container-page">
        <div className="grid gap-3 border-t border-white/30 py-6 text-sm text-white/85 md:grid-cols-3 md:items-center">
          <span className="hidden md:block" aria-hidden="true" />
          <p className="md:text-center">
            © {new Date().getFullYear()} {business.name}. All rights reserved.
          </p>
          {legalLinks.length > 0 ? (
            <ul className="flex flex-wrap gap-x-5 gap-y-2 md:justify-end" aria-label="Legal">
              {legalLinks.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className={linkClass}>
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          ) : (
            <span aria-hidden="true" />
          )}
        </div>
      </div>
    </footer>
  )
}