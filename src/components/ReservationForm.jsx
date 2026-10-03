import { useState } from 'react'
import { FiAlertCircle, FiCheckCircle } from 'react-icons/fi'
import { business, telHref, whatsappHref } from '../data/business'
import { sendReservation } from '../lib/reservations'

const initialValues = { name: '', contact: '', date: '', time: '', guests: '2', notes: '', website: '' }

const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const isPhone = (v) => {
  const cleaned = v.replace(/[\s\-().]/g, '')
  return /^\+?\d{7,15}$/.test(cleaned)
}
const todayString = () => new Date().toLocaleDateString('en-CA') // YYYY-MM-DD, local time

function validate(v) {
  const errors = {}
  if (!v.name.trim()) errors.name = 'Enter your name.'
  const contact = v.contact.trim()
  if (!contact) errors.contact = 'Enter a phone number or email address so we can reply.'
  else if (!emailRe.test(contact) && !isPhone(contact))
    errors.contact = 'Enter a valid email address or phone number.'
  if (!v.date) errors.date = 'Choose a date.'
  else if (v.date < todayString()) errors.date = 'Choose today or a later date.'
  if (!v.time) errors.time = 'Choose a time.'
  if (!Number(v.guests) || Number(v.guests) < 1) errors.guests = 'Choose how many people are coming.'
  return errors
}

function Field({ id, label, error, hint, required = true, children }) {
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block font-semibold text-navy">
        {label}
        {required ? <span className="text-red-700"> (required)</span> : <span className="font-normal"> (optional)</span>}
      </label>
      {children}
      {hint && !error && (
        <p id={`${id}-hint`} className="mt-1.5 text-sm">
          {hint}
        </p>
      )}
      {error && (
        <p id={`${id}-error`} className="mt-1.5 flex items-start gap-1.5 text-sm font-semibold text-red-700">
          <FiAlertCircle className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
          {error}
        </p>
      )}
    </div>
  )
}

export default function ReservationForm() {
  const [values, setValues] = useState(initialValues)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle') // idle | sending | sent | error
  const [delivered, setDelivered] = useState(true)

  const update = (e) => {
    const { name, value } = e.target
    setValues((v) => ({ ...v, [name]: value }))
    if (errors[name]) setErrors((er) => ({ ...er, [name]: undefined }))
  }

  const aria = (name, hint) => ({
    id: `res-${name}`,
    name,
    value: values[name],
    onChange: update,
    'aria-invalid': errors[name] ? 'true' : 'false',
    'aria-describedby': errors[name] ? `res-${name}-error` : hint ? `res-${name}-hint` : undefined,
  })

  async function onSubmit(e) {
    e.preventDefault()
    const found = validate(values)
    setErrors(found)
    const first = Object.keys(found)[0]
    if (first) {
      document.getElementById(`res-${first}`)?.focus()
      return
    }
    // Honeypot: bots fill the hidden field, people never see it
    if (values.website) return

    setStatus('sending')
    try {
      const { website, ...payload } = values
      const result = await sendReservation({ ...payload, submittedAt: new Date().toISOString() })
      setDelivered(result.delivered)
      setStatus('sent')
    } catch {
      setStatus('error')
    }
  }

  function reset() {
    setValues(initialValues)
    setErrors({})
    setStatus('idle')
  }

  const hasErrors = Object.values(errors).some(Boolean)

  return (
    <section id="reservations" aria-labelledby="reservations-title" className="section-pad bg-white">
      <div className="container-page grid gap-10 lg:grid-cols-5 lg:gap-16">
        <div className="lg:col-span-2">
          <h2 id="reservations-title" className="text-3xl font-bold sm:text-4xl">
            Request a table
          </h2>
          <p className="mt-4 text-lg leading-relaxed">
            Tell us when you would like to come. This is a reservation request, not a confirmed
            booking: we will contact you to confirm availability.
          </p>
          <p className="mt-4 leading-relaxed">
            We only use your details to reply to this request.
          </p>
        </div>

        <div className="lg:col-span-3">
          {status === 'sent' ? (
            <div role="status" className="rounded-3xl bg-pale p-8">
              <FiCheckCircle className="h-10 w-10 text-brand" aria-hidden="true" />
              {delivered ? (
                <>
                  <h3 className="mt-4 text-2xl font-bold">Request sent</h3>
                  <p className="mt-2 text-lg leading-relaxed">
                    Thank you, {values.name.trim()}. We have your request for {values.guests}{' '}
                    {Number(values.guests) === 1 ? 'person' : 'people'} on {values.date} at {values.time}.
                    Your table is not confirmed until we reply.
                  </p>
                </>
              ) : (
                <>
                  <h3 className="mt-4 text-2xl font-bold">Request not sent yet</h3>
                  <p className="mt-2 text-lg leading-relaxed">
                    Online requests are not switched on for this website yet, so we have not received
                    your details. Please contact the restaurant directly to book.
                  </p>
                  <div className="mt-4 flex flex-wrap gap-3">
                    {business.phone && (
                      <a className="btn btn-primary" href={telHref(business.phone)}>
                        Call us
                      </a>
                    )}
                    {business.whatsapp && (
                      <a
                        className="btn btn-outline"
                        href={whatsappHref(
                          business.whatsapp,
                          `Hello, I would like to reserve a table for ${values.guests} on ${values.date} at ${values.time}. Name: ${values.name.trim()}.`,
                        )}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Message on WhatsApp
                      </a>
                    )}
                    {!business.phone && !business.whatsapp && (
                      <a className="btn btn-primary" href="#contact">
                        See contact details
                      </a>
                    )}
                  </div>
                </>
              )}
              <button type="button" onClick={reset} className="mt-6 font-semibold text-brand underline underline-offset-4">
                Make another request
              </button>
            </div>
          ) : (
            <form onSubmit={onSubmit} noValidate className="grid gap-5 rounded-3xl border border-pale bg-warm p-6 sm:grid-cols-2 sm:p-8">
              {hasErrors && (
                <p role="alert" className="flex items-start gap-2 rounded-xl bg-red-50 px-4 py-3 font-semibold text-red-800 sm:col-span-2">
                  <FiAlertCircle className="mt-1 h-5 w-5 shrink-0" aria-hidden="true" />
                  Please fix the highlighted fields and send again.
                </p>
              )}
              {status === 'error' && (
                <p role="alert" className="flex items-start gap-2 rounded-xl bg-red-50 px-4 py-3 font-semibold text-red-800 sm:col-span-2">
                  <FiAlertCircle className="mt-1 h-5 w-5 shrink-0" aria-hidden="true" />
                  Something went wrong sending your request. Check your connection and try again.
                </p>
              )}

              <div className="sm:col-span-2">
                <Field id="res-name" label="Your name" error={errors.name}>
                  <input type="text" autoComplete="name" className="input" {...aria('name')} />
                </Field>
              </div>
              <div className="sm:col-span-2">
                <Field id="res-contact" label="Phone or email" error={errors.contact} hint="We will use this to confirm your table.">
                  <input type="text" autoComplete="email tel" className="input" {...aria('contact', true)} />
                </Field>
              </div>
              <Field id="res-date" label="Date" error={errors.date}>
                <input type="date" min={todayString()} className="input" {...aria('date')} />
              </Field>
              <Field id="res-time" label="Time" error={errors.time}>
                <input type="time" className="input" {...aria('time')} />
              </Field>
              <div className="sm:col-span-2">
                <Field id="res-guests" label="Party size" error={errors.guests}>
                  <select className="input" {...aria('guests')}>
                    {Array.from({ length: 12 }, (_, i) => i + 1).map((n) => (
                      <option key={n} value={n}>
                        {n} {n === 1 ? 'person' : 'people'}
                      </option>
                    ))}
                    <option value="13">More than 12 (tell us in the notes)</option>
                  </select>
                </Field>
              </div>
              <div className="sm:col-span-2">
                <Field id="res-notes" label="Notes" required={false} hint="Occasion, seating preference or anything we should know.">
                  <textarea rows={3} className="input" {...aria('notes', true)} />
                </Field>
              </div>

              {/* Honeypot field for basic spam protection */}
              <div aria-hidden="true" className="absolute -left-[9999px]">
                <label htmlFor="res-website">Leave this field empty</label>
                <input id="res-website" name="website" tabIndex={-1} autoComplete="off" value={values.website} onChange={update} />
              </div>

              <div className="sm:col-span-2">
                <button type="submit" disabled={status === 'sending'} className="btn btn-primary w-full disabled:opacity-70 sm:w-auto">
                  {status === 'sending' ? 'Sending…' : 'Send reservation request'}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
