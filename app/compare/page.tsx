"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Navbar from "../components/Navbar"

export default function ComparePage() {


  const [products, setProducts] = useState<any[]>([])

const [leftProduct, setLeftProduct] =
  useState<any>(null)

const [rightProduct, setRightProduct] =
  useState<any>(null)
useEffect(() => {
  const saved =
    JSON.parse(localStorage.getItem("vura-closet") || "[]")

  setProducts(saved)

  if (saved.length > 0) {
    setLeftProduct(saved[0])
  }

  if (saved.length > 1) {
    setRightProduct(saved[1])
  }
}, [])
if (!leftProduct || !rightProduct) {
  return (
    <main className="min-h-screen bg-[#efe7dc]">
      <Navbar />

      <section className="px-6 md:px-16 pt-32">
        <div className="rounded-[40px] bg-white p-12 text-center">
          <h2 className="text-4xl font-serif">
            Save at least 2 products first
          </h2>

          <p className="mt-4 text-[#667085]">
            Add products to your AI Closet before using Compare.
          </p>
        </div>
      </section>
    </main>
  )
}
  const betterProduct =
    leftProduct.trust > rightProduct.trust
      ? leftProduct
      : rightProduct 
      
const sameProduct =
  leftProduct?.name === rightProduct?.name
  return (
    <main className="min-h-screen bg-[#efe7dc] text-[#2b2b2b]">
      <Navbar />

      <section className="px-6 md:px-16 pt-32 pb-20">

        {/* HERO */}

<div className="max-w-4xl mx-auto text-center">

  <p className="text-[15px] font-semibold uppercase tracking-[0.45em] text-[#b08968]">
    AI COMPARE
  </p>

  <div className="mt-4 h-[3px] w-24 rounded-full bg-[#b08968] mx-auto" />

  <h1 className="text-6xl md:text-7xl font-serif mt-8 text-[#0f172a]">
    Compare Products Like An Expert
  </h1>

  <p className="mt-8 text-xl text-[#667085] max-w-3xl mx-auto leading-relaxed">
    Let VURA analyze trust signals, marketplace risks,
    pricing opportunities, coupons, and value before
    you make a purchase.
  </p>

</div>

        {/* SELECTORS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16">

          {/* LEFT SELECT */}
          <select
            onChange={(e) =>
  setLeftProduct(
    products.find(
      (p) => p.name === e.target.value
    )
  )
}
            className="rounded-full border border-[#d0d5dd] bg-[#efe7dc] px-6 py-5 text-lg"
          >
            {products.map((product, index) => (
              <option
  key={index}
  value={product.name}
>
  {product.name}
</option>
            ))}
          </select>

          {/* RIGHT SELECT */}
          <select
            onChange={(e) =>
  setRightProduct(
    products.find(
      (p) => p.name === e.target.value
    )
  )
}
            className="rounded-full border border-[#d0d5dd] bg-[#efe7dc] px-6 py-5 text-lg"
          >
            {products.map((product, index) => (
              <option key={index}>
                {product.name}
              </option>
            ))}
          </select>
        </div>
{sameProduct && (
  <div className="mt-12 rounded-[30px] bg-white p-8 text-center shadow-sm">
    <h3 className="text-2xl font-serif text-[#0f172a]">
      Select Two Different Products
    </h3>

    <p className="mt-4 text-[#667085]">
      VURA needs two unique products to generate a comparison.
    </p>
  </div>
)}
        {/* AI VERDICT */}
        <div className="mt-16 rounded-[40px] bg-[#8b6f47] text-white p-10 text-center">
          <p className="uppercase tracking-[0.3em] text-sm text-white-200">
            VURA AI Comparison Verdict
          </p>

          <h2 className="text-5xl font-serif mt-6">
  {sameProduct
    ? "Select Different Products"
    : `${betterProduct.name} Wins`}
</h2>

          <p className="mt-6 text-xl text-white leading-relaxed max-w-3xl mx-auto">
            {sameProduct
  ? "Choose two different products to generate an AI comparison."
  : `VURA recommends ${betterProduct.name} because it has a higher trust score, lower marketplace risk, and stronger seller reliability indicators.`}
          </p>
        </div>

        {/* COMPARISON GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-16">

          {/* LEFT PRODUCT */}
          <div className="rounded-[40px] bg-[#efe7dc] p-8 shadow-md">
            <div className="relative rounded-[30px] overflow-hidden">
              <Image
                src={leftProduct.image}
                alt={leftProduct.name}
                width={800}
                height={800}
                className="object-cover"
              />
            </div>

            <h2 className="text-5xl font-serif mt-8 text-[#0f172a]">
              {leftProduct.name}
            </h2>

            <p className="mt-4 text-3xl text-[#667085]">
              {leftProduct.price}
            </p>

            <div className="mt-10 rounded-[30px] bg-[#efe7dc] p-8">
              <p className="uppercase tracking-[0.3em] text-[#b08968] text-sm">
                Trust Score
              </p>

              <h3 className="text-7xl font-bold text-[#8b6f47] mt-4">
                {leftProduct.trust}
              </h3>

              <p className="mt-4 text-xl text-[#667085]">
                {leftProduct.recommendation}
              </p>

              <p className="mt-2 text-[#b08968]">
                Risk: {leftProduct.risk}
              </p>
            </div>

            <div className="mt-8 rounded-[30px] bg-[#8b6f47] text-white p-8">
              <p className="uppercase tracking-[0.3em] text-sm text-white-200">
                AI Verdict
              </p>

              <h3 className="text-4xl font-serif mt-4">
                {leftProduct.intelligence}
              </h3>
            </div>
          </div>

          {/* RIGHT PRODUCT */}
          <div className="rounded-[40px] bg-[#efe7dc] p-8 shadow-md">
            <div className="relative rounded-[30px] overflow-hidden">
              <Image
                src={rightProduct.image}
                alt={rightProduct.name}
                width={800}
                height={800}
                className="object-cover"
              />
            </div>

            <h2 className="text-5xl font-serif mt-8 text-[#0f172a]">
              {rightProduct.name}
            </h2>

            <p className="mt-4 text-3xl text-[#667085]">
              {rightProduct.price}
            </p>

            <div className="mt-10 rounded-[30px] bg-[#f6f1eb] p-8">
              <p className="uppercase tracking-[0.3em] text-[#b08968] text-sm">
                Trust Score
              </p>

              <h3 className="text-7xl font-bold text-[#8b6f47] mt-4">
                {rightProduct.trust}
              </h3>

              <p className="mt-4 text-xl text-[#667085]">
                {rightProduct.recommendation}
              </p>

              <p className="mt-2 text-[#b08968]">
                Risk: {rightProduct.risk}
              </p>
            </div>

            <div className="mt-8 rounded-[30px] bg-[#8b6f47] text-white p-8">
              <p className="uppercase tracking-[0.3em] text-sm text-white-200">
                AI Verdict
              </p>

              <h3 className="text-4xl font-serif mt-4">
                {rightProduct.intelligence}
              </h3>
            </div>
          </div>
        </div>
      </section>
      <div className="mt-12 rounded-[30px] bg-white p-8 shadow-sm">
  <p className="uppercase tracking-[0.3em] text-[#b08968] text-sm">
    Why VURA Chose This
  </p>

  <div className="mt-6 space-y-4 text-lg text-[#667085]">

    <p>✓ Higher trust score</p>

    <p>✓ Better seller reputation</p>

    <p>✓ Lower marketplace risk</p>

    <p>✓ Stronger value for money</p>

    <p>✓ Better long-term purchase confidence</p>

  </div>


  


</div>
<div className="mt-10 rounded-[30px] bg-white p-8 shadow-sm">

  <p className="uppercase tracking-[0.3em] text-[#b08968] text-sm">
    AI Confidence
  </p>

  <h3 className="mt-4 text-6xl font-bold text-[#8b6f47]">
    {betterProduct.trust}%
  </h3>

  <p className="mt-4 text-[#667085]">
    VURA is highly confident that this is the safer purchase.
  </p>

</div>
<div className="mt-8 rounded-[35px] bg-white p-8 shadow-sm">
  <p className="uppercase tracking-[0.3em] text-[#b08968] text-sm">
    Coupon Intelligence
  </p>

  <h3 className="text-4xl font-serif mt-4">
    Save up to ₱500
  </h3>

  <p className="mt-4 text-[#667085]">
    VURA detected available marketplace discounts
    and voucher opportunities for this product.
  </p>
</div>
<div className="mt-8 rounded-[35px] bg-white p-8 shadow-sm">
  <p className="uppercase tracking-[0.3em] text-[#b08968] text-sm">
    Best Marketplace
  </p>

  <h3 className="text-4xl font-serif mt-4">
    🏆 Lazada Official Store
  </h3>

  <p className="mt-4 text-[#667085]">
    Highest trust score and best price detected.
  </p>
</div>
<div className="mt-16 rounded-[35px] bg-white p-8 shadow-sm">

  <p className="uppercase tracking-[0.3em] text-[#b08968] text-sm">
    Recent Comparisons
  </p>

  <div className="mt-8 space-y-6">

    <div>
      <h4 className="text-xl">
        Nike Air Max vs Luxury Tote Bag
      </h4>
      <p className="text-[#667085]">
        Nike Air Max won
      </p>
    </div>

    <div>
      <h4 className="text-xl">
        AirPods Max vs Sony WH-1000XM5
      </h4>
      <p className="text-[#667085]">
        Sony WH-1000XM5 won
      </p>
    </div>

  </div>

</div>
    </main>
  )
}