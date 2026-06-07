"use client"

import { useEffect, useState } from "react"
import Navbar from "../components/Navbar"
import Link from "next/link"
export default function ClosetPage() {

  const [products, setProducts] = useState<any[]>([])

  useEffect(() => {

    const saved =
      JSON.parse(localStorage.getItem("vura-closet") || "[]")

    setProducts(saved)

  }, [])

  const removeProduct = (index: number) => {

    const updated = [...products]

    updated.splice(index, 1)

    setProducts(updated)

    localStorage.setItem(
      "vura-closet",
      JSON.stringify(updated)
    )
  }

  return (

    <main className="min-h-screen bg-[#efe7dc] text-[#2b2b2b]">

      <Navbar />

      <section className="px-6 md:px-16 pt-32 pb-20">

      <div className="mb-12">

  <p className="text-[15px] font-semibold uppercase tracking-[0.45em] text-[#b08968]">
    AI CLOSET
  </p>

  <div className="mt-4 h-[3px] w-24 rounded-full bg-[#b08968]" />

</div>
<h1 className="text-6xl font-serif mt-6">
  Your Personal Shopping Intelligence Hub
</h1>

<p className="mt-6 text-xl text-[#6b7280] max-w-3xl leading-relaxed">
  Track trusted products, monitor marketplace risks,
  compare opportunities, and build a smarter shopping collection.
</p>
        
<div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
  <div className="rounded-[25px] bg-white p-6 shadow-sm">
    <p className="text-sm uppercase tracking-[0.3em] text-[#b08968]">
      Saved Products
    </p>
    <p className="mt-2 text-4xl font-bold text-[#8b6f47]">
      {products.length}
    </p>
  </div>

  <div className="rounded-[25px] bg-white p-6 shadow-sm">
    <p className="text-sm uppercase tracking-[0.3em] text-[#b08968]">
      Average Trust
    </p>
    <p className="mt-2 text-4xl font-bold text-[#8b6f47]">
      91
    </p>
  </div>

  <div className="rounded-[25px] bg-white p-6 shadow-sm">
    <p className="text-sm uppercase tracking-[0.3em] text-[#b08968]">
      Low Risk
    </p>
    <p className="mt-2 text-4xl font-bold text-[#8b6f47]">
      100%
    </p>
  </div>

  <div className="rounded-[25px] bg-white p-6 shadow-sm">
    <p className="text-sm uppercase tracking-[0.3em] text-[#b08968]">
      Marketplaces
    </p>
    <p className="mt-2 text-4xl font-bold text-[#8b6f47]">
      4
    </p>
  </div>
</div>
<div className="mt-10 rounded-[30px] bg-white p-8 shadow-sm">
  <p className="uppercase tracking-[0.3em] text-[#b08968] text-sm">
    AI Insight
  </p>

  <h3 className="mt-4 text-3xl font-serif text-[#0f172a]">
    Your Shopping Pattern Detected
  </h3>

  <p className="mt-4 text-[#667085] text-lg leading-relaxed">
  Based on your saved products, VURA detected a preference for
  premium electronics, verified sellers, and low-risk purchases.
  We recommend focusing on official stores and products with
  trust scores above 90.
</p>

<div className="mt-6 inline-flex rounded-full bg-[#8b6f47]/10 px-5 py-3 text-[#8b6f47] font-medium">
  🏆 Recommended Marketplace: Lazada Official Stores
</div>
</div>
{/* AI SHOPPING PROFILE */}

<div className="mt-12 rounded-[35px] bg-white p-8 shadow-sm">
  <p className="uppercase tracking-[0.3em] text-[#b08968] text-sm">
    AI Shopping Profile
  </p>

  <h3 className="mt-4 text-3xl font-serif text-[#0f172a]">
    Your Personal Buying Intelligence
  </h3>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">

    <div>
      <p className="text-sm uppercase tracking-[0.2em] text-[#b08968]">
        Primary Interest
      </p>
      <p className="mt-2 text-xl text-[#0f172a]">
        🎧 Electronics
      </p>
    </div>

    <div>
      <p className="text-sm uppercase tracking-[0.2em] text-[#b08968]">
        Shopping Style
      </p>
      <p className="mt-2 text-xl text-[#0f172a]">
        🛡 Safety-First Buyer
      </p>
    </div>

    <div>
      <p className="text-sm uppercase tracking-[0.2em] text-[#b08968]">
  Preferred Marketplace
</p>

<p className="mt-2 text-xl text-[#0f172a]">
  🏆 Lazada
</p>
    </div>

    <div>
      <p className="text-sm uppercase tracking-[0.2em] text-[#b08968]">
        Average Trust Preference
      </p>
      <p className="mt-2 text-xl text-[#0f172a]">
        91/100
      </p>
    </div>
<div>
  <p className="text-sm uppercase tracking-[0.2em] text-[#b08968]">
    AI Confidence
  </p>

  <p className="mt-2 text-xl text-[#0f172a]">
    94%
  </p>
</div>
  </div>
</div>
{products.length === 0 && (

  <div className="mt-12 rounded-[40px] bg-[#efe7dc] border border-[#d6c6b8] p-16 text-center shadow-sm">

    <h2 className="text-5xl text-[#2b2b2b]">
      Your AI Closet is Empty
    </h2>

    <p className="mt-8 text-lg text-[#5f6f8b] leading-relaxed">
      Save products after analysis to build your trusted shopping collection.
    </p>

    <Link
  href="/analyze"
  className="inline-block mt-10 rounded-full bg-[#8b6f47] px-10 py-4 text-white hover:opacity-90 transition"
>
  Analyze a Product
</Link>

  </div>

)}
        <div className="grid max-w-md gap-8 mt-16">

          {products.map((product, index) => (

            <div
              key={index}
              className="rounded-[35px] bg-[#efe7dc] p-6 shadow-md"
            >

              <div className="relative rounded-[25px] overflow-hidden">

                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full"
                />

              </div>

              <h2 className="text-3xl font-serif mt-6">
                {product.name}
              </h2>

              <p className="text-xl mt-4 text-[#667085]">
                {product.price}
              </p>
              <p className="mt-2 text-[#667085]">
  Source: Shopee
</p>
<div className="mt-4 inline-flex rounded-full bg-[#8b6f47]/10 px-4 py-2 text-[#8b6f47] text-sm">
  ★ AI Approved
</div>
              <div className="mt-6 flex items-center justify-between">

                <div>

                  <p className="uppercase tracking-[0.3em] text-[#b08968] text-xs">
                    Trust Score
                  </p>

                  <p className="text-5xl font-bold text-[#8b6f47] mt-2">
                    {product.trust}
                  </p>

                </div>

                <button
                  onClick={() => removeProduct(index)}
                  className="rounded-full border border-[#d6c6b8] px-6 py-3 text-[#667085]"
                >
                  Remove
                </button>

              </div>

            </div>

          ))}

        </div>

      </section>

    </main>
  )
}