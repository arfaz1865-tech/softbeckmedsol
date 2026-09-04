// src/app/layout.tsx
import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import FloatingSidebar from "./components/FloatingSidebar/page";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });

export const metadata: Metadata = {
  title: "Exact Layout Demo",
  description: "Next.js Tailwind implementation",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfair.variable} font-sans relative min-h-screen antialiased`}>
        {/* Pinned Right Side Action Bar */}
        <FloatingSidebar />
        
        {/* Page Content */}
        {children}
      </body>
    </html>
  );
}