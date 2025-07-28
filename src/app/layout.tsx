import type { Metadata } from "next";
import { Merriweather } from "next/font/google";
import "../shared/styles/globals.css";
import Navbar from "@/shared/Navbar/Navbar";

const merriweather = Merriweather({
  subsets: ["latin"],
  weight: ['300', '400', '700', '900']
});

export const metadata: Metadata = {
  title: "Imobilli",
  description: "Gestão do seu imóvel",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
        className={`${merriweather.className} antialiased min-h-screen flex flex-col`}
      >
        <Navbar />
        <main className="flex-1 mt-20 mb-10 lg:mt-32 max-w-[90%] mx-auto">
        {children}
        </main>
      </body>
    </html>
  );
}
