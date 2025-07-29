import type { Metadata } from "next";
import { Merriweather } from "next/font/google";
import "../shared/styles/globals.css";
import Navbar from "@/shared/components/Navbar/Navbar";
import Footer from "@/shared/components/Footer/Footer";
import { Toaster } from "sonner";
import { ThemeProvider } from "next-themes";

const merriweather = Merriweather({
  subsets: ["latin"],
  weight: ['300', '400', '700', '900']
});

export const metadata: Metadata = {
  title: "Dommi",
  description: "Dommi",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <link rel="icon" type="image/png" href="/favicon-96x96.png" sizes="96x96" />
      <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      <link rel="shortcut icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <meta name="apple-mobile-web-app-title" content="Dommi" />
      <link rel="manifest" href="/site.webmanifest" />

      <body
        className={`${merriweather.className} antialiased`}
      >
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
        <Navbar />
        <main className="flex-1 mx-auto mt-16 lg:pt-24 lg:mt-0">
          {children}
        </main>
        <Footer />
        <Toaster
          position="bottom-center"
          duration={5000}
          visibleToasts={3}
          toastOptions={{
            unstyled: true,
            classNames: {
              toast:
                "group toast h-15 w-full flex gap-x-3 items-center bg-background shadow-[0_3px_10px_var(--border)] rounded-xs p-4 pr-6 shadow-lg",
              title: "font-semibold text-sm",
              description: "text-xs opacity-80",
              success: "bg-card/90 text-accent-foreground",
              error: "bg-card/90 text-accent-foreground",
            },
          }}
        />
        </ThemeProvider>
      </body>
    </html>
  );
}
