import Link from "next/link";
export default function WaitlistPage() {
  return (
    <main className="min-h-screen bg-[#fefe7dc] px-6 py-20">
      <div className="max-w-2xl mx-auto">
<Link
  href="/"
  className="inline-block mb-8 text-[#8b6f47] font-medium hover:underline"
>
  ← Back to Home
</Link>
        <p className="uppercase tracking-[0.3em] text-[#b08968] text-sm text-center">
          VURA BETA
        </p>

        <h1 className="mt-4 text-5xl font-serif text-center text-[#0f172a]">
          Join the Waitlist
        </h1>

        <p className="mt-6 text-center text-[#667085] text-lg">
          Be among the first users to test VURA's AI-powered
          shopping intelligence platform.
        </p>

        <form
  action="/waitlist/success"
  className="mt-12 bg-white rounded-[40px] p-10 shadow-md"
>

          <div>
            <label className="block mb-2 font-medium">
              Full Name
            </label>

            <input
              type="text"
              placeholder="Your name"
              className="w-full border rounded-xl p-4"
            />
          </div>

          <div className="mt-6">
            <label className="block mb-2 font-medium">
              Email Address
            </label>

            <input
              type="email"
              placeholder="you@example.com"
              className="w-full border rounded-xl p-4"
            />
          </div>

          <div className="mt-6">
            <label className="block mb-2 font-medium">
              Favorite Marketplace
            </label>

            <select className="w-full border rounded-xl p-4">
              <option>Shopee</option>
              <option>Lazada</option>
              <option>TikTok Shop</option>
              <option>Zalora</option>
            </select>
          </div>

          <a
  href="https://docs.google.com/forms/d/e/1FAIpQLSdcDCbnWe2cV3VlP-oWt7RRRXuGKcqm6cKumprCu5MpmynXQA/viewform"
  target="_blank"
  rel="noopener noreferrer"
  className="mt-8 block w-full rounded-full bg-[#8b6f47] text-white py-4 font-semibold text-center"
>
  Join Waitlist
</a>

        </form>
      </div>
    </main>
  )
}