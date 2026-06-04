import Link from "next/link";

export default function PrivacyPage() {
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
          PRIVACY POLICY
        </p>

        <h1 className="mt-4 text-5xl font-serif text-[#0f172a]">
          Privacy Policy
        </h1>

        <div className="mt-10 bg-white rounded-[30px] p-10 shadow-md">
          <p className="text-[#667085] leading-relaxed">
            VURA respects your privacy.
          </p>

          <p className="mt-4 text-[#667085] leading-relaxed">
            We only collect information voluntarily submitted through
            our waitlist forms and future platform features.
          </p>

          <ul className="mt-6 list-disc ml-6 text-[#667085] space-y-2">
            <li>Full Name</li>
            <li>Email Address</li>
            <li>Preferred Marketplace</li>
          </ul>

          <p className="mt-6 text-[#667085] leading-relaxed">
            We do not sell, rent, or share your personal information
            with third parties for marketing purposes.
          </p>

          <p className="mt-6 text-[#667085]">
            Contact: vura.assistant@gmail.com
          </p>
        </div>

      </div>
    </main>
  );
}