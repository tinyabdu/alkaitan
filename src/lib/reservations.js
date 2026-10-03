// Sends a reservation request to the endpoint in VITE_RESERVATION_ENDPOINT.
// A frontend-only app cannot confirm or store bookings by itself, so when no
// endpoint is configured this resolves with { delivered: false } and the UI
// tells the visitor to contact the restaurant directly.

const endpoint = import.meta.env.VITE_RESERVATION_ENDPOINT

export async function sendReservation(data) {
  if (!endpoint) {
    if (import.meta.env.DEV) {
      console.warn('[reservations] VITE_RESERVATION_ENDPOINT is not set. Request not sent:', data)
    }
    await new Promise((resolve) => setTimeout(resolve, 600))
    return { delivered: false }
  }

  const response = await fetch(endpoint, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    body: JSON.stringify(data),
  })
  if (!response.ok) throw new Error(`Request failed with status ${response.status}`)
  return { delivered: true }
}
