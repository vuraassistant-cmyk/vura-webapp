"use client"

import { useState } from "react"
import Image from "next/image"
import Navbar from "../components/Navbar"

export default function ComparePage() {
  const products = [
    {
      name: "Nike Air Max",
      image: "/images/shoe.png",
      price: "₱5,990",
      trust: 92,
      recommendation: "Recommended",
      risk: "8%",
      intelligence: "Good Deal",
    },

    {
      name: "Luxury Tote Bag",
      image: "/images/bag.png",
      price: "₱4,490",
      trust: 84,
      recommendation: "Good Purchase",
      risk: "14%",
      intelligence: "Fair Price",
    },

    {
      name: "Smart Watch Pro",
      image: "/images/watch.png",
      price: "₱8,990",
      trust: 58,
      recommendation: "Risky Seller",
      risk: "37%",
      intelligence: "Overpriced",
    },
  ]

  const [leftProduct, setLeftProduct] =
    useState(products[0])

  const [rightProduct, setRightProduct] =
    useState(products[1])

  const betterProduct =
    leftProduct.trust > rightProduct.trust
      ? leftProduct
      : rightProduct

  return (
    <main className="min-h-screen bg-[#f6f7f2] text-[#111827]">
      <Navbar />

      <section className="px-6 md:px-16 pt-32 pb-20">

        {/* HEADER */}
        <div className="text-center max-w-4xl mx-auto">
          <p className="uppercase tracking-[0.3em] text-[#8a9b6d] text-sm">
            AI Product Comparison
          </p>

          <h1 className="text-5xl md:text-7xl font-serif mt-6 text-[#0f172a]">
            Compare products intelligently.
          </h1>

          <p className="mt-8 text-xl text-[#667085] leading-relaxed">
            VURA compares trust scores, pricing, risks,
            and marketplace intelligence instantly.
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
                ) || products[0]
              )
            }
            className="rounded-full border border-[#d0d5dd] bg-white px-6 py-5 text-lg"
          >
            {products.map((product, index) => (
              <option key={index}>
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
                ) || products[1]
              )
            }
            className="rounded-full border border-[#d0d5dd] bg-white px-6 py-5 text-lg"
          >
            {products.map((product, index) => (
              <option key={index}>
                {product.name}
              </option>
            ))}
          </select>
        </div>

        {/* AI VERDICT */}
        <div className="mt-16 rounded-[40px] bg-[#123524] text-white p-10 text-center">
          <p className="uppercase tracking-[0.3em] text-sm text-emerald-200">
            VURA AI Comparison Verdict
          </p>

          <h2 className="text-5xl font-serif mt-6">
            {betterProduct.name} Wins
          </h2>

          <p className="mt-6 text-xl text-emerald-100 leading-relaxed max-w-3xl mx-auto">
            VURA recommends {betterProduct.name} because it has a
            higher trust score, lower marketplace risk, and stronger
            seller reliability indicators.
          </p>
        </div>

        {/* COMPARISON GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-16">

          {/* LEFT PRODUCT */}
          <div className="rounded-[40px] bg-white p-8 shadow-sm">
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

            <div className="mt-10 rounded-[30px] bg-[#f6f7f2] p-8">
              <p className="uppercase tracking-[0.3em] text-[#8a9b6d] text-sm">
                Trust Score
              </p>

              <h3 className="text-7xl font-bold text-[#123524] mt-4">
                {leftProduct.trust}
              </h3>

              <p className="mt-4 text-xl text-[#667085]">
                {leftProduct.recommendation}
              </p>

              <p className="mt-2 text-[#8a9b6d]">
                Risk: {leftProduct.risk}
              </p>
            </div>

            <div className="mt-8 rounded-[30px] bg-[#123524] text-white p-8">
              <p className="uppercase tracking-[0.3em] text-sm text-emerald-200">
                AI Verdict
              </p>

              <h3 className="text-4xl font-serif mt-4">
                {leftProduct.intelligence}
              </h3>
            </div>
          </div>

          {/* RIGHT PRODUCT */}
          <div className="rounded-[40px] bg-white p-8 shadow-sm">
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

            <div className="mt-10 rounded-[30px] bg-[#f6f7f2] p-8">
              <p className="uppercase tracking-[0.3em] text-[#8a9b6d] text-sm">
                Trust Score
              </p>

              <h3 className="text-7xl font-bold text-[#123524] mt-4">
                {rightProduct.trust}
              </h3>

              <p className="mt-4 text-xl text-[#667085]">
                {rightProduct.recommendation}
              </p>

              <p className="mt-2 text-[#8a9b6d]">
                Risk: {rightProduct.risk}
              </p>
            </div>

            <div className="mt-8 rounded-[30px] bg-[#123524] text-white p-8">
              <p className="uppercase tracking-[0.3em] text-sm text-emerald-200">
                AI Verdict
              </p>

              <h3 className="text-4xl font-serif mt-4">
                {rightProduct.intelligence}
              </h3>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}