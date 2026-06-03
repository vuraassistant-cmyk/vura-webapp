"use client"

import { useEffect, useState } from "react"
import Navbar from "../components/Navbar"

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
  Saved Products
</h1>

<p className="mt-6 text-xl text-[#6b7280] max-w-2xl leading-relaxed">
  Your personal AI-powered shopping collection.
  Save trusted finds, compare products later,
  and build your dream wishlist with confidence.
</p>
{products.length === 0 && (

  <div className="mt-20 rounded-[40px] bg-[#efe7dc] border border-[#d6c6b8] p-16 text-center shadow-sm">

    <h2 className="text-5xl text-[#2b2b2b]">
      Nothing saved yet
    </h2>

    <p className="mt-8 text-lg text-[#5f6f8b] leading-relaxed">
      Start exploring products and save your favorite fashion,
      beauty, gaming, and lifestyle finds here.
    </p>

    <button className="mt-10 rounded-full bg-[#8b6f47] px-10 py-4 text-white">
      Explore Products
    </button>

  </div>

)}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">

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
                  className="rounded-full border border-red-500 px-6 py-3 text-red-500"
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