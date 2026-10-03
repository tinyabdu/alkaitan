import { navLinks } from '../data/business'

export default function MobileMenu({ open, onNavigate }) {
  return (
    <nav
      id="mobile-menu"
      aria-label="Mobile"
      hidden={!open}
      className="border-t border-pale bg-white lg:hidden"
    >
      <ul className="container-page flex flex-col gap-1 py-4">
        {navLinks.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              onClick={onNavigate}
              className="block rounded-xl px-4 py-3 text-lg font-semibold text-navy hover:bg-pale"
            >
              {link.label}
            </a>
          </li>
        ))}
        <li className="pt-2">
          <a href="#reservations" onClick={onNavigate} className="btn btn-primary w-full">
            Reserve a table
          </a>
        </li>
      </ul>
    </nav>
  )
}
