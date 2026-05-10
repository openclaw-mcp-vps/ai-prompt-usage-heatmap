export default function Page() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9] font-sans">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-16 text-center">
        <span className="inline-block mb-4 px-3 py-1 rounded-full bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold tracking-wide uppercase">
          AI Cost Intelligence
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Visualize which AI prompts{" "}
          <span className="text-[#58a6ff]">drain your budget</span>
        </h1>
        <p className="text-lg text-[#8b949e] mb-8 max-w-xl mx-auto">
          Ingest your AI API usage data and instantly see interactive heatmaps of cost patterns by prompt, endpoint, and time. Stop guessing — find expensive prompts in seconds.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors"
        >
          Get Access — $25/mo
        </a>
        <p className="mt-3 text-xs text-[#6e7681]">Cancel anytime. Instant access after payment.</p>

        {/* Heatmap mockup */}
        <div className="mt-14 rounded-xl border border-[#30363d] bg-[#161b22] p-6 text-left">
          <p className="text-xs text-[#6e7681] mb-3 font-mono">prompt cost heatmap — last 7 days</p>
          <div className="grid grid-cols-7 gap-1">
            {[
              "#1a3a1a","#1e5c1e","#2d8a2d","#3ab83a","#1e5c1e","#1a3a1a","#0d1f0d",
              "#0d1f0d","#1a3a1a","#3ab83a","#5ce05c","#3ab83a","#2d8a2d","#1a3a1a",
              "#1a3a1a","#2d8a2d","#5ce05c","#7fff7f","#5ce05c","#3ab83a","#1e5c1e",
              "#0d1f0d","#1a3a1a","#2d8a2d","#3ab83a","#2d8a2d","#1e5c1e","#0d1f0d",
              "#1a3a1a","#1e5c1e","#1a3a1a","#2d8a2d","#1a3a1a","#0d1f0d","#0d1f0d"
            ].map((color, i) => (
              <div key={i} className="h-8 rounded" style={{backgroundColor: color}} />
            ))}
          </div>
          <div className="flex justify-between mt-2 text-xs text-[#6e7681]">
            <span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span><span>Sun</span>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-16">
        <div className="rounded-xl border border-[#58a6ff] bg-[#161b22] p-8 text-center">
          <p className="text-xs font-semibold text-[#58a6ff] uppercase tracking-widest mb-2">Pro Plan</p>
          <p className="text-5xl font-bold text-white mb-1">$25</p>
          <p className="text-[#6e7681] text-sm mb-6">/month</p>
          <ul className="text-sm text-[#c9d1d9] space-y-2 mb-8 text-left">
            {[
              "Interactive cost heatmaps",
              "Prompt-level cost breakdown",
              "Webhook + SDK ingestion",
              "Budget alerts & thresholds",
              "7-day & 30-day trend views",
              "Unlimited API calls tracked"
            ].map((f) => (
              <li key={f} className="flex items-center gap-2">
                <span className="text-[#3fb950]">✓</span> {f}
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg text-sm transition-colors"
          >
            Start Now — $25/mo
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-6">
          <div className="border-b border-[#21262d] pb-6">
            <h3 className="font-semibold text-white mb-2">Which AI providers are supported?</h3>
            <p className="text-[#8b949e] text-sm">OpenAI, Anthropic, Cohere, and any provider with a webhook or SDK integration. Custom endpoints are supported via our REST ingestion API.</p>
          </div>
          <div className="border-b border-[#21262d] pb-6">
            <h3 className="font-semibold text-white mb-2">How is my usage data stored?</h3>
            <p className="text-[#8b949e] text-sm">All data is stored in a dedicated PostgreSQL instance. Prompt content is never stored — only metadata like token counts, cost, model, and timestamp.</p>
          </div>
          <div className="pb-6">
            <h3 className="font-semibold text-white mb-2">Can I cancel anytime?</h3>
            <p className="text-[#8b949e] text-sm">Yes. Cancel from your billing portal at any time. You keep access until the end of your billing period with no questions asked.</p>
          </div>
        </div>
      </section>

      <footer className="text-center pb-10 text-xs text-[#6e7681]">
        © {new Date().getFullYear()} AI Prompt Usage Heatmap. All rights reserved.
      </footer>
    </main>
  )
}
