import Link from "next/link";

export default function SuccessPage() {
  return (
    <main className="min-h-screen bg-[#fefe7dc] flex items-center justify-center px-6">
      <div className="bg-white rounded-[40px] p-12 shadow-md text-center max-w-xl">

        <p className="uppercase tracking-[0.3em] text-[#b08968] text-sm">
          VURA BETA
        </p>

        <h1 className="mt-4 text-5xl font-serif text-[#0f172a]">
          Welcome to the VURA Beta!
        </h1>

        <p className="mt-6 text-[#667085] text-lg">
          You're officially part of the first group of shoppers
testing VURA's AI-powered marketplace intelligence.
We'll email you when beta access is ready.
        </p>

        <Link
          href="/"
          className="inline-block mt-10 rounded-full bg-[#8b6f47] text-white px-8 py-4 font-semibold"
        >
          Back to Home
        </Link>

      </div>
    </main>
  );
}