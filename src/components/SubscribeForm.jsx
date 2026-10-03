import { useState } from 'react'
import { FiMail, FiCheck, FiAlertCircle } from 'react-icons/fi'

const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export default function SubscribeForm() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState('idle')

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!emailRe.test(email)) {
      setStatus('error')
      return
    }
    setStatus('sending')
    try {
      // TODO: replace with actual API endpoint
      // await fetch('/api/subscribe', { method: 'POST', body: JSON.stringify({ email }) })
      await new Promise((r) => setTimeout(r, 800))
      setStatus('success')
      setEmail('')
    } catch {
      setStatus('error')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="mt-3" noValidate>
      {status === 'success' && (
        <div role="status" className="flex items-center gap-2 text-sm text-green-600 bg-green-50 px-3 py-2 rounded-lg">
          <FiCheck className="h-4 w-4 shrink-0" aria-hidden="true" />
          <span>Thanks for subscribing!</span>
        </div>
      )}
      {status === 'error' && (
        <div role="alert" className="flex items-center gap-2 text-sm text-red-700 bg-red-50 px-3 py-2 rounded-lg">
          <FiAlertCircle className="h-4 w-4 shrink-0" aria-hidden="true" />
          <span>Please enter a valid email.</span>
        </div>
      )}
      <label htmlFor="footer-email" className="sr-only">
        Email address
      </label>
      <div className="flex gap-2">
        <input
          id="footer-email"
          type="email"
          autoComplete="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value)
            if (status !== 'idle') setStatus('idle')
          }}
          placeholder="your@email.com"
          disabled={status === 'sending' || status === 'success'}
          className="input flex-1 text-sm"
          aria-describedby={status === 'error' ? 'email-error' : undefined}
        />
        <button
          type="submit"
          disabled={status === 'sending' || status === 'success'}
          className="btn btn-primary min-w-[100px] text-sm !py-2"
          aria-busy={status === 'sending'}
        >
          {status === 'sending' ? '...' : 'Subscribe'}
        </button>
      </div>
    </form>
  )
}