import { FiClock, FiMail, FiMapPin, FiNavigation, FiPhone } from 'react-icons/fi'
import { business, directionsHref, telHref } from '../data/business'

function Card({ icon: Icon, title, children }) {
  return (
    <div className="rounded-2xl border border-pale bg-white p-6">
      <span className="flex h-11 w-11 items-center justify-center rounded-full bg-pale text-brand">
        <Icon className="h-5 w-5" aria-hidden="true" />
      </span>
      <h3 className="mt-4 text-lg font-bold">{title}</h3>
      <div className="mt-1 leading-relaxed">{children}</div>
    </div>
  )
}

const tbc = <span className="text-slate-600">To be confirmed</span>

export default function ContactSection() {
  const directions = directionsHref(business)
  const link = 'font-semibold text-brand underline underline-offset-4 hover:text-brand-dark'

  return (
    <section id="contact" aria-labelledby="contact-title" className="section-pad bg-pale">
      <div className="container-page">
        <h2 id="contact-title" className="text-3xl font-bold sm:text-4xl">
          Find us and get in touch
        </h2>

        <div className="mt-8 grid gap-5 sm:grid-cols-2">
          <Card icon={FiPhone} title="Phone">
            {business.phone ? (
              <a className={link} href={telHref(business.phone)}>
                {business.phone}
              </a>
            ) : (
              tbc
            )}
          </Card>
          <Card icon={FiMail} title="Email">
            {business.email ? (
              <a className={link} href={`mailto:${business.email}`}>
                {business.email}
              </a>
            ) : (
              tbc
            )}
          </Card>
          <Card icon={FiMapPin} title="Address">
            {business.address ? <address className="not-italic">{business.address}</address> : tbc}
            {directions && (
              <a className={`${link} mt-3 inline-flex items-center gap-2`} href={directions} target="_blank" rel="noopener noreferrer">
                <FiNavigation aria-hidden="true" /> Get directions
              </a>
            )}
          </Card>
          <Card icon={FiClock} title="Opening hours">
            {business.hours.length > 0 ? (
              <dl className="space-y-1">
                {business.hours.map((h) => (
                  <div key={h.days} className="flex justify-between gap-4">
                    <dt>{h.days}</dt>
                    <dd className="font-semibold">{h.time}</dd>
                  </div>
                ))}
              </dl>
            ) : (
              tbc
            )}
          </Card>
        </div>

        {business.mapEmbedUrl && (
          <div className="mt-8 aspect-[16/9] overflow-hidden rounded-2xl">
            <iframe
              title="Map showing the location of Alkaitan Restaurant"
              src={business.mapEmbedUrl}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-full w-full border-0"
            />
          </div>
        )}
      </div>
    </section>
  )
}
