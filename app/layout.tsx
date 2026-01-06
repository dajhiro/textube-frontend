import type { Metadata } from "next";
import { Playfair_Display } from "next/font/google";
import "@styles/globals.css";

import Header from "@components/layout/Header";
import Footer from "@components/layout/Footer";
import { AuthProvider } from "@lib/contexts/AuthContext";
import { ThemeProvider } from "@lib/providers/ThemeProvider";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: "TexTube",
  description: "Connected to All Earth",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={playfair.variable} suppressHydrationWarning>
      <body className="min-h-screen flex flex-col" suppressHydrationWarning>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <AuthProvider>
            <Header />

            <main className="flex-1">
              {children}
            </main>

            <Footer />
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
