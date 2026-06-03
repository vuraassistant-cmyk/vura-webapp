import Navbar from "../components/Navbar"

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-[#fef7dc] text-[#2b2b2b]">
      <Navbar />

      <section className="max-w-6xl mx-auto px-12 pt-32 pb-24">
        <h1 className="text-6xl md:text-7xl font-serif leading-tight">
          Privacy Policy
        </h1>
<div className="w-40 h-[1px] bg-[#b08f68] mt-6 mb-12"></div>
        <p className="mt-10 text-lg text-[#667085]">
          VURA respects your privacy. We collect only the information necessary
          to improve your experience and provide shopping intelligence services.
        </p>
      </section>
    </main>
  )
}