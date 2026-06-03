"use client"

import Link from "next/link"

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#efe7dc]/80 backdrop-blur-xl border-b border-[#e5e7eb]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-5 flex items-center justify-between">
        
        <Link
          href="/"
          className="text-5xl font-serif text-[#0f172a]"
        >
          vura♡
        </Link>

        <div className="hidden md:flex items-center gap-10 text-[#667085]">
          <Link href="/">Home</Link>
          <Link href="/analyze">Analyze</Link>
          <Link href="/closet">Closet</Link>
          <Link href="/compare">Compare</Link>
          
          <Link href="/waitlist">
  <button className="rounded-full bg-[#b08968] text-white px-6 py-3 font-medium hover:opacity-90 transition shadow-sm">
    Join Waitlist
  </button>
</Link>
        </div>
      </div>
    </nav>
  )
}