import Navbar from "../components/Navbar"

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#fef7dc] text-[#2b2b2b]">
      <Navbar />

      <section className="max-w-5xl mx-auto px-8 py-32">
        <p className="uppercase tracking-[0.4em] text-[#b08968] text-sm">
          About VURA
        </p>

        <h1 className="mt-8 text-7xl font-serif leading-tight">
          Know before you buy.
        </h1>

        <p className="mt-10 text-xl text-[#667085] leading-relaxed">
          VURA is an AI-powered shopping intelligence platform built to help
          shoppers make smarter purchasing decisions.
        </p>

        <p className="mt-6 text-xl text-[#667085] leading-relaxed">
          Instead of relying solely on ratings and reviews, VURA analyzes
          marketplace trust signals, seller reliability, pricing, and product
          intelligence to help users shop with confidence.
        </p>

        <p className="mt-6 text-xl text-[#667085] leading-relaxed">
          Our mission is simple:
        </p>

        <h2 className="mt-6 text-4xl font-serif text-[#8b6f47]">
          Shop smarter. Buy safer.
        </h2>
      </section>
    </main>
  )
}