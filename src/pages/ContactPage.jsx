import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import InteriorPage from '../components/InteriorPage.jsx'

const EMAIL = 'ivm.creatives@gmail.com'
const GMAIL_COMPOSE = `https://mail.google.com/mail/?${new URLSearchParams({ view: 'cm', fs: '1', to: EMAIL })}`
const FIELD = 'block w-full rounded-full border border-transparent bg-[#FDFDFD] px-4 py-1.5 text-base leading-[1.2] text-[#071030] shadow-sm transition-shadow focus:shadow-[0_0_0_4px_rgba(191,230,255,0.2)]'

export default function ContactPage() {
  const [searchParams] = useSearchParams()
  const service = searchParams.get('service')?.slice(0, 120)
  const [draft, setDraft] = useState('')
  const [gmailUrl, setGmailUrl] = useState('')
  const [status, setStatus] = useState('')

  function handleSubmit(event) {
    event.preventDefault()
    const form = event.currentTarget
    const message = form.elements.message
    message.setCustomValidity(message.value.trim() ? '' : 'Please enter your message.')
    if (!form.reportValidity()) return
    const data = new FormData(form)
    const name = [data.get('firstName'), data.get('lastName')].map(value => String(value || '').trim()).filter(Boolean).join(' ')
    const subject = service ? `${service} enquiry${name ? ` from ${name}` : ''}` : `Portfolio enquiry${name ? ` from ${name}` : ''}`
    const body = [`Name: ${name || 'Not provided'}`, `Email: ${String(data.get('email')).trim()}`, ...(service ? [`Service: ${service}`] : []), '', String(data.get('message')).trim()].join('\n')
    const url = `${GMAIL_COMPOSE}&${new URLSearchParams({ su: subject, body })}`
    setDraft(`To: ${EMAIL}\nSubject: ${subject}\n\n${body}`)
    setGmailUrl(url)
    setStatus('Your draft is ready. Click Send in Gmail to email me. If Gmail didn’t open, use the link below.')
    // Keep this synchronous with submission so the browser can open a new tab.
    // With noopener, a null return does not reliably mean the popup was blocked.
    try {
      window.open(url, '_blank', 'noopener,noreferrer')
    } catch {
      setStatus('Your draft is ready. Open Gmail using the link below, then click Send.')
    }
  }

  function handleEdit() {
    setDraft('')
    setGmailUrl('')
    setStatus('')
  }

  async function copyDraft() {
    try {
      await navigator.clipboard.writeText(draft)
      setStatus(`Message copied. Paste it into an email to ${EMAIL}.`)
    } catch {
      setStatus('Copy was unavailable. You can select and copy your draft below.')
    }
  }

  return (
    <InteriorPage active="/contact" title="Contact">
      <main id="page-content" className="mx-auto flex min-h-screen max-w-[1920px] flex-col items-center px-6 pb-16 pt-[clamp(176px,11vw,211px)] text-center max-[1001px]:pb-12 max-[1001px]:pt-44">
        <header className="interior-enter w-full">
          <h1 className="text-[clamp(52px,6.35vw,122px)] font-normal leading-[1.05] tracking-[-0.065em] max-[600px]:text-[clamp(48px,10.7vw,64px)]">Let’s work together.</h1>
          <p className="mx-auto mt-8 max-w-[960px] text-[clamp(15px,0.94vw,18px)] font-semibold leading-snug tracking-[-0.025em] max-[600px]:mt-7">Feel free to send a message through the contact form or reach out directly at <a className="break-words underline-offset-4 hover:underline" href={GMAIL_COMPOSE} target="_blank" rel="noopener noreferrer">{EMAIL}</a></p>
          <p className="mt-2 text-[clamp(13px,0.8vw,15.4px)] leading-snug">I’m open to discussing new ideas, creative projects, and collaboration opportunities.</p>
        </header>
        <form onSubmit={handleSubmit} onChange={handleEdit} aria-label="Contact Iverson" className="interior-glass mt-[min(2.6vw,50px)] w-full max-w-[820px] px-[clamp(24px,2.3vw,44px)] pb-5 pt-8 text-left max-[600px]:mt-9 max-[600px]:pt-7">
          {service && <p className="mb-6 text-sm">Enquiry: <strong>{service}</strong></p>}
          <div className="grid grid-cols-[1fr_1fr_1.42fr] gap-[clamp(18px,1.56vw,30px)] max-[600px]:grid-cols-1 max-[600px]:gap-5">
            <label className="block text-sm font-semibold"><span className="mb-1 block pl-3">First Name</span><input name="firstName" autoComplete="given-name" maxLength="80" className={FIELD} /></label>
            <label className="block text-sm font-semibold"><span className="mb-1 block pl-3">Last Name</span><input name="lastName" autoComplete="family-name" maxLength="80" className={FIELD} /></label>
            <label className="block text-sm font-semibold"><span className="mb-1 block pl-3">Email *</span><input name="email" type="email" autoComplete="email" required maxLength="254" className={FIELD} /></label>
          </div>
          <label className="mt-8 block text-sm font-semibold max-[600px]:mt-5"><span className="mb-1 block pl-3">Message</span><textarea name="message" required maxLength="4000" rows="4" onInput={event => event.currentTarget.setCustomValidity('')} className={`${FIELD} min-h-28 resize-y rounded-xl p-3.5 font-normal`} /></label>
          <div className="mt-6 flex flex-col items-center text-center">
            <button type="submit" aria-describedby="contact-send-note" className="min-h-9 min-w-[112px] cursor-pointer rounded-full border border-transparent bg-[#003c8a] px-8 py-2 text-sm font-semibold transition duration-200 hover:-translate-y-0.5 hover:border-white/40 hover:bg-[#0057bc] motion-reduce:transform-none">Open Gmail</button>
            <p id="contact-send-note" className="mt-2 text-xs text-white/80">Opens Gmail with your message ready. Click Send in Gmail.</p>
          </div>
          <p role="status" aria-live="polite" className={status ? 'mt-4 text-center text-sm leading-relaxed' : 'sr-only'}>{status}</p>
          {draft && (
            <div className="mt-3 text-center">
              <div className="flex flex-wrap justify-center gap-3">
                <a href={gmailUrl} target="_blank" rel="noopener noreferrer" className="rounded-full border border-white/40 px-4 py-2 text-sm hover:bg-white/15">Open Gmail again</a>
                <button type="button" onClick={copyDraft} className="cursor-pointer rounded-full border border-white/40 px-4 py-2 text-sm hover:bg-white/15">Copy message</button>
              </div>
              <details className="mt-3 text-left text-sm"><summary className="cursor-pointer">View email draft</summary><pre className="mt-3 select-text whitespace-pre-wrap break-words rounded-lg bg-[#061735]/40 p-4 font-questrial">{draft}</pre></details>
            </div>
          )}
        </form>
      </main>
    </InteriorPage>
  )
}
