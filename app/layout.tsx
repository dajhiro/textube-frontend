import type { Metadata } from "next";
import "./globals.css";

import Header from "@/app/ui/Header";
import Footer from "@/app/ui/Footer";

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
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <Header />

        <main className="flex-1">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}
