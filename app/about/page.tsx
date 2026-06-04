import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#efe7dc] px-6 py-20">
      <div className="max-w-4xl mx-auto">

        <Link
          href="/"
          className="text-[#8b6f47] font-medium"
        >
          ← Back to Home
        </Link>

        <p className="mt-10 uppercase tracking-[0.3em] text-[#b08968] text-sm">
          ABOUT VURA
        </p>

        <h1 className="mt-4 text-5xl font-serif text-[#0f172a]">
          Shop Smarter. Buy With Confidence.
        </h1>

        <p className="mt-8 text-xl text-[#667085] leading-relaxed">
          VURA is an AI-powered shopping intelligence platform designed
          to help consumers make smarter purchasing decisions before
          spending their money online.
        </p>

        <p className="mt-6 text-lg text-[#667085] leading-relaxed">
          By analyzing marketplace trust signals, seller credibility,
          pricing patterns, and product information, VURA helps shoppers
          identify potential risks and discover safer alternatives.
        </p>

        <div className="mt-16 bg-white rounded-[30px] p-10 shadow-md">
          <h2 className="text-3xl font-serif text-[#0f172a]">
            Our Mission
          </h2>

          <p className="mt-4 text-[#667085] leading-relaxed">
            To reduce buyer regret and make online shopping more
            transparent through AI-powered marketplace intelligence.
          </p>
        </div>

      </div>
    </main>
  );
}