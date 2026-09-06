import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-geist-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Raffay Asim — AI Automation Architect | Full-Stack Vibe Coder",
  description:
    "I ship production AI automation and vibe-coded full-stack systems — n8n agents, CRMs, outbound engines, and SaaS — that replace repetitive sales/ops work.",
  keywords: [
    "AI automation",
    "n8n",
    "full-stack",
    "Raffay Asim",
    "CRM",
    "SaaS",
  ],
  authors: [{ name: "Raffay Asim" }],
  openGraph: {
    title: "Raffay Asim — AI Automation Architect",
    description:
      "Production AI automation and vibe-coded full-stack systems for sales and ops.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased bg-bg text-zinc-100`}>
        {children}
      </body>
    </html>
  );
}
