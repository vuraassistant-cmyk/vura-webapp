import Link from "next/link";

export default function TermsPage() {
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
          TERMS OF SERVICE
        </p>

        <h1 className="mt-4 text-5xl font-serif text-[#0f172a]">
          Terms of Service
        </h1>

        <div className="mt-10 bg-white rounded-[30px] p-10 shadow-md">

          <p className="text-[#667085] leading-relaxed">
            By using VURA, you agree to these Terms of Service.
          </p>

          <p className="mt-6 text-[#667085] leading-relaxed">
            VURA provides informational shopping intelligence only.
            Our analysis is intended to assist shoppers but should not
            be considered financial, legal, or purchasing advice.
          </p>

          <p className="mt-6 text-[#667085] leading-relaxed">
            Users remain responsible for their own purchasing decisions.
          </p>

          <p className="mt-6 text-[#667085] leading-relaxed">
            VURA does not guarantee the accuracy, completeness, or
            availability of marketplace data.
          </p>

        </div>

      </div>
    </main>
  );
}