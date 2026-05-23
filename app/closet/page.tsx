"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import Navbar from "../components/Navbar"

export default function ClosetPage() {
  const [closetItems, setClosetItems] = useState<any[]>([])

  useEffect(() => {
    const savedCloset =
      JSON.parse(localStorage.getItem("vuraCloset") || "[]")

    setClosetItems(savedCloset)
  }, [])

  const removeItem = (indexToRemove: number) => {
    const updatedCloset =
      closetItems.filter((_, index) => index !== indexToRemove)

    setClosetItems(updatedCloset)

    localStorage.setItem(
      "vuraCloset",
      JSON.stringify(updatedCloset)
    )
  }

  return (
    <main className="min-h-screen bg-[#f6f7f2] text-[#111827]">
      <Navbar />

      <section className="px-6 md:px-16 pt-32 pb-20">

        <div className="flex items-center justify-between flex-wrap gap-4">
          <div>
            <p className="uppercase tracking-[0.3em] text-[#8a9b6d] text-sm">
              AI Shopping Collection
            </p>

            <h1 className="text-5xl md:text-7xl font-serif mt-4">
              Your VURA Closet
            </h1>

            <p className="mt-6 text-xl text-[#667085] max-w-2xl">
              Saved products intelligently organized for smarter online shopping.
            </p>
          </div>

          <Link
            href="/"
            className="rounded-full bg-[#123524] px-8 py-4 text-white font-semibold"
          >
            Analyze Product
          </Link>
        </div>

        {/* EMPTY STATE */}
        {closetItems.length === 0 && (
          <div className="mt-20 rounded-[40px] bg-white p-16 text-center shadow-sm">
            <h2 className="text-4xl font-serif text-[#0f172a]">
              Your Closet is Empty
            </h2>

            <p className="mt-6 text-xl text-[#667085]">
              Start analyzing products and save them to your AI Closet.
            </p>

            <Link
              href="/"
              className="inline-block mt-10 rounded-full bg-[#123524] px-8 py-4 text-white font-semibold"
            >
              Start Shopping
            </Link>
          </div>
        )}

        {/* PRODUCT GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">

          {closetItems.map((item, index) => (
            <div
              key={index}
              className="rounded-[40px] bg-white p-6 shadow-sm"
            >
              <div className="relative rounded-[30px] overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.name}
                  width={600}
                  height={600}
                  className="object-cover"
                />
              </div>

              <div className="mt-6">
                <h2 className="text-3xl font-serif text-[#0f172a]">
                  {item.name}
                </h2>

                <p className="mt-3 text-2xl text-[#667085]">
                  {item.price}
                </p>

                <div className="mt-8 flex items-center justify-between">
                  <div>
                    <p className="uppercase tracking-[0.3em] text-[#8a9b6d] text-sm">
                      Trust Score
                    </p>

                    <h3 className="text-5xl font-bold text-[#123524] mt-2">
                      {item.trust}
                    </h3>
                  </div>

                  <button
                    onClick={() => removeItem(index)}
                    className="rounded-full border border-red-400 px-6 py-3 text-red-500 font-semibold"
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}