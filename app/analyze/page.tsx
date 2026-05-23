"use client"

import { useSearchParams } from "next/navigation"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import Navbar from "../components/Navbar"
import { Suspense } from "react"
export default function AnalyzePage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <AnalyzeContent />
    </Suspense>
  )
}function AnalyzeContent() {
  const searchParams = useSearchParams()

  const product = searchParams.get("product")

  const productData = {
    shoe: {
      name: "Nike Air Max",
      image: "/images/shoe.png",
      price: "₱5,990",
      trust: 92,
      recommendation: "Recommended",
      risk: "8%",
      intelligence: "Good Deal",

      pros: [
        "Seller has excellent fulfillment history",
        "Reviews appear authentic and consistent",
        "Product pricing is below marketplace average",
      ],

      risks: [
        "Limited warranty information provided",
        "Price may fluctuate during major sales",
      ],

      summary:
        "This product shows strong trust indicators and healthy review authenticity. Pricing is competitive and seller credibility is excellent.",
    },

    bag: {
      name: "Luxury Tote Bag",
      image: "/images/bag.png",
      price: "₱4,490",
      trust: 84,
      recommendation: "Good Purchase",
      risk: "14%",
      intelligence: "Fair Price",

      pros: [
        "Luxury pricing is competitive",
        "Strong positive buyer feedback",
        "Reliable seller shipping performance",
      ],

      risks: [
        "Limited stock availability",
        "Return process may take longer than average",
      ],

      summary:
        "This listing appears reliable with balanced pricing and positive customer trust signals.",
    },

    watch: {
      name: "Smart Watch Pro",
      image: "/images/watch.png",
      price: "₱8,990",
      trust: 58,
      recommendation: "Risky Seller",
      risk: "37%",
      intelligence: "Overpriced",

      pros: [
        "Product visuals appear authentic",
        "Seller activity is consistent",
      ],

      risks: [
        "High suspicious review activity detected",
        "Price is significantly above market average",
        "Seller reliability score is unstable",
      ],

      summary:
        "Caution advised due to suspicious review behavior and pricing inconsistencies.",
    },
  }

  const currentProduct =
    productData[product as keyof typeof productData] ||
    productData.bag

  return (
    <main className="min-h-screen bg-[#f6f7f2] text-[#111827]">
      <Navbar />

      <section className="px-6 md:px-16 pt-32 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="uppercase tracking-[0.3em] text-[#8a9b6d] text-sm">
              AI Product Analysis
            </p>

            <h1 className="text-5xl md:text-7xl font-serif mt-6 text-[#0f172a] leading-tight">
              {currentProduct.name}
            </h1>

            <p className="mt-6 text-3xl text-[#667085]">
              {currentProduct.price}
            </p>

            {/* TRUST SCORE */}
            <div className="mt-14 rounded-[40px] bg-white p-10 shadow-lg">
              <p className="uppercase tracking-[0.3em] text-[#8a9b6d] text-sm">
                VURA Trust Score
              </p>

              <div className="mt-8 text-center">
                <h2 className="text-7xl font-bold text-[#123524]">
                  {currentProduct.trust}
                </h2>

                <p className="mt-4 text-2xl text-[#667085]">
                  {currentProduct.recommendation}
                </p>

                <p className="mt-2 text-[#8a9b6d]">
                  Risk Level: {currentProduct.risk}
                </p>
              </div>
            </div>

            {/* INTELLIGENCE */}
            <div className="mt-10 rounded-[40px] bg-[#123524] text-white p-10">
              <p className="uppercase tracking-[0.3em] text-sm text-emerald-200">
                Final AI Recommendation
              </p>

              <h2 className="text-5xl font-serif mt-6">
                {currentProduct.intelligence}
              </h2>

              <p className="mt-6 text-lg text-emerald-100 leading-relaxed">
                {currentProduct.summary}
              </p>
            </div>
          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute inset-0 rounded-[40px] bg-[#dfe8d5] blur-3xl opacity-60" />

            <div className="relative rounded-[40px] bg-white p-8 shadow-2xl">
              <Image
                src={currentProduct.image}
                alt={currentProduct.name}
                width={800}
                height={800}
                className="rounded-[30px] object-cover"
                priority
              />
            </div>
          </motion.div>
        </div>

        {/* PROS & RISKS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-20">

          {/* PROS */}
          <div className="rounded-[40px] bg-white p-10 shadow-sm">
            <p className="uppercase tracking-[0.3em] text-[#8a9b6d] text-sm">
              Positive Indicators
            </p>

            <div className="mt-8 space-y-5">
              {currentProduct.pros.map((pro, index) => (
                <div
                  key={index}
                  className="rounded-2xl bg-[#f6f7f2] p-5"
                >
                  <p className="text-lg text-[#123524]">
                    ✓ {pro}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* RISKS */}
          <div className="rounded-[40px] bg-white p-10 shadow-sm">
            <p className="uppercase tracking-[0.3em] text-[#8a9b6d] text-sm">
              Risk Signals
            </p>

            <div className="mt-8 space-y-5">
              {currentProduct.risks.map((risk, index) => (
                <div
                  key={index}
                  className="rounded-2xl bg-[#fff4f4] p-5"
                >
                  <p className="text-lg text-[#7a1f1f]">
                    ⚠ {risk}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* BUTTONS */}
{/* SMART MARKETPLACE COMPARISON */}
<div className="mt-16 rounded-[40px] bg-white p-8 shadow-sm">

  <div className="flex items-center justify-between flex-wrap gap-4">
    <div>
      <p className="uppercase tracking-[0.3em] text-[#8a9b6d] text-sm">
        Marketplace Intelligence
      </p>

      <h2 className="text-4xl font-serif mt-4 text-[#0f172a]">
        Best platforms to purchase from
      </h2>
    </div>

    <div className="rounded-full bg-[#123524] px-6 py-3 text-white font-semibold">
      AI Ranked
    </div>
  </div>

  <div className="mt-10 overflow-x-auto">
    <table className="w-full min-w-[900px]">

      <thead>
        <tr className="border-b border-[#e5e7eb] text-left">
          <th className="pb-6">Platform</th>
          <th className="pb-6">Price</th>
          <th className="pb-6">Trust</th>
          <th className="pb-6">Risk</th>
          <th className="pb-6">Verdict</th>
          <th className="pb-6">Checkout</th>
        </tr>
      </thead>

      <tbody>

        <tr className="border-b border-[#f2f4f7]">
          <td className="py-6 font-semibold">Shopee</td>
          <td className="py-6">₱5,200</td>
          <td className="py-6 font-bold text-[#123524]">91</td>
          <td className="py-6 text-[#8a9b6d]">Low</td>
          <td className="py-6">Best Value</td>
          <td className="py-6">
            <a
              href="https://shopee.ph"
              target="_blank"
              className="rounded-full bg-[#123524] px-5 py-3 text-white"
            >
              Checkout
            </a>
          </td>
        </tr>

        <tr className="border-b border-[#f2f4f7]">
          <td className="py-6 font-semibold">Lazada</td>
          <td className="py-6">₱5,450</td>
          <td className="py-6 font-bold text-[#123524]">94</td>
          <td className="py-6 text-[#8a9b6d]">Very Low</td>
          <td className="py-6">Safest</td>
          <td className="py-6">
            <a
              href="https://www.lazada.com.ph"
              target="_blank"
              className="rounded-full bg-[#123524] px-5 py-3 text-white"
            >
              Checkout
            </a>
          </td>
        </tr>

        <tr className="border-b border-[#f2f4f7]">
          <td className="py-6 font-semibold">TikTok Shop</td>
          <td className="py-6">₱4,990</td>
          <td className="py-6 font-bold text-red-500">54</td>
          <td className="py-6 text-red-500">High</td>
          <td className="py-6">Risky Seller</td>
          <td className="py-6">
            <a
              href="https://www.tiktok.com"
              target="_blank"
              className="rounded-full bg-red-500 px-5 py-3 text-white"
            >
              Checkout
            </a>
          </td>
        </tr>

      </tbody>
    </table>
  </div>
</div>
      </section>
    </main>
  )
}