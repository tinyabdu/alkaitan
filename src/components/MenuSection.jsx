import { useState } from 'react'
import { FaWhatsapp } from 'react-icons/fa6'
import { FiInfo } from 'react-icons/fi'
import { business, whatsappHref } from '../data/business'
import { categories, menuItems } from '../data/menu'
import MenuCard from './MenuCard'

const ALL = 'All'

export default function MenuSection() {
  const [active, setActive] = useState(ALL)
  const visible = active === ALL ? menuItems : menuItems.filter((i) => i.category === active)
  // Filters only earn their place once there are enough dishes
  const showFilters = menuItems.length > 8

  const whatsappUrl = business.whatsapp
    ? whatsappHref(business.whatsapp, 'Hello, I\'d like to know more about your menu. Could you help me?')
    : null

  return (
    <section id="menu" aria-labelledby="menu-title" className="section-pad bg-white">
      <div className="container-page">
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
          <div>
            <h2 id="menu-title" className="text-3xl font-bold sm:text-4xl">
              Our menu
            </h2>
            <p className="mt-3 max-w-xl text-lg">Starters, mains, desserts and drinks, made to order.</p>
          </div>
          {whatsappUrl && (
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-green-600 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-green-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-green-600 self-start"
              aria-label="Contact us about the menu via WhatsApp"
            >
              <FaWhatsapp className="h-5 w-5" aria-hidden="true" />
              <span className="hidden sm:inline">Order via WhatsApp</span>
            </a>
          )}
        </div>

        {business.sampleContent && (
          <p className="mt-5 flex items-start gap-2 rounded-xl bg-pale px-4 py-3 text-navy" role="note">
            <FiInfo className="mt-1 h-5 w-5 shrink-0" aria-hidden="true" />
            <span>Sample menu: dishes and prices are examples and will be replaced with our confirmed menu.</span>
          </p>
        )}

        {showFilters && (
          <div role="group" aria-label="Filter menu by category" className="mt-8 flex flex-wrap gap-2">
            {[ALL, ...categories].map((cat) => (
              <button
                key={cat}
                type="button"
                aria-pressed={active === cat}
                onClick={() => setActive(cat)}
                className={`min-h-11 rounded-full border-2 px-5 text-base font-semibold transition-colors ${
                  active === cat
                    ? 'border-brand bg-brand text-white'
                    : 'border-brand/30 bg-white text-navy hover:border-brand'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        )}

        <ul className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3" aria-live="polite">
          {visible.map((item) => (
            <li key={item.id}>
              <MenuCard item={item} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
