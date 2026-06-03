import Navbar from "../components/Navbar"

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#fef7dc] text-[#2b2b2b]">
      <Navbar />

      <section className="max-w-4xl mx-auto px-8 pt-28 pb-24">

  <h1 className="text-5xl md:text-6xl font-serif">
    Contact VURA
  </h1>

  <div className="w-32 h-[1px] bg-[#b08f68] mt-6 mb-12"></div>

  <div className="space-y-10">

    <div>
      <p className="uppercase tracking-[0.2em] text-sm text-[#b08f68]">
        Email
      </p>

      <p className="mt-3 text-2xl text-[#2b2b2b]">
        hello@vura.ai
      </p>
    </div>

    <div>
      <p className="uppercase tracking-[0.2em] text-sm text-[#b08f68]">
        Response Time
      </p>

      <p className="mt-3 text-xl text-[#667085]">
        Within 24–48 hours
      </p>
    </div>

    <div>
      <p className="uppercase tracking-[0.2em] text-sm text-[#b08f68]">
        Location
      </p>

      <p className="mt-3 text-xl text-[#667085]">
        Philippines
      </p>
    </div>

  </div>

</section>
    </main>
  )
}