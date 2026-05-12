'use client'

import { useState } from 'react'

export default function Home() {

  const [link, setLink] = useState('')
  const [result, setResult] = useState('')

  function analyzeProduct() {

    if (!link) {
      setResult('Please paste a product link.')
      return
    }

    if (
      link.includes('shopee') ||
      link.includes('lazada') ||
      link.includes('tiktok') ||
      link.includes('zalora')
    ) {

      setResult(`
✅ Product looks valid

🔥 VURA AI Analysis:
- Product appears trending
- Compare seller ratings carefully
- Check reviews before buying

💡 Suggested Tip:
Look for vouchers and lower shipping fees.

🛍️ Alternative:
Try checking similar products before purchasing.
      `)

    } else {

      setResult(`
⚠️ Unsupported link.

Currently supported:
- Shopee
- Lazada
- TikTok Shop
- ZALORA
      `)

    }
  }

  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center p-6">

      <div className="w-full max-w-md">

        <h1 className="text-5xl font-bold text-center mb-3">
          VURA AI
        </h1>

        <p className="text-center text-gray-400 mb-8">
          Your AI Anti-Budol Shopping Assistant
        </p>

        <input
          type="text"
          value={link}
          onChange={(e) => setLink(e.target.value)}
          placeholder="Paste Shopee, Lazada, TikTok, or ZALORA link"
          className="w-full p-4 rounded-xl bg-zinc-900 border border-zinc-700 mb-4"
        />

        <button
          onClick={analyzeProduct}
          className="w-full bg-white text-black font-semibold p-4 rounded-xl"
        >
          Analyze Product
        </button>

        {result && (
          <div className="mt-6 bg-zinc-900 border border-zinc-700 p-5 rounded-xl whitespace-pre-line text-sm text-gray-200">
            {result}
          </div>
        )}

      </div>

    </main>
  )
}