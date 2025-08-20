import type { Metadata } from "next";
import { League_Spartan, Ysabeau_SC, Ysabeau_Infant } from "next/font/google";
import "./globals.css";

const leagueSpartan = League_Spartan({
  subsets: ["latin"],
  variable: "--font-league-spartan",
  weight: ["400", "700", "800"],
});

const ysabeauSC = Ysabeau_SC({
  subsets: ["latin"],
  variable: "--font-ysabeau-sc",
  weight: ["400", "500", "600"],
});

const ysabeauInfant = Ysabeau_Infant({
  subsets: ["latin"],
  variable: "--font-ysabeau-infant",
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Paper Planes, Legos, & Everything in Between - Kabiru Seidu Portfolio",
  description: "A modern, playful portfolio website showcasing Kabiru Seidu's multidisciplinary design work across web design, game design, virtual reality, and physical products.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${leagueSpartan.variable} ${ysabeauSC.variable} ${ysabeauInfant.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
