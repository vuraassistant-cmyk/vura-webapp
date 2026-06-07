"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import Navbar from "./components/Navbar"
import { FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa"
export default function Home() {
  const [productLink, setProductLink] = useState("")

  const handleAnalyze = () => {

  const input =
    productLink.toLowerCase()

  // ELECTRONICS
  if (
    input.includes("electronics") ||
    input.includes("iphone") ||
    input.includes("samsung") ||
    input.includes("laptop") ||
    input.includes("camera") ||
    input.includes("headphone")
  ) {

    window.location.href =
  "/analyze?product=electronics"

  }

  // FASHION
  else if (
    input.includes("shoe") ||
input.includes("nike") ||
input.includes("shirt") ||
input.includes("fashion") ||
input.includes("dress") ||
input.includes("heels") ||
input.includes("clothes") ||
input.includes("outfit")
  ) {

    window.location.href =
      "/analyze?product=shoe"

  }

  // HOME / APPLIANCE
  else if (
    input.includes("home") ||
    input.includes("chair") ||
    input.includes("table") ||
    input.includes("air fryer") ||
    input.includes("appliance")
  ) {

    window.location.href =
    "/analyze?product=home"

    }
// BABY
else if (
  input.includes("baby") ||
  input.includes("diaper") ||
  input.includes("milk") ||
  input.includes("stroller") ||
  input.includes("formula")
) {

  window.location.href =
    "/analyze?product=baby"

}
// BEAUTY
else if (
  input.includes("beauty") ||
  input.includes("skincare") ||
  input.includes("makeup") ||
  input.includes("lipstick")
) {

  window.location.href =
    "/analyze?product=beauty"

}
// GAMING
else if (
  input.includes("gaming") ||
  input.includes("pc") ||
  input.includes("keyboard") ||
  input.includes("mouse") ||
  input.includes("headset")
) {

  window.location.href =
    "/analyze?product=gaming"

}
// BAGS
else if (
  input.includes("bag") ||
  input.includes("tote") ||
  input.includes("handbag")
) {
  window.location.href =
    "/analyze?product=bag"
}
  // DEFAULT
  else {

    window.location.href =
      "/analyze?product=shoe"

  }
}

return (
    <main className="min-h-screen bg-[#efe7dc] text-[#2b2b2b] overflow-hidden">
      <div className="bg-[#8b6f47] text-white text-center py-3 text-sm font-medium">
      🚀 VURA Beta launches June 8. Join the waitlist today.
    </div>
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
            <div className="inline-flex items-center rounded-full bg-[#eef2e3] px-6 py-3 text-sm tracking-[0.3em] uppercase text-[#b08968]">
              AI Shopping Assistant
            </div>
<h1 className="text-6xl font-serif text-[#0f172a] leading-tight">
  Shop Smarter.
  <br />
  Avoid Risky Purchases.
</h1>
            
            

            <p className="mt-10 text-xl leading-relaxed text-[#667085] max-w-2xl">
  VURA analyzes trust signals, seller credibility,
  pricing, and marketplace risk before you buy.
</p>

            {/* INPUT */}
            <div className="mt-12 flex flex-col md:flex-row gap-4">
              <input
                type="text"
                placeholder="Paste a marketplace product link..."
                value={productLink}
                onChange={(e) => setProductLink(e.target.value)}
                className="flex-1 rounded-full border border-[#d0d5dd] bg-[#efe7dc] px-6 py-5 text-lg outline-none"
              />

              <button
                onClick={handleAnalyze}
                className="rounded-full bg-[#8b6f47] px-10 py-5 text-lg font-semibold text-white transition hover:scale-105"
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

            <div className="relative rounded-[40px] bg-[#efe7dc] p-6 shadow-2xl">
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

{/* HOW IT WORKS */}
<section className="mt-32 px-6 md:px-16">
  <p className="uppercase tracking-[0.3em] text-[#b08968] text-sm">
    How It Works
  </p>

  <h2 className="mt-4 text-5xl font-serif text-[#0f172a]">
    AI-powered shopping in 3 steps
  </h2>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">

    <div className="rounded-[35px] bg-white p-8 shadow-md">
      <h3 className="text-3xl font-serif">
        Analyze
      </h3>
      <p className="mt-4 text-[#667085]">
        Paste a product link or choose a product.
      </p>
    </div>

    <div className="rounded-[35px] bg-white p-8 shadow-md">
      <h3 className="text-3xl font-serif">
        AI Review
      </h3>
      <p className="mt-4 text-[#667085]">
        VURA checks reviews, pricing, trust signals,
        and marketplace reliability.
      </p>
    </div>

    <div className="rounded-[35px] bg-white p-8 shadow-md">
      <h3 className="text-3xl font-serif">
        Buy With Confidence
      </h3>
      <p className="mt-4 text-[#667085]">
        Receive a trust score and safer alternatives.
      </p>
    </div>

  </div>
</section>


<section className="px-6 md:px-16 pt-16 pb-12">
  <div className="max-w-6xl mx-auto">

    <h2 className="text-5xl font-serif text-center text-[#2b2b2b]">
      Why VURA?
    </h2>

    <p className="text-center text-[#667085] mt-6 text-lg">
      Marketplace intelligence designed to help you buy with confidence.
    </p>

    <div className="grid md:grid-cols-3 gap-8 mt-16">

      <div className="bg-white rounded-3xl p-8 shadow-sm">
        <h3 className="text-2xl font-semibold text-[#2b2b2b]">
          AI Trust Score
        </h3>

        <p className="mt-4 text-[#667085]">
          Know if a product is genuinely trusted before you spend your money.
        </p>
      </div>

      <div className="bg-white rounded-3xl p-8 shadow-sm">
        <h3 className="text-2xl font-semibold text-[#2b2b2b]">
          Fake Review Detection
        </h3>

        <p className="mt-4 text-[#667085]">
          Spot suspicious review patterns and avoid misleading products.
        </p>
      </div>

      <div className="bg-white rounded-3xl p-8 shadow-sm">
        <h3 className="text-2xl font-semibold text-[#2b2b2b]">
          Price Intelligence
        </h3>

        <p className="mt-4 text-[#667085]">
          Understand pricing and compare value across marketplaces.
        </p>
      </div>

    </div>

  </div>
</section>
    
<section className="px-6 md:px-16 py-20">
  <p className="uppercase tracking-[0.3em] text-[#b08968] text-sm">
    Supported Platforms
  </p>

  <h2 className="mt-4 text-5xl font-serif text-[#0f172a]">
    Analyze products across major marketplaces
  </h2>

  <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
    
    <div className="bg-white rounded-3xl p-8 text-center shadow-sm">
      <p className="text-2xl font-semibold text-[#0f172a]">
        Shopee
      </p>
    </div>

    <div className="bg-white rounded-3xl p-8 text-center shadow-sm">
      <p className="text-2xl font-semibold text-[#0f172a]">
        Lazada
      </p>
    </div>

    <div className="bg-white rounded-3xl p-8 text-center shadow-sm">
      <p className="text-2xl font-semibold text-[#0f172a]">
        TikTok Shop
      </p>
    </div>

    <div className="bg-white rounded-3xl p-8 text-center shadow-sm">
      <p className="text-2xl font-semibold text-[#0f172a]">
        Zalora
      </p>
    </div>

  </div>
</section>
<section className="px-6 md:px-16 py-24">
  <p className="uppercase tracking-[0.3em] text-[#b08968] text-sm text-center">
    MARKETPLACE COVERAGE
  </p>

  <h2 className="mt-4 text-5xl font-serif text-center text-[#0f172a]">
    Trusted Across Major Marketplaces
  </h2>

  <p className="mt-6 text-center text-xl text-[#667085] max-w-3xl mx-auto">
    Analyze products from thousands of brands and sellers across leading online marketplaces.
  </p>

  <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
    <div className="bg-white rounded-[30px] p-8 text-center shadow-md">
      <h3 className="text-4xl font-bold text-[#8b6f47]">4</h3>
      <p className="mt-2 text-[#667085]">Marketplaces</p>
    </div>

    <div className="bg-white rounded-[30px] p-8 text-center shadow-md">
      <h3 className="text-4xl font-bold text-[#8b6f47]">50,000+</h3>
      <p className="mt-2 text-[#667085]">Sellers & Stores</p>
    </div>

    <div className="bg-white rounded-[30px] p-8 text-center shadow-md">
      <h3 className="text-4xl font-bold text-[#8b6f47]">100,000+</h3>
      <p className="mt-2 text-[#667085]">Brands</p>
    </div>

    <div className="bg-white rounded-[30px] p-8 text-center shadow-md">
      <h3 className="text-4xl font-bold text-[#8b6f47]">Millions+</h3>
      <p className="mt-2 text-[#667085]">Products</p>
    </div>
  </div>
</section>
{/* FAQ */}

<section className="px-6 md:px-16 py-24">

  <p className="uppercase tracking-[0.3em] text-[#b08968] text-sm text-center">
    FAQ
  </p>

  <h2 className="mt-4 text-5xl font-serif text-center text-[#0f172a]">
    Frequently Asked Questions
  </h2>

  <div className="mt-16 max-w-4xl mx-auto space-y-6">

    <div className="bg-white rounded-[30px] p-8 shadow-md">
      <h3 className="text-2xl font-serif">
        What is VURA?
      </h3>
      <p className="mt-3 text-[#667085]">
        VURA is an AI-powered shopping intelligence platform that helps
        shoppers make smarter purchasing decisions before buying online.
      </p>
    </div>

    <div className="bg-white rounded-[30px] p-8 shadow-md">
      <h3 className="text-2xl font-serif">
        Which marketplaces are supported?
      </h3>
      <p className="mt-3 text-[#667085]">
        VURA currently supports Shopee, Lazada, TikTok Shop, and Zalora.
      </p>
    </div>

    <div className="bg-white rounded-[30px] p-8 shadow-md">
      <h3 className="text-2xl font-serif">
        Is VURA free?
      </h3>
      <p className="mt-3 text-[#667085]">
        Yes. The beta version of VURA is completely free to use.
      </p>
    </div>

    <div className="bg-white rounded-[30px] p-8 shadow-md">
      <h3 className="text-2xl font-serif">
        When will VURA launch?
      </h3>
      <p className="mt-3 text-[#667085]">
        VURA Beta launches on June 8, 2026.
      </p>
    </div>

  </div>

</section>

      {/* FOOTER */}
      <footer className="mt-32 bg-gradient-to-r from-[#8b6f47] to-[#b08968] text-white rounded-t-[50px] px-8 md:px-16 py-20">

  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">

    {/* BRAND */}
    <div>
      <h2 className="text-6xl font-serif">
        vura♡
      </h2>

      <p className="mt-8 text-[#8b6f47]-100 text-xl leading-relaxed">
        AI-powered shopping intelligence
        for smarter online purchases.
      </p>

      <div className="mt-10">
        <Link
  href="/waitlist"
  className="inline-block rounded-full bg-[#fef7dc] text-[#8b6f47] px-8 py-4"
>
  Try VURA Beta
</Link>
      </div>
    </div>

    {/* PRODUCT */}
    <div>
      <h3 className="text-3xl font-semibold">
        Product
      </h3>

      <div className="mt-8 space-y-5 text-white text-lg">
        <p>AI Trust Score</p>
        <p>Marketplace Intelligence</p>
        <p>Price Comparison</p>
        <p>Fake Review Detection</p>
        <p>Price Intelligence</p>
        
      </div>
    </div>

    {/* COMPANY */}
    <div>
      <h3 className="text-3xl font-semibold">
        Company
      </h3>

      <div className="mt-8 flex flex-col gap-5 text-white text-lg">
        <Link href="/about">About VURA</Link>

<Link href="/privacy">Privacy Policy</Link>

<Link href="/terms">Terms of Service</Link>

<Link href="/contact">Contact</Link>
      </div>
    </div>

    {/* GET STARTED */}
    <div>
      <h3 className="text-3xl font-semibold">
        Get Started
      </h3>

      <p className="mt-8 text-white text-xl leading-relaxed">
        Start shopping smarter with AI-powered
        marketplace intelligence.
      </p>

      <div className="mt-10 space-y-4">

        <p className="mt-8 text-[#efe7dc] text-sm uppercase tracking-[0.2em]">
  EARLY ACCESS AVAILABLE
</p>


      </div>
    </div>
  </div>

  {/* BOTTOM */}
  <div className="mt-20 border-t border-white-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-6">

    <p className="text-white">
      © 2026 VURA AI. All rights reserved.
    </p>

    <div className="flex items-center gap-8 text-2xl">

  <a
    href="https://facebook.com/YOURPAGE"
    target="_blank"
    rel="noopener noreferrer"
    className="hover:opacity-80"
  >
    <FaFacebookF />
  </a>

  <a
    href="https://instagram.com/YOURUSERNAME"
    target="_blank"
    rel="noopener noreferrer"
    className="hover:opacity-80"
  >
    <FaInstagram />
  </a>

  <a
    href="https://tiktok.com/@YOURUSERNAME"
    target="_blank"
    rel="noopener noreferrer"
    className="hover:opacity-80"
  >
    <FaTiktok />
  </a>

</div>
  </div>
</footer>
    </main>
  )
}