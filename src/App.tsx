import './App.css'

const phoneNumber = '631-415-6478'
const emailAddress = 'hydroforcewashing1@gmail.com'

const services = [
  {
    title: 'Garbage Pails',
    description:
      'Bin and pail washing that helps cut odors, grime, and built-up household residue.',
  },
  {
    title: 'Driveways',
    description:
      'Surface cleaning for dirt, tire marks, and curbside buildup that drags down curb appeal.',
  },
  {
    title: 'Fences',
    description:
      'Careful washing for wood and vinyl fencing that needs a brighter, cleaner finish.',
  },
  {
    title: 'Exterior Deep Cleans',
    description:
      'Decks, patios, siding, walkways, and other exterior surfaces quoted with a free estimate.',
  },
]

const galleryItems = [
  {
    title: 'Fence Refresh',
    before: '/fence_before.png',
    after: '/fence_after.png',
    copy: 'Weathered fence panels brought back to a brighter, cleaner finish.',
  },
  {
    title: 'Pail Cleaning',
    before: '/bin_before.png',
    after: '/bin_after.png',
    copy: 'Garbage pails cleaned inside and out to reduce grime and lingering odors.',
  },
]

function App() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <header className="sticky top-0 z-50 border-b border-white/15 bg-[#061c33]/95 text-white shadow-lg shadow-slate-950/10 backdrop-blur">
        <nav className="mx-auto flex max-w-7xl items-center justify-between gap-5 px-5 py-3 sm:px-6 lg:px-8">
          <a href="#home" className="flex items-center gap-3" aria-label="HydroForce Washing home">
            <span className="grid h-12 w-12 place-items-center rounded-full bg-white shadow-md shadow-sky-950/20">
              <img src="/logo.png" alt="" className="h-10 w-10 object-contain" />
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
            <a className="transition hover:text-white" href="#gallery">
              Gallery
            </a>
            <a className="transition hover:text-white" href="#contact">
              Contact
            </a>
          </div>

          <a
            href={`tel:${phoneNumber}`}
            className="rounded-full bg-sky-400 px-4 py-2.5 text-sm font-black text-[#061c33] shadow-lg shadow-sky-950/25 transition hover:-translate-y-0.5 hover:bg-sky-300 focus:outline-none focus:ring-2 focus:ring-sky-200 focus:ring-offset-2 focus:ring-offset-[#061c33]"
          >
            Call Now
          </a>
        </nav>
      </header>

      <section id="home" className="hero-section overflow-hidden bg-[#061c33] text-white">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 pb-16 pt-14 sm:px-6 lg:grid-cols-[1.02fr_0.98fr] lg:px-8 lg:pb-20 lg:pt-18">
          <div className="animate-rise">
            <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-sky-300/30 bg-white/8 px-4 py-2 text-sm font-semibold text-sky-100 shadow-lg shadow-slate-950/10">
              <span className="h-2.5 w-2.5 rounded-full bg-sky-300"></span>
              Free estimates in Massapequa, NY and surrounding areas
            </div>

            <h1 className="max-w-4xl text-4xl font-black leading-[1.02] tracking-normal text-white sm:text-5xl lg:text-7xl">
              Premium exterior cleaning for homes that need to look sharp again.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200">
              HydroForce Washing handles pails, driveways, fences, decks, patios, siding, and deep
              exterior cleans with professional care, crisp communication, and free estimates.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href={`tel:${phoneNumber}`}
                className="inline-flex items-center justify-center rounded-full bg-sky-400 px-7 py-4 text-base font-black text-[#061c33] shadow-xl shadow-sky-950/25 transition hover:-translate-y-1 hover:bg-sky-300 focus:outline-none focus:ring-2 focus:ring-sky-200 focus:ring-offset-2 focus:ring-offset-[#061c33]"
              >
                Call {phoneNumber}
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white px-7 py-4 text-base font-black text-[#061c33] shadow-xl shadow-slate-950/20 transition hover:-translate-y-1 hover:bg-sky-50 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#061c33]"
              >
                Request Free Estimate
              </a>
            </div>

            <dl className="mt-10 grid max-w-2xl grid-cols-3 gap-3 border-t border-white/15 pt-6 text-sm text-slate-300">
              <div>
                <dt className="font-black text-white">Free</dt>
                <dd>Estimates</dd>
              </div>
              <div>
                <dt className="font-black text-white">Local</dt>
                <dd>Massapequa area</dd>
              </div>
              <div>
                <dt className="font-black text-white">More</dt>
                <dd>Decks, patios, siding</dd>
              </div>
            </dl>
          </div>

          <div className="animate-float relative mx-auto w-full max-w-xl">
            <div className="absolute -left-5 top-8 hidden h-28 w-28 rounded-full border border-sky-300/25 lg:block"></div>
            <div className="relative overflow-hidden rounded-[2rem] border border-white/15 bg-white shadow-2xl shadow-slate-950/35">
              <div className="grid grid-cols-[0.86fr_1.14fr]">
                <div className="bg-slate-100 p-5">
                  <img
                    src="/fence_after.png"
                    alt="Clean fence after a HydroForce Washing service"
                    className="h-full min-h-[420px] w-full rounded-[1.35rem] object-cover"
                  />
                </div>
                <div className="flex flex-col justify-between bg-white p-6 text-slate-950">
                  <div>
                    <img
                      src="/logo.png"
                      alt="HydroForce Washing logo"
                      className="h-36 w-36 object-contain"
                    />
                    <p className="mt-5 text-sm font-bold uppercase tracking-[0.2em] text-sky-600">
                      Exterior cleaning
                    </p>
                    <h2 className="mt-3 text-3xl font-black leading-tight">
                      Forceful cleaning. Careful results.
                    </h2>
                  </div>
                  <div className="mt-8 rounded-2xl bg-[#061c33] p-5 text-white">
                    <p className="text-sm font-semibold text-sky-200">Fast quote line</p>
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
              Exterior cleaning that solves the jobs homeowners actually notice.
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              Serving Massapequa, NY and nearby communities with free estimates for the exterior
              surfaces homeowners notice most.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
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

      <section id="gallery" className="bg-[#061c33] px-5 py-20 text-white sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div className="max-w-3xl">
              <p className="text-sm font-black uppercase tracking-[0.25em] text-sky-300">Gallery</p>
              <h2 className="mt-3 text-3xl font-black tracking-normal sm:text-5xl">
                Real before and after work, shown without the fluff.
              </h2>
            </div>
            <a
              href={`mailto:${emailAddress}`}
              className="inline-flex w-fit items-center justify-center rounded-full border border-white/20 px-6 py-3 text-sm font-black text-white transition hover:-translate-y-0.5 hover:bg-white hover:text-[#061c33]"
            >
              Email for a free estimate
            </a>
          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-2">
            {galleryItems.map((item) => (
              <article key={item.title} className="overflow-hidden rounded-[1.75rem] bg-white text-slate-900">
                <div className="grid grid-cols-2 gap-1 bg-slate-200 p-1">
                  <figure className="relative overflow-hidden rounded-l-[1.45rem] bg-slate-300">
                    <img src={item.before} alt={`${item.title} before`} className="h-80 w-full object-cover" />
                    <figcaption className="absolute left-4 top-4 rounded-full bg-slate-950/80 px-3 py-1 text-xs font-black uppercase tracking-[0.18em] text-white">
                      Before
                    </figcaption>
                  </figure>
                  <figure className="relative overflow-hidden rounded-r-[1.45rem] bg-slate-300">
                    <img src={item.after} alt={`${item.title} after`} className="h-80 w-full object-cover" />
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

      <section id="contact" className="bg-white px-5 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.25em] text-sky-600">Contact</p>
            <h2 className="mt-3 text-3xl font-black tracking-normal text-[#061c33] sm:text-5xl">
              Get a free estimate for your next clean.
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              Serving Massapequa, NY and nearby communities, HydroForce will follow up with pricing,
              timing, and the best way to handle the surface. For the fastest response, call directly.
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

          <form className="rounded-[1.75rem] border border-slate-200 bg-slate-50 p-5 shadow-xl shadow-slate-950/8 sm:p-7">
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="block">
                <span className="text-sm font-black text-[#061c33]">Name</span>
                <input
                  type="text"
                  placeholder="Your name"
                  className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-sky-400 focus:ring-4 focus:ring-sky-100"
                />
              </label>
              <label className="block">
                <span className="text-sm font-black text-[#061c33]">Phone</span>
                <input
                  type="tel"
                  placeholder="Best phone number"
                  className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-sky-400 focus:ring-4 focus:ring-sky-100"
                />
              </label>
              <label className="block sm:col-span-2">
                <span className="text-sm font-black text-[#061c33]">Service Needed</span>
                <select className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-sky-400 focus:ring-4 focus:ring-sky-100">
                  <option>Garbage pails</option>
                  <option>Driveway cleaning</option>
                  <option>Fence cleaning</option>
                  <option>Decks & patios</option>
                  <option>Siding</option>
                  <option>Deep clean</option>
                  <option>Other exterior cleaning</option>
                  <option>Multiple services</option>
                </select>
              </label>
              <label className="block sm:col-span-2">
                <span className="text-sm font-black text-[#061c33]">Project Details</span>
                <textarea
                  rows={5}
                  placeholder="Tell us what needs cleaning, where it is, and any timing preference."
                  className="mt-2 w-full resize-none rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-sky-400 focus:ring-4 focus:ring-sky-100"
                ></textarea>
              </label>
            </div>
            <button
              type="button"
              className="mt-6 w-full rounded-full bg-[#061c33] px-7 py-4 text-base font-black text-white shadow-lg shadow-slate-950/15 transition hover:-translate-y-0.5 hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-300 focus:ring-offset-2"
            >
              Request Free Estimate
            </button>
          </form>
        </div>
      </section>

      <footer className="bg-[#061c33] px-5 py-8 text-white sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 border-t border-white/10 pt-8 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-3">
            <span className="grid h-11 w-11 place-items-center rounded-full bg-white">
              <img src="/logo.png" alt="" className="h-9 w-9 object-contain" />
            </span>
            <div>
              <p className="font-black">HydroForce Washing</p>
              <p className="text-sm text-slate-300">
                Powerwashing in Massapequa, NY and surrounding areas.
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
