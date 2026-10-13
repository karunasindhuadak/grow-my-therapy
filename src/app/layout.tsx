import type { Metadata } from "next";
import { Cormorant_Garamond, Inter, Mulish } from "next/font/google";
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

const mulish = Mulish({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-muli",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Dr. Maya Reynolds, PsyD | Anxiety Therapist in Santa Monica",
  description:
    "Dr. Maya Reynolds, PsyD is a Licensed Clinical Psychologist offering therapy for adults in Santa Monica and secure telehealth across California.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-US">
      <body
        className={`${cormorant.variable} ${inter.variable} ${mulish.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
