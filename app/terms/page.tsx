import Navbar from "../components/Navbar"

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-[#fef7dc] text-[#2b2b2b]">
      <Navbar />

      <section className="max-w-4xl mx-auto px-8 pt-28 pb-24">

  <h1 className="text-5xl md:text-6xl font-serif">
    Terms of Service
  </h1>

  <div className="w-32 h-[1px] bg-[#b08f68] mt-6 mb-12"></div>

  <div className="space-y-8 text-xl text-[#667085] leading-relaxed">

    <p>
      By using VURA, you agree to use the platform responsibly and
      understand that marketplace information is provided for guidance
      purposes only.
    </p>

    <p>
      VURA provides AI-powered shopping intelligence, trust scores,
      marketplace comparisons, and product analysis tools to help users
      make informed purchasing decisions.
    </p>

    <p>
      While VURA strives to provide accurate information, users should
      independently verify product details, pricing, seller information,
      and marketplace policies before making purchases.
    </p>

    <p>
      VURA is not responsible for transactions, shipping, returns,
      warranties, or disputes between users and third-party marketplaces.
    </p>

  </div>

</section>
    </main>
  )
}