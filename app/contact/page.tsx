import Link from "next/link";

export default function ContactPage() {
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
          CONTACT
        </p>

        <h1 className="mt-4 text-5xl font-serif text-[#0f172a]">
          Get in Touch
        </h1>

        <div className="mt-10 bg-white rounded-[30px] p-10 shadow-md">

          <p className="text-[#667085] text-lg leading-relaxed">
            We'd love to hear from you.
          </p>

          <p className="mt-6 text-[#667085]">
            Email us directly:
          </p>

          <a
            href="mailto:vura.assistant@gmail.com"
            className="mt-3 inline-block text-[#8b6f47] font-semibold text-lg"
          >
            vura.assistant@gmail.com
          </a>

        </div>

      </div>
    </main>
  );
}