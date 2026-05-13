export default function Home() {
  return (
    <main className="min-h-screen bg-[#f6f7f2] text-[#111827]">

      {/* NAVBAR */}

      <nav className="flex items-center justify-between px-8 md:px-16 py-8">

        <div className="text-4xl font-semibold tracking-tight lowercase flex items-center gap-1">
          <span className="font-serif italic">vura</span>
          <span className="text-emerald-500">♡</span>
        </div>

        <div className="hidden md:flex items-center gap-10 text-sm text-zinc-700">
          <a href="#">Home</a>
          <a href="#">Features</a>
          <a href="#">How it works</a>
          <a href="#">About us</a>
        </div>

        <button className="bg-[#18321f] hover:bg-[#24472d] text-white px-6 py-3 rounded-full text-sm transition-all duration-300 shadow-sm">
          Get Extension
        </button>

      </nav>


      {/* HERO SECTION */}

      <section className="px-8 md:px-16 pt-10 pb-24">

        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">

          {/* LEFT SIDE */}

          <div>

            <div className="inline-flex items-center px-5 py-2 rounded-full bg-[#eef2e8] text-[#5b745d] text-xs tracking-[0.3em] uppercase mb-10">
              AI Shopping Assistant
            </div>

            <h1 className="text-[64px] md:text-[86px] leading-[0.95] tracking-tight text-[#111827]">

              <span className="font-serif">
                Shop smarter.
              </span>

              <br />

              <span className="font-serif">
                Avoid fake hype.
              </span>

              <br />

              <span className="italic text-[#70835f] font-serif">
                Know before you buy.
              </span>

            </h1>


            <p className="mt-10 text-zinc-500 text-xl leading-relaxed max-w-xl">
              VURA analyzes products and sellers instantly
              so you can shop with confidence.
            </p>


            {/* SEARCH BAR */}

            <div className="mt-12 flex flex-col md:flex-row gap-4">

              <input
                type="text"
                placeholder="Paste product link here..."
                className="flex-1 px-7 py-5 rounded-full bg-white border border-zinc-200 outline-none text-zinc-700 shadow-sm"
              />

              <button className="bg-[#18321f] hover:bg-[#24472d] text-white px-10 py-5 rounded-full transition-all duration-300 shadow-lg">
                ✦ Analyze
              </button>

            </div>


            {/* SOCIAL PROOF */}

            <div className="mt-10 flex items-center gap-4">

              <div className="flex -space-x-3">
                <div className="w-10 h-10 rounded-full bg-zinc-300 border-2 border-white"></div>
                <div className="w-10 h-10 rounded-full bg-zinc-400 border-2 border-white"></div>
                <div className="w-10 h-10 rounded-full bg-zinc-500 border-2 border-white"></div>
                <div className="w-10 h-10 rounded-full bg-zinc-600 border-2 border-white"></div>
              </div>

              <p className="text-zinc-500 text-sm">
                Trusted by 10,000+ smart shoppers
              </p>

            </div>

          </div>


          {/* RIGHT SIDE */}

          <div className="relative">

            <div className="bg-[#647553] rounded-[40px] h-[620px] relative overflow-hidden shadow-2xl">

              <div className="absolute inset-0 bg-gradient-to-br from-[#7d8f6b] to-[#3c4b36]"></div>


              {/* PRODUCT CARD */}

              <div className="absolute left-10 top-14 bg-[#f7f6f1] rounded-[32px] p-8 w-[360px] shadow-2xl">

                <div className="w-full h-[260px] rounded-[24px] bg-[#d8d7cf] flex items-center justify-center text-8xl">
                  👜
                </div>

                <div className="mt-6">

                  <p className="text-zinc-400 text-sm uppercase tracking-[0.2em]">
                    Luxury Bag
                  </p>

                  <h3 className="text-3xl font-semibold mt-2 text-[#111827]">
                    ₱8,490
                  </h3>

                  <p className="text-[#70835f] mt-2 text-sm">
                    15% lower than market average
                  </p>

                </div>

              </div>


              {/* TRUST SCORE CARD */}

              <div className="absolute right-8 top-20 bg-[#f7f6f1] rounded-[30px] p-8 w-[260px] shadow-2xl">

                <p className="text-zinc-500 text-sm uppercase tracking-[0.15em]">
                  VURA Trust Score
                </p>

                <div className="mt-6 text-center">

                  <div className="text-6xl font-bold text-[#18321f]">
                    85
                  </div>

                  <p className="text-zinc-400 mt-1">
                    /100
                  </p>

                  <div className="mt-4 bg-[#e8f3e3] text-[#36553f] py-2 rounded-full text-sm font-medium">
                    ✓ Looks good
                  </div>

                </div>


                <div className="mt-8 space-y-4 text-sm">

                  <div className="flex justify-between text-zinc-600">
                    <span>Seller reliability</span>
                    <span className="text-[#36553f] font-semibold">High</span>
                  </div>

                  <div className="flex justify-between text-zinc-600">
                    <span>Product popularity</span>
                    <span className="text-[#36553f] font-semibold">Very good</span>
                  </div>

                  <div className="flex justify-between text-zinc-600">
                    <span>Price check</span>
                    <span className="text-[#36553f] font-semibold">Good deal</span>
                  </div>

                  <div className="flex justify-between text-zinc-600">
                    <span>Review authenticity</span>
                    <span className="text-[#36553f] font-semibold">Looks real</span>
                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* FEATURES BAR */}

      <section className="px-8 md:px-16 pb-24">

        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-6 bg-[#f0f1eb] rounded-[30px] p-8 border border-[#e5e7df]">

          <div>
            <h3 className="font-semibold text-[#18321f]">
              Detect risky sellers
            </h3>

            <p className="text-zinc-500 mt-2 text-sm leading-relaxed">
              We analyze seller ratings and history to protect you.
            </p>
          </div>


          <div>
            <h3 className="font-semibold text-[#18321f]">
              Check real reviews
            </h3>

            <p className="text-zinc-500 mt-2 text-sm leading-relaxed">
              VURA filters fake reviews and shows you the truth.
            </p>
          </div>


          <div>
            <h3 className="font-semibold text-[#18321f]">
              Compare prices
            </h3>

            <p className="text-zinc-500 mt-2 text-sm leading-relaxed">
              Find better deals across multiple platforms instantly.
            </p>
          </div>


          <div>
            <h3 className="font-semibold text-[#18321f]">
              Shop with confidence
            </h3>

            <p className="text-zinc-500 mt-2 text-sm leading-relaxed">
              Make smarter decisions and avoid budol.
            </p>
          </div>

        </div>

      </section>


      {/* TRENDING PRODUCTS */}

      <section className="px-8 md:px-16 pb-32">

        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-16">

            <p className="text-[#70835f] uppercase tracking-[0.25em] text-xs">
              Trending Now
            </p>

            <h2 className="text-5xl font-serif mt-5 text-[#111827]">
              Popular products analyzed by VURA
            </h2>

          </div>


          <div className="grid md:grid-cols-4 gap-8">

            {["🎧", "👟", "⌚", "📷"].map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-[28px] p-6 shadow-sm hover:shadow-xl transition-all duration-300 border border-zinc-100"
              >

                <div className="w-full h-[220px] rounded-[24px] bg-[#f2f3ee] flex items-center justify-center text-7xl">
                  {item}
                </div>

                <div className="mt-6 flex items-center justify-between">

                  <div>
                    <h3 className="font-semibold text-lg text-[#111827]">
                      Smart Product
                    </h3>

                    <p className="text-zinc-400 text-sm mt-1">
                      Verified by VURA
                    </p>
                  </div>

                  <div className="bg-[#e8f3e3] text-[#36553f] px-3 py-1 rounded-full text-sm font-semibold">
                    92
                  </div>

                </div>

              </div>
            ))}

          </div>

        </div>

      </section>

    </main>
  )
}