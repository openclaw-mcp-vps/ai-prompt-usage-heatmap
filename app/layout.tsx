import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "AI Prompt Usage Heatmap — Visualize Which Prompts Drain Your Budget",
  description: "Interactive heatmap dashboard showing AI API cost patterns by prompt, endpoint, and time. Stop overspending on AI — find and fix expensive prompts fast."
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="83a299ea-90c6-414a-bb9a-5f4c1b881cb9"></script>
      </head>
      <body>{children}</body>
    </html>
  )
}
