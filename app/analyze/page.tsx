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
} function AnalyzeContent() {
  const searchParams = useSearchParams()
  const product = searchParams.get("product")


  const productData = {

    electronics: {
      name: "Apple AirPods Max",
      image: "/images/headphones.png",
      category: "Electronics",
      price: "₱12,990",
sourceMarketplace: "Shopee",
      trust: 91,
      recommendation:
        "Strong seller reputation, authentic review signals, and competitive marketplace pricing.",
      risk: "Low",
      intelligence: "★ Safe To Buy",

      pros: [
        "Strong verified reviews",
        "Trusted seller ratings",
        "Competitive marketplace pricing",
      ],

      risks: [
        "Possible delayed shipping",
        "Limited stock availability",
      ],

      marketplaces: [
        "Shopee",
        "Lazada",
        "TikTok Shop",
        "Zalora"
      ],
    },

    fashion: {
      name: "Nike Air Max 270",
      image: "/images/shoe.png",
      category: "Fashion",
      price: "₱4,990",
       sourceMarketplace: "Zalora",
      trust: 89,
      recommendation:
        "Popular lifestyle sneaker with high buyer satisfaction",
      risk: "Low",
      intelligence: "Strong review authenticity",
      pros: [
        "Popular fashion seller",
        "High customer engagement",
        "Authentic product photos",
      ],

      risks: [
        "Sizes may vary",
        "Limited stock availability",
      ],

      marketplaces: [
        "Shopee",
        "Lazada",
        "TikTok Shop",
        "Zalora"
      ],
    },

    home: {
      name: "Philips Air Fryer XL",
      image: "/images/watch.png",
      category: "Home & Appliances",
      price: "₱7,990",
      sourceMarketplace: "Shopee",
      trust: 87,
      recommendation:
        "Reliable home appliance with strong customer satisfaction and competitive marketplace pricing",
      risk: "Low",
      intelligence: "Good warranty and fulfillment",
      pros: [
        "Reliable appliance seller",
        "Strong warranty support",
        "Competitive home pricing",
      ],

      risks: [
        "Bulky item shipping delays",
        "Limited regional availability",
      ],

      marketplaces: [
        "Shopee",
        "Lazada",
        "TikTok Shop",
        "Zalora"
      ],
    },

    baby: {
      name: "Pampers Premium Care",
      image: "/images/bag.png",
      category: "Baby Products",
      price: "₱1,290",
      sourceMarketplace: "Lazada",
      trust: 95,
      recommendation:
        "Highly trusted baby essential with strong parent reviews",
      risk: "Very Low",
      intelligence: "Highly trusted by parents",
      pros: [
        "Highly trusted by parents",
        "Safe baby marketplace ratings",
        "Strong customer reviews",
      ],

      risks: [
        "Packaging may vary",
      ],

      marketplaces: [
        "Shopee",
        "Lazada",
        "TikTok Shop",
        "Zalora"
      ],
    },

    beauty: {
      name: "Rare Beauty Soft Pinch Blush",
      image: "/images/bag.png",
      category: "Beauty & Skincare",
      price: "₱990",
      sourceMarketplace: "Zalora",
      trust: 84,
      recommendation:
        "Trending beauty item with verified positive feedback",
      risk: "Moderate",
      intelligence: "Check ingredient authenticity",
      pros: [
        "Trending beauty product",
        "Strong skincare reviews",
        "Trusted beauty seller",
      ],

      risks: [
        "Check ingredient authenticity",
      ],

      marketplaces: [
        "Shopee",
        "Lazada",
        "TikTok Shop",
        "Zalora"
      ],
    },

    gaming: {
      name: "Logitech G Pro X Superlight",
      image: "/images/headphones.png",
      category: "Gaming",
      price: "₱5,490",
       sourceMarketplace: "Shopee",
      trust: 88,
      recommendation:
        "Top-rated gaming accessory with reliable performance",
      risk: "Low",
      intelligence: "Reliable gaming seller",
      pros: [
        "Reliable gaming seller",
        "Popular among gamers",
        "Competitive pricing",
      ],

      risks: [
        "Limited stock during sales",
      ],

      marketplaces: [
        "Shopee",
        "Lazada",
        "TikTok Shop",
        "Zalora"
      ],
    },

    bags: {
      name: "Luxury Leather Tote Bag",
      image: "/images/bag.png",
      category: "Fashion Bags",
      price: "₱4,490",
      sourceMarketplace: "Zalora",
      trust: 84,

      recommendation:
        "Elegant tote bag with strong marketplace popularity",

      risk: "Low",

      intelligence:
        "Verified fashion seller with authentic reviews",

      pros: [
        "Minimalist luxury design",
        "Strong customer satisfaction",
        "Popular fashion choice",
      ],

      risks: [
        "Limited stock availability",
        "Color may slightly vary",
      ],

      marketplaces: [
        "Shopee",
        "Lazada",
        "TikTok Shop",
        "Zalora"
      ],
    },
  }
  const search = product?.toLowerCase() || ""

  let currentProduct = productData.electronics

  // ELECTRONICS
  if (
    search.includes("electronics") ||
    search.includes("iphone") ||
    search.includes("laptop") ||
    search.includes("camera") ||
    search.includes("headphone")
  ) {
    currentProduct = productData.electronics
  }

  // FASHION
  else if (
    search.includes("shoe") ||
    search.includes("nike") ||
    search.includes("fashion") ||
    search.includes("dress") ||
    search.includes("heels") ||
    search.includes("clothes") ||
    search.includes("outfit")
  ) {
    currentProduct = productData.fashion
  }

  // BABY
  else if (
    search.includes("baby") ||
    search.includes("diaper") ||
    search.includes("milk") ||
    search.includes("stroller") ||
    search.includes("formula")
  ) {
    currentProduct = productData.baby
  }

  // BEAUTY
  else if (
    search.includes("beauty") ||
    search.includes("skincare") ||
    search.includes("makeup") ||
    search.includes("lipstick")
  ) {
    currentProduct = productData.beauty
  }

  // GAMING
  else if (
    search.includes("gaming") ||
    search.includes("keyboard") ||
    search.includes("mouse") ||
    search.includes("headset")
  ) {
    currentProduct = productData.gaming
  }

  // HOME
  else if (
    search.includes("home") ||
    search.includes("chair") ||
    search.includes("table") ||
    search.includes("air fryer") ||
    search.includes("appliance")
  ) {
    currentProduct = productData.home
  }

  // BAGS
  else if (
    search.includes("bag") ||
    search.includes("tote") ||
    search.includes("handbag")
  ) {
    currentProduct = productData.bags
  }

  return (
    <main className="min-h-screen bg-[#efe7dc] text-[#2b2b2b]">
      <Navbar />

      <section className="px-6 md:px-16 pt-32 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          ><div className="inline-block mb-6 px-4 py-2 rounded-full bg-[#8b6f47] text-white text-sm font-semibold">
  BETA DEMO
</div>
            <p className="uppercase tracking-[0.3em] text-[#b08968] text-sm">
              AI Product Analysis
            </p>

            <h1 className="text-5xl md:text-8xl font-serif mt-6 text-[#0f172a] leading-tight">
              {currentProduct.name}
            </h1>

            <p className="mt-6 text-3xl text-[#667085]">
              {currentProduct.price}
            </p>
<p className="mt-3 text-lg text-[#667085]">
  <p className="mt-3 text-lg text-[#667085]">
  Source Marketplace: {currentProduct.sourceMarketplace || "Shopee"}
</p>
</p>
            {/* TRUST SCORE */}
            <div className="mt-14 rounded-[40px] bg-[#efe7dc] p-10 shadow-lg">
              <p className="uppercase tracking-[0.3em] text-[#b08968] text-sm">
                VURA Trust Score
              </p>

              <div className="mt-8 text-center">
                <h2 className="text-7xl font-bold text-[#8b6f47]">
                  {currentProduct.trust}
                </h2>

                <div className="mt-3 inline-flex rounded-full bg-[#8b6f47]/10 px-4 py-2 text-[#8b6f47] font-semibold">
                  Excellent
                </div>

                <p className="text-sm text-[#667085]">
                  Trust Score • {currentProduct.trust}/100
                </p>
<p className="text-sm text-[#667085] mt-2">
  Analyzed on June 3, 2026
</p>
                <p className="mt-6 max-w-lg mx-auto text-xl text-[#667085] leading-relaxed">
                  {currentProduct.recommendation}
                </p>

                <div className="mt-4 inline-flex rounded-full bg-[#8b6f47]/10 px-4 py-2 text-[#8b6f47] font-medium">
                  Risk Level: {currentProduct.risk}
                </div>
              </div>
            </div>

            {/* INTELLIGENCE */}
            <div className="mt-10 rounded-[40px] bg-[#8b6f47] text-white p-10">
              <p className="uppercase tracking-[0.3em] text-sm text-white-200">
                Final AI Recommendation
              </p>

              <h2 className="text-5xl font-serif mt-6">
                {currentProduct.intelligence}
              </h2>

              <p className="mt-6 text-lg text-[#f6f1eb] leading-relaxed">
                Smart AI-powered shopping analysis for safer purchases.
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

            <div className="relative rounded-[40px] bg-[#efe7dc] p-8 shadow-2xl">
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
          <div className="rounded-[40px] bg-[#efe7dc] p-10 shadow-md">
            <p className="uppercase tracking-[0.3em] text-[#b08968] text-sm">
              Positive Indicators
            </p>

            <div className="mt-8 space-y-5">
              {currentProduct?.pros?.map?.((pro, index) => (
                <div
                  key={index}
                  className="rounded-2xl bg-[#efe7dc] p-5"
                >
                  <p className="text-lg text-[#8b6f47]">
                    ✓ {pro}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* RISKS */}
          <div className="rounded-[40px] bg-[#efe7dc] p-10 shadow-md">
            <p className="uppercase tracking-[0.3em] text-#b08968[] text-sm">
              Risk Signals
            </p>

            <div className="mt-8 space-y-5">
              {currentProduct?.risks?.map?.((risk, index) => (
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
        {/* AI RECOMMENDATIONS */}
<div className="mt-16">

  <div className="flex items-center justify-between flex-wrap gap-4">
    <div>
      <p className="uppercase tracking-[0.3em] text-[#b08968] text-sm">
        AI Recommendations
      </p>

      <h2 className="text-4xl font-serif mt-4 text-[#0f172a]">
        Similar products you may prefer
      </h2>
    </div>

    <div className="rounded-full bg-[#8b6f47] px-6 py-3 text-white font-semibold">
      AI Suggested
    </div>
  </div>

  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">

    {/* CARD 1 */}
    <div className="rounded-[35px] bg-[#efe7dc] p-6 shadow-md">
      <img
        src="/images/shoe.png"
        alt="Sony WH-1000XM5"
        className="w-full rounded-[25px]"
      />

      <div className="mt-4 inline-flex rounded-full bg-[#8b6f47]/10 px-3 py-1 text-sm text-[#8b6f47]">
        Best Value
      </div>

      <h3 className="text-3xl font-serif mt-4">
        Sony WH-1000XM5
      </h3>

      <p className="mt-4 text-[#667085]">
        Higher trust score with lower marketplace risk.
      </p>

      <div className="mt-6 flex items-center justify-between">
        <span className="text-4xl font-bold text-[#8b6f47]">
          94
        </span>

        <button className="rounded-full bg-[#8b6f47] px-5 py-3 text-white">
          View
        </button>
      </div>
    </div>

    {/* CARD 2 */}
    <div className="rounded-[35px] bg-[#efe7dc] p-6 shadow-md">
      <img
        src="/images/watch.png"
        alt="Bose QuietComfort Ultra"
        className="w-full rounded-[25px]"
      />

      <div className="mt-4 inline-flex rounded-full bg-[#8b6f47]/10 px-3 py-1 text-sm text-[#8b6f47]">
        Most Comfortable
      </div>

      <h3 className="text-3xl font-serif mt-4">
        Bose QuietComfort Ultra
      </h3>

      <p className="mt-4 text-[#667085]">
        Popular among users with strong review authenticity.
      </p>

      <div className="mt-6 flex items-center justify-between">
        <span className="text-4xl font-bold text-[#8b6f47]">
          91
        </span>

        <button className="rounded-full bg-[#8b6f47] px-5 py-3 text-white">
          View
        </button>
      </div>
    </div>

    {/* CARD 3 */}
    <div className="rounded-[35px] bg-[#efe7dc] p-6 shadow-md">
      <img
        src="/images/bag.png"
        alt="Sennheiser Momentum 4"
        className="w-full rounded-[25px]"
      />

      <div className="mt-4 inline-flex rounded-full bg-[#8b6f47]/10 px-3 py-1 text-sm text-[#8b6f47]">
        Longest Battery
      </div>

      <h3 className="text-3xl font-serif mt-4">
        Sennheiser Momentum 4
      </h3>

      <p className="mt-4 text-[#667085]">
        Best seller reliability and safest purchase signals.
      </p>

      <div className="mt-6 flex items-center justify-between">
        <span className="text-4xl font-bold text-[#8b6f47]">
          96
        </span>

        <button className="rounded-full bg-[#8b6f47] px-5 py-3 text-white">
          View
        </button>
      </div>
    </div>

  </div>
</div>
          {/* SMART MARKETPLACE COMPARISON */}
          <div className="mt-16 rounded-[40px] bg-[#efe7dc] p-8 shadow-md">

            <div className="flex items-center justify-between flex-wrap gap-4">
              <div>
                <p className="uppercase tracking-[0.3em] text-[#b08968] text-sm">
                  Marketplace Intelligence
                </p>

                <h2 className="text-4xl font-serif mt-4 text-[#0f172a]">
                  Best platforms to purchase from
                </h2>
              </div>

              <div className="rounded-full bg-[#8b6f47] px-6 py-3 text-white font-semibold">
                AI Ranked
              </div>
            </div>

            <div className="mt-10 overflow-x-auto">
              <table className="w-full">

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
                    <td className="py-6 font-bold text-[#8b6f47]">91</td>
                    <td className="py-6 text-[#b08968]">Low</td>
                    <td className="py-6">Best Value</td>
                    <td className="py-6">
                      <a
                        href="https://shopee.ph"
                        target="_blank"
                        className="rounded-full bg-[#8b6f47] px-5 py-3 text-white"
                      >
                        Checkout
                      </a>
                    </td>
                  </tr>

                  <tr className="border-b border-[#f2f4f7]">
                    <td className="py-6 font-semibold">Lazada</td>
                    <td className="py-6">₱5,450</td>
                    <td className="py-6 font-bold text-[#8b6f47]">94</td>
                    <td className="py-6 text-[#b08968]">Very Low</td>
                    <td className="py-6">Safest</td>
                    <td className="py-6">
                      <a
                        href="https://www.lazada.com.ph"
                        target="_blank"
                        className="rounded-full bg-[#8b6f47] px-5 py-3 text-white"
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
                  <tr className="border-b border-[#e5e7eb]">
                    <td className="py-8 font-semibold text-xl">
                      Zalora
                    </td>

                    <td className="py-8 text-xl">
                      ₱5,390
                    </td>

                    <td className="py-8 text-xl font-bold text-[#8b6f47]">
                      89
                    </td>

                    <td className="py-8 text-xl text-[#b08968]">
                      Low
                    </td>

                    <td className="py-8 text-xl">
                      Fashion Favorite
                    </td>

                    <td className="py-8">
                      <a
                        href="https://www.zalora.com.ph"
                        target="_blank"
                        className="rounded-full bg-[#8b6f47] px-8 py-4 text-white font-semibold"
                      >
                        Checkout
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          {/* SAVE TO AI CLOSET */}
          <div className="mt-10 flex gap-4">

            <button
              onClick={() => {

                const savedProducts =
                  JSON.parse(localStorage.getItem("vura-closet") || "[]")

                const selectedProduct = {
                  name: currentProduct.name,
                  image: currentProduct.image,
                  price: currentProduct.price,
                  trust: currentProduct.trust
                }

                savedProducts.push(selectedProduct)

                localStorage.setItem(
                  "vura-closet",
                  JSON.stringify(savedProducts)
                )

                alert("Saved to AI Closet")
              }}
              className="rounded-full border border-[#8b6f47] px-8 py-4 text-[#8b6f47] font-semibold"
            >
              Save to AI Closet
            </button>

            <a
              href="/closet"
              className="rounded-full bg-[#8b6f47] px-8 py-4 text-white font-semibold"
            >
              Open AI Closet
            </a>

          </div>
      </section>
      
VURA Beta • Shopping Intelligence for Smarter Purchases
    </main>
  )
}