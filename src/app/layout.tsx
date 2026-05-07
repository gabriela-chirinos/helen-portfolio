import type { Metadata } from "next";
import { Epilogue, Playfair_Display } from "next/font/google";
import "./globals.css";

const epilogue = Epilogue({
  variable: "--font-epilogue-var",
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair-var",
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Gabriela Chirinos · Technical Operations",
  description:
    "Technical operations specialist bridging cloud infrastructure, data workflows, and clear communication. Open to Technical Support Engineer, Cloud Support Associate, and Application Support Analyst roles.",
  openGraph: {
    title: "Gabriela Chirinos · Technical Operations",
    description:
      "3+ years at Amazon | AWS re:Start | 98% accuracy · 9,000+ cases resolved · $2M+ impact",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${epilogue.variable} ${playfair.variable}`}>
      <body className="font-epilogue antialiased">{children}</body>
    </html>
  );
}
