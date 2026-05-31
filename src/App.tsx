import { useState, type FormEvent } from 'react'
import './App.css'

const phoneNumber = '631-415-6478'
const emailAddress = 'hydroforcewashing1@gmail.com'
const web3FormsEndpoint = 'https://api.web3forms.com/submit'
const quoteSubject = 'New Powerwashing Quote Request'
const serviceAreaPlaceholder = 'Massapequa, Seaford, Merrick, Wantagh, and other nearby areas.'

type SubmitStatus = 'idle' | 'loading' | 'success' | 'error'

const services = [
  {
    title: 'Driveway cleaning',
    description:
      'Pressure washing for dirt, tire marks, and buildup that make the driveway look worn down.',
  },
  {
    title: 'Patio cleaning',
    description:
      'Cleaning for concrete, paver, and stone patios so outdoor spaces feel ready to use again.',
  },
  {
    title: 'Walkway cleaning',
    description:
      'A straightforward wash for front walks, side paths, and entry areas with everyday grime.',
  },
  {
    title: 'Siding and house wash',
    description:
      'Exterior house washing for siding that needs mildew, dirt, or surface buildup removed.',
  },
  {
    title: 'Deck and fence cleaning',
    description:
      'Careful cleaning for decks and fences that need a brighter, cleaner outdoor finish.',
  },
  {
    title: 'Outdoor surface cleaning',
    description:
      'Quote-based cleaning for garbage pails, outdoor surfaces, and other exterior cleanup needs.',
  },
]

const galleryItems = [
  {
    title: 'Fence Brightening',
    before: '/fence_before1.jpeg',
    after: '/fence_after1.jpeg',
    beforeAlt: 'Fence before power washing with visible outdoor buildup.',
    afterAlt: 'Fence after power washing with a cleaner, brighter surface.',
    copy: 'Weathered fence panels brought back to a brighter, cleaner finish.',
  },
  {
    title: 'Fence Surface Reset',
    before: '/fence_before2.jpeg',
    after: '/fence_after2.jpeg',
    beforeAlt: 'Before photo of a fence panel with dirt and staining.',
    afterAlt: 'After photo of a fence panel cleaned by power washing.',
    copy: 'Fence surfaces cleaned evenly to remove built-up grime and outdoor staining.',
  },
  {
    title: 'Garbage Pail Refresh',
    before: '/garbage_before1.jpg',
    after: '/garbage_after1.jpg',
    beforeAlt: 'Garbage pail before exterior cleaning.',
    afterAlt: 'Garbage pail after exterior cleaning.',
    copy: 'Garbage bins washed down to cut grime, residue, and lingering odors.',
  },
  {
    title: 'Pail Deep Clean',
    before: '/pail_before1.jpg',
    after: '/pail_after1.jpg',
    beforeAlt: 'Before photo of a pail with surface grime.',
    afterAlt: 'After photo of a cleaned pail.',
    copy: 'Buckets and pails cleaned inside and out to reduce grime and lingering odors.',
  },
]

const faqs = [
  {
    question: 'Do you offer free estimates?',
    answer:
      'Yes. Use the quote form or call/text with the surface you need cleaned and your town, and HydroForce will follow up.',
  },
  {
    question: 'What surfaces can you clean?',
    answer:
      'Common jobs include driveways, patios, walkways, siding, decks, fences, garbage pails, and other outdoor surfaces.',
  },
  {
    question: 'What areas do you serve?',
    answer: `The current service area is ${serviceAreaPlaceholder} `,
  },
  {
    question: 'How do I request a quote?',
    answer:
      'Fill out the quote form with your name, phone number, location, and project details, or call/text directly for a faster start.',
  },
  {
    question: 'Do I need to be home during the cleaning?',
    answer:
      'That depends on the project and access to the area being cleaned. Share the details when requesting a quote so the visit can be planned clearly.',
  },
]

function App() {
  const [status, setStatus] = useState<SubmitStatus>('idle')

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('loading')

    const form = e.currentTarget
    const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY

    if (!accessKey) {
      setStatus('error')
      return
    }

    const formData = new FormData(form)
    // Web3Forms lets this static site send quote requests without a custom backend.
    formData.append('access_key', accessKey)
    formData.append('subject', quoteSubject)

    try {
      const response = await fetch(web3FormsEndpoint, {
        method: 'POST',
        body: formData,
      })

      const result = await response.json()

      if (result.success) {
        setStatus('success')
        form.reset()
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <header className="sticky top-0 z-50 border-b border-white/15 bg-[#061c33]/95 text-white shadow-lg shadow-slate-950/10 backdrop-blur">
        <nav className="mx-auto flex max-w-7xl items-center justify-between gap-5 px-5 py-3 sm:px-6 lg:px-8">
          <a href="#home" className="flex items-center gap-3" aria-label="HydroForce Washing home">
            <span className="grid h-12 w-12 place-items-center overflow-hidden rounded-full bg-white p-1 shadow-md shadow-sky-950/20">
              <img src="/logo.jpg" alt="" className="h-full w-full rounded-full object-cover" />
            </span>
            <span>
              <span className="block text-sm font-black uppercase tracking-[0.22em] text-sky-200">
                HydroForce
              </span>
              <span className="block text-sm font-semibold text-white/80">Washing</span>
            </span>
          </a>

          <div className="hidden items-center gap-8 text-sm font-semibold text-white/80 md:flex">
            <a className="transition hover:text-white" href="#services">
              Services
            </a>
            <a className="transition hover:text-white" href="#service-area">
              Service Area
            </a>
            <a className="transition hover:text-white" href="#gallery">
              Gallery
            </a>
            <a className="transition hover:text-white" href="#contact">
              Quote
            </a>
          </div>

          <a
            href={`tel:${phoneNumber}`}
            className="rounded-full bg-sky-400 px-4 py-2.5 text-sm font-black text-[#061c33] shadow-lg shadow-sky-950/25 transition hover:-translate-y-0.5 hover:bg-sky-300 focus:outline-none focus:ring-2 focus:ring-sky-200 focus:ring-offset-2 focus:ring-offset-[#061c33]"
          >
            Call/Text Now
          </a>
        </nav>
      </header>

      <section id="home" className="hero-section overflow-hidden bg-[#061c33] text-white">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 pb-16 pt-14 sm:px-6 lg:grid-cols-[1.02fr_0.98fr] lg:px-8 lg:pb-20 lg:pt-18">
          <div className="animate-rise">
            <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-sky-300/30 bg-white/8 px-4 py-2 text-sm font-semibold text-sky-100 shadow-lg shadow-slate-950/10">
              <span className="h-2.5 w-2.5 rounded-full bg-sky-300"></span>
              Free quotes in Massapequa, NY and nearby areas
            </div>

            <h1 className="max-w-4xl text-4xl font-black leading-[1.02] tracking-normal text-white sm:text-5xl lg:text-7xl">
              Power Washing in Massapequa, NY
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200">
              Driveway, patio, walkway, siding, and outdoor surface cleaning for homes in
              Massapequa and nearby areas.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href="#quote"
                className="inline-flex items-center justify-center rounded-full bg-sky-400 px-7 py-4 text-base font-black text-[#061c33] shadow-xl shadow-sky-950/25 transition hover:-translate-y-1 hover:bg-sky-300 focus:outline-none focus:ring-2 focus:ring-sky-200 focus:ring-offset-2 focus:ring-offset-[#061c33]"
              >
                Request a Free Quote
              </a>
              <a
                href={`tel:${phoneNumber}`}
                className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white px-7 py-4 text-base font-black text-[#061c33] shadow-xl shadow-slate-950/20 transition hover:-translate-y-1 hover:bg-sky-50 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#061c33]"
              >
                Call/Text Now
              </a>
            </div>

            <dl className="mt-10 grid max-w-2xl grid-cols-3 gap-3 border-t border-white/15 pt-6 text-sm text-slate-300">
              <div>
                <dt className="font-black text-white">Free</dt>
                <dd>Quotes</dd>
              </div>
              <div>
                <dt className="font-black text-white">Local</dt>
                <dd>Massapequa, NY</dd>
              </div>
              <div>
                <dt className="font-black text-white">Surfaces</dt>
                <dd>Driveways, patios, siding</dd>
              </div>
            </dl>
          </div>

          <div className="animate-float relative mx-auto w-full max-w-xl">
            <div className="absolute -left-5 top-8 hidden h-28 w-28 rounded-full border border-sky-300/25 lg:block"></div>
            <div className="relative overflow-hidden rounded-[2rem] border border-white/15 bg-white shadow-2xl shadow-slate-950/35">
              <div className="grid grid-cols-[0.86fr_1.14fr]">
                <div className="bg-slate-100 p-5">
                  <img
                    src="/fence_after2.jpeg"
                    alt="Clean fence after a HydroForce Washing service"
                    className="h-full min-h-[420px] w-full rounded-[1.35rem] object-cover"
                  />
                </div>
                <div className="flex flex-col justify-between bg-white p-6 text-slate-950">
                  <div>
                    <img
                      src="/logo.jpg"
                      alt="HydroForce Washing logo"
                      className="h-36 w-36 object-contain"
                    />
                    <p className="mt-5 text-sm font-bold uppercase tracking-[0.2em] text-sky-600">
                      Pressure washing
                    </p>
                    <h2 className="mt-3 text-3xl font-black leading-tight">
                      Cleaner outdoor surfaces, quoted clearly.
                    </h2>
                  </div>
                  <div className="mt-8 rounded-2xl bg-[#061c33] p-5 text-white">
                    <p className="text-sm font-semibold text-sky-200">Call/text for a quote</p>
                    <p className="mt-2 text-2xl font-black">{phoneNumber}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="bg-white px-5 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.25em] text-sky-600">Services</p>
            <h2 className="mt-3 text-3xl font-black tracking-normal text-[#061c33] sm:text-5xl">
              Power washing and pressure washing services.
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              HydroForce Washing cleans the exterior surfaces homeowners deal with most, from
              driveways and patios to siding, decks, fences, and general outdoor surfaces.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service, index) => (
              <article
                key={service.title}
                className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm shadow-slate-950/5 transition duration-300 hover:-translate-y-1 hover:border-sky-200 hover:shadow-xl hover:shadow-sky-950/10"
                style={{ animationDelay: `${index * 90}ms` }}
              >
                <div className="mb-7 flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-100 text-xl font-black text-sky-700 transition group-hover:bg-[#061c33] group-hover:text-white">
                  {String(index + 1).padStart(2, '0')}
                </div>
                <h3 className="text-xl font-black text-[#061c33]">{service.title}</h3>
                <p className="mt-4 leading-7 text-slate-600">{service.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="service-area" className="bg-slate-50 px-5 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.25em] text-sky-600">
              Service Area
            </p>
            <h2 className="mt-3 text-3xl font-black tracking-normal text-[#061c33] sm:text-4xl">
              Local power washing near Massapequa.
            </h2>
          </div>
          <div className="text-lg leading-8 text-slate-600">
            <p>
              HydroForce Washing currently lists service for{' '}
              <strong className="font-black text-[#061c33]">{serviceAreaPlaceholder}</strong>
            </p>
            <p className="mt-4 text-base leading-7 text-slate-500">
              Use the quote form or call/text to ask about availability.
            </p>
            <a
              href="#quote"
              className="mt-6 inline-flex items-center justify-center rounded-full bg-[#061c33] px-6 py-3 text-sm font-black text-white shadow-lg shadow-slate-950/15 transition hover:-translate-y-0.5 hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-300 focus:ring-offset-2"
            >
              Request a Free Quote
            </a>
          </div>
        </div>
      </section>

      <section id="gallery" className="bg-[#061c33] px-5 py-20 text-white sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div className="max-w-3xl">
              <p className="text-sm font-black uppercase tracking-[0.25em] text-sky-300">Gallery</p>
              <h2 className="mt-3 text-3xl font-black tracking-normal sm:text-5xl">
                Real before and after work.
              </h2>
            </div>
            <a
              href="#quote"
              className="inline-flex w-fit items-center justify-center rounded-full border border-white/20 px-6 py-3 text-sm font-black text-white transition hover:-translate-y-0.5 hover:bg-white hover:text-[#061c33]"
            >
              Request a Free Quote
            </a>
          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-2">
            {galleryItems.map((item) => (
              <article key={item.title} className="overflow-hidden rounded-[1.75rem] bg-white text-slate-900">
                <div className="grid grid-cols-2 gap-1 bg-slate-200 p-1">
                  <figure className="relative overflow-hidden rounded-l-[1.45rem] bg-slate-300">
                    <img src={item.before} alt={item.beforeAlt} className="h-80 w-full object-cover" />
                    <figcaption className="absolute left-4 top-4 rounded-full bg-slate-950/80 px-3 py-1 text-xs font-black uppercase tracking-[0.18em] text-white">
                      Before
                    </figcaption>
                  </figure>
                  <figure className="relative overflow-hidden rounded-r-[1.45rem] bg-slate-300">
                    <img src={item.after} alt={item.afterAlt} className="h-80 w-full object-cover" />
                    <figcaption className="absolute left-4 top-4 rounded-full bg-sky-300 px-3 py-1 text-xs font-black uppercase tracking-[0.18em] text-[#061c33]">
                      After
                    </figcaption>
                  </figure>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-black text-[#061c33]">{item.title}</h3>
                  <p className="mt-3 leading-7 text-slate-600">{item.copy}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="bg-slate-50 px-5 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.25em] text-sky-600">FAQ</p>
            <h2 className="mt-3 text-3xl font-black tracking-normal text-[#061c33] sm:text-5xl">
              Common quote questions.
            </h2>
          </div>

          <div className="mt-10 grid gap-5 lg:grid-cols-2">
            {faqs.map((faq) => (
              <article key={faq.question} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm shadow-slate-950/5">
                <h3 className="text-xl font-black text-[#061c33]">{faq.question}</h3>
                <p className="mt-3 leading-7 text-slate-600">{faq.answer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="bg-white px-5 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.25em] text-sky-600">Contact</p>
            <h2 className="mt-3 text-3xl font-black tracking-normal text-[#061c33] sm:text-5xl">
              Request a free quote.
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              Tell HydroForce Washing what needs cleaning, where the property is, and the best way
              to reach you. For the fastest response, call or text directly.
            </p>

            <div className="mt-9 space-y-4">
              <a
                href={`tel:${phoneNumber}`}
                className="flex items-center justify-between rounded-2xl border border-slate-200 bg-slate-50 p-5 transition hover:border-sky-200 hover:bg-sky-50"
              >
                <span>
                  <span className="block text-sm font-black uppercase tracking-[0.2em] text-slate-500">
                    Phone
                  </span>
                  <span className="mt-1 block text-xl font-black text-[#061c33]">{phoneNumber}</span>
                </span>
                <span className="text-2xl font-black text-sky-600">+</span>
              </a>
              <a
                href={`mailto:${emailAddress}`}
                className="flex items-center justify-between rounded-2xl border border-slate-200 bg-slate-50 p-5 transition hover:border-sky-200 hover:bg-sky-50"
              >
                <span>
                  <span className="block text-sm font-black uppercase tracking-[0.2em] text-slate-500">
                    Email
                  </span>
                  <span className="mt-1 block break-all text-xl font-black text-[#061c33]">
                    {emailAddress}
                  </span>
                </span>
                <span className="text-2xl font-black text-sky-600">+</span>
              </a>
            </div>
          </div>

          <form
            id="quote"
            className="rounded-[1.75rem] border border-slate-200 bg-slate-50 p-5 shadow-xl shadow-slate-950/8 sm:p-7"
            onSubmit={handleSubmit}
          >
            <input
              type="checkbox"
              name="botcheck"
              className="hidden"
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
            />
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="block">
                <span className="text-sm font-black text-[#061c33]">Name</span>
                <input
                  name="name"
                  type="text"
                  required
                  placeholder="Your name"
                  className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-sky-400 focus:ring-4 focus:ring-sky-100"
                />
              </label>
              <label className="block">
                <span className="text-sm font-black text-[#061c33]">Phone</span>
                <input
                  name="phone"
                  type="tel"
                  required
                  placeholder="Best phone number"
                  className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-sky-400 focus:ring-4 focus:ring-sky-100"
                />
              </label>
              <label className="block">
                <span className="text-sm font-black text-[#061c33]">Email</span>
                <input
                  name="email"
                  type="email"
                  placeholder="Email address"
                  className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-sky-400 focus:ring-4 focus:ring-sky-100"
                />
              </label>
              <label className="block">
                <span className="text-sm font-black text-[#061c33]">Location / Town</span>
                <input
                  name="location"
                  type="text"
                  placeholder="Town or neighborhood"
                  className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-sky-400 focus:ring-4 focus:ring-sky-100"
                />
              </label>
              <label className="block sm:col-span-2">
                <span className="text-sm font-black text-[#061c33]">Service Needed</span>
                <select
                  name="service_needed"
                  required
                  defaultValue=""
                  className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-sky-400 focus:ring-4 focus:ring-sky-100"
                >
                  <option value="" disabled>
                    Select a service
                  </option>
                  <option value="Garbage pails">Garbage pails</option>
                  <option value="Driveway cleaning">Driveway cleaning</option>
                  <option value="Patio cleaning">Patio cleaning</option>
                  <option value="Walkway cleaning">Walkway cleaning</option>
                  <option value="Siding / house wash">Siding / house wash</option>
                  <option value="Deck and fence cleaning">Deck and fence cleaning</option>
                  <option value="Outdoor surface cleaning">Outdoor surface cleaning</option>
                  <option value="Other exterior cleaning">Other exterior cleaning</option>
                  <option value="Multiple services">Multiple services</option>
                </select>
              </label>
              <label className="block sm:col-span-2">
                <span className="text-sm font-black text-[#061c33]">Project Details</span>
                <textarea
                  name="message"
                  rows={5}
                  required
                  placeholder="Tell us what needs cleaning, where it is, and any timing preference."
                  className="mt-2 w-full resize-none rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-sky-400 focus:ring-4 focus:ring-sky-100"
                ></textarea>
              </label>
            </div>
            <div aria-live="polite">
              {status === 'success' && (
                <p className="mt-5 rounded-2xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm font-bold text-emerald-800">
                  Thanks. Your quote request was sent, and HydroForce will follow up.
                </p>
              )}
              {status === 'error' && (
                <p className="mt-5 rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-bold text-red-800">
                  Something went wrong. Please call or text {phoneNumber} instead.
                </p>
              )}
            </div>
            <button
              type="submit"
              disabled={status === 'loading'}
              className="mt-6 w-full rounded-full bg-[#061c33] px-7 py-4 text-base font-black text-white shadow-lg shadow-slate-950/15 transition hover:-translate-y-0.5 hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-300 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:translate-y-0"
            >
              {status === 'loading' ? 'Sending...' : 'Request a Free Quote'}
            </button>
          </form>
        </div>
      </section>

      <footer className="bg-[#061c33] px-5 py-8 text-white sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 border-t border-white/10 pt-8 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-3">
            <span className="grid h-11 w-11 place-items-center overflow-hidden rounded-full bg-white p-1">
              <img src="/logo.jpg" alt="" className="h-full w-full rounded-full object-cover" />
            </span>
            <div>
              <p className="font-black">HydroForce Washing</p>
              <p className="text-sm text-slate-300">
                Power washing in Massapequa, NY and nearby areas.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-2 text-sm font-semibold text-slate-300 sm:flex-row sm:gap-6">
            <a className="transition hover:text-white" href={`tel:${phoneNumber}`}>
              {phoneNumber}
            </a>
            <a className="transition hover:text-white" href={`mailto:${emailAddress}`}>
              {emailAddress}
            </a>
          </div>
        </div>
      </footer>
    </main>
  )
}

export default App
