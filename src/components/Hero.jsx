// src/components/Hero.jsx
import { FaFacebookF, FaInstagram, FaTiktok, FaXTwitter } from 'react-icons/fa6'
import { FiCalendar } from 'react-icons/fi'
import { business } from '../data/business'
import ImageSlot from './ImageSlot'

const socialIcons = { instagram: FaInstagram, facebook: FaFacebookF, tiktok: FaTiktok, x: FaXTwitter }

export default function Hero() {
  return (
    <section id="home" aria-labelledby="hero-title" className="bg-white">
      <div className="container-page grid items-center gap-14 py-14 sm:py-20 md:grid-cols-2 lg:gap-20 lg:py-24">
        {/* Left: copy and actions */}
        <div>
          <h1 id="hero-title" className="text-4xl font-bold leading-[1.08] sm:text-5xl lg:text-6xl">
            <span className="text-brand">Delicious</span> food, made to share
          </h1>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-ink/80">
            Alkaitan is a place to sit down and enjoy a well-prepared meal with family and friends.
            Look through the menu, or send us a reservation request.
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-6">
            <a href="#menu" className="btn btn-primary px-8 shadow-lg shadow-brand/25">
              View our menu
            </a>
            <a
              href="#reservations"
              className="group inline-flex min-h-12 items-center gap-3 rounded-full pr-4 font-semibold text-navy"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-brand shadow-md ring-1 ring-brand/15 transition-colors group-hover:bg-pale">
                <FiCalendar className="h-5 w-5" aria-hidden="true" />
              </span>
              Book a table
            </a>
          </div>

          {business.socials.length > 0 && (
            <ul className="mt-12 flex gap-5" aria-label="Social media links">
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
                      className="flex h-11 w-11 items-center justify-center rounded-full text-brand transition-colors hover:bg-pale"
                    >
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </a>
                  </li>
                )
              })}
            </ul>
          )}
        </div>

        {/* Right: round photo inside a brand ring, with a floating action chip */}
        <div className="arch-in relative mx-auto w-full max-w-md md:max-w-none">
          <div className="relative mx-auto aspect-square w-full max-w-lg">
            <div className="absolute inset-0 rounded-full border-[6px] border-brand" aria-hidden="true" />
            <div className="absolute inset-5 overflow-hidden rounded-full bg-pale shadow-xl shadow-navy/15 sm:inset-6">
              <ImageSlot src="/hero-picture.png" alt="Alkaitan Restaurant dining room" eager />
            </div>

            <a
              href="#reservations"
              className="absolute -bottom-3 left-0 flex items-center gap-3 rounded-full bg-white py-2.5 pl-2.5 pr-5 shadow-xl shadow-navy/15 ring-1 ring-pale transition-colors hover:bg-pale sm:-left-6"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-brand text-white">
                <FiCalendar className="h-5 w-5" aria-hidden="true" />
              </span>
              <span className="leading-tight">
                <span className="block text-sm font-bold text-brand">Reserve a table</span>
                <span className="block text-xs text-ink/80">Send a request</span>
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}