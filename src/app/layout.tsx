import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Dr. Maya Reynolds, PsyD | Anxiety & Trauma Therapist in Santa Monica",
  description:
    "Licensed clinical psychologist in Santa Monica, CA offering therapy for anxiety, trauma, and burnout. In-person and telehealth sessions available across California.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body
        className={`${cormorant.variable} ${inter.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  )
}
