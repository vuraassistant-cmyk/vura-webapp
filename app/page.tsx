"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import Navbar from "./components/Navbar"

export default function Home() {
  const [productLink, setProductLink] = useState("")

  const handleAnalyze = () => {
    if (productLink.toLowerCase().includes("watch")) {
      window.location.href = "/analyze?product=watch"
    } else if (productLink.toLowerCase().includes("shoe")) {
      window.location.href = "/analyze?product=shoe"
    } else {
      window.location.href = "/analyze?product=bag"
    }
  }

  return (
    <main className="min-h-screen bg-[#f6f7f2] text-[#111827] overflow-hidden">
      <Navbar />

      {/* HERO SECTION */}
      <section className="px-6 md:px-16 pt-32 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 gap-y-16 items-center"
        >
          {/* LEFT SIDE */}
          <div>
            <div className="inline-flex items-center rounded-full bg-[#eef2e3] px-6 py-3 text-sm tracking-[0.3em] uppercase text-[#8a9b6d]">
              AI Shopping Assistant
            </div>

            <h1 className="text-5xl md:text-7xl font-serif leading-[0.95] mt-8 text-[#0f172a]">
              Shop smarter.
              <br />
              Avoid fake hype.
              <br />
              <span className="italic text-[#8a9b6d]">
                Know before you buy.
              </span>
            </h1>

            <p className="mt-10 text-xl leading-relaxed text-[#667085] max-w-2xl">
              VURA analyzes products and sellers instantly so you can shop with confidence across Shopee, Lazada, TikTok Shop, Zalora, and more.
            </p>

            {/* INPUT */}
            <div className="mt-12 flex flex-col md:flex-row gap-4">
              <input
                type="text"
                placeholder="Type watch, shoe, or bag..."
                value={productLink}
                onChange={(e) => setProductLink(e.target.value)}
                className="flex-1 rounded-full border border-[#d0d5dd] bg-white px-6 py-5 text-lg outline-none"
              />

              <button
                onClick={handleAnalyze}
                className="rounded-full bg-[#123524] px-10 py-5 text-lg font-semibold text-white transition hover:scale-105"
              >
                Analyze Product
              </button>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{
              repeat: Infinity,
              duration: 4,
            }}
            className="relative"
          >
            <div className="absolute inset-0 rounded-[40px] bg-[#dfe8d5] blur-3xl opacity-60" />

            <div className="relative rounded-[40px] bg-white p-6 shadow-2xl">
              <Image
                src="/images/bag.png"
                alt="Luxury Bag"
                width={700}
                height={700}
                className="rounded-[30px] object-cover"
                priority
              />
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* FEATURES */}
      <section className="px-6 md:px-16 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="rounded-3xl bg-white p-8 shadow-sm">
            <h3 className="text-2xl font-semibold">
              AI Trust Score
            </h3>

            <p className="mt-4 text-[#667085] text-lg">
              Analyze seller credibility and fake review patterns instantly.
            </p>
          </div>

          <div className="rounded-3xl bg-white p-8 shadow-sm">
            <h3 className="text-2xl font-semibold">
              Marketplace Comparison
            </h3>

            <p className="mt-4 text-[#667085] text-lg">
              Compare prices across Shopee, Lazada, TikTok Shop, and more.
            </p>
          </div>

          <div className="rounded-3xl bg-white p-8 shadow-sm">
            <h3 className="text-2xl font-semibold">
              AI Closet
            </h3>

            <p className="mt-4 text-[#667085] text-lg">
              Save your favorite products and organize smarter shopping decisions.
            </p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="mt-32 bg-gradient-to-r from-[#022c22] to-[#064e3b] text-white rounded-t-[50px] px-8 md:px-16 py-20">

  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">

    {/* BRAND */}
    <div>
      <h2 className="text-6xl font-serif">
        vura♡
      </h2>

      <p className="mt-8 text-emerald-100 text-xl leading-relaxed">
        AI-powered shopping intelligence
        for smarter online purchases.
      </p>

      <div className="mt-10">
        <button className="rounded-full bg-white text-[#123524] px-8 py-4 font-semibold hover:scale-105 transition">
          Join Waitlist
        </button>
      </div>
    </div>

    {/* PRODUCT */}
    <div>
      <h3 className="text-3xl font-semibold">
        Product
      </h3>

      <div className="mt-8 space-y-5 text-emerald-100 text-lg">
        <p>AI Trust Score</p>
        <p>Fake Review Detection</p>
        <p>Price Comparison</p>
        <p>AI Closet</p>
        <p>Compare Products</p>
        <p>AI Fitting (Beta)</p>
      </div>
    </div>

    {/* COMPANY */}
    <div>
      <h3 className="text-3xl font-semibold">
        Company
      </h3>

      <div className="mt-8 space-y-5 text-emerald-100 text-lg">
        <p>About VURA</p>
        <p>Privacy Policy</p>
        <p>Terms of Service</p>
        <p>Contact</p>
        <p>Careers</p>
      </div>
    </div>

    {/* GET STARTED */}
    <div>
      <h3 className="text-3xl font-semibold">
        Get Started
      </h3>

      <p className="mt-8 text-emerald-100 text-xl leading-relaxed">
        Start shopping smarter with AI-powered
        marketplace intelligence.
      </p>

      <div className="mt-10 space-y-4">

        <button className="w-full rounded-full bg-white text-[#123524] px-8 py-4 font-semibold hover:scale-105 transition">
          Try VURA Beta
        </button>

        <button className="w-full rounded-full border border-emerald-300 text-white px-8 py-4 font-semibold hover:bg-white hover:text-[#123524] transition">
          Shopee Affiliate
        </button>

        <button className="w-full rounded-full border border-emerald-300 text-white px-8 py-4 font-semibold hover:bg-white hover:text-[#123524] transition">
          Lazada Affiliate
        </button>

      </div>
    </div>
  </div>

  {/* BOTTOM */}
  <div className="mt-20 border-t border-emerald-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-6">

    <p className="text-emerald-100">
      © 2026 VURA AI. All rights reserved.
    </p>

    <div className="flex items-center gap-8 text-emerald-100">
  <p>Facebook</p>
  <p>Instagram</p>
  <p>Twitter</p>
  <p>TikTok</p>
  <p>LinkedIn</p>
</div>
  </div>
</footer>
    </main>
  )
}