import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { interTight, instrumentSerif } from "./fonts";
import { Analytics } from '@vercel/analytics/next';

const poppins = Poppins({
  subsets: ["latin"],
  weight:["400", "500", "600", "700"],
})

export const metadata: Metadata = {
  title: "Cliero AI",
  description: "Clear your cloudy mind with AI-powered learning",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${poppins.className} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
        <Analytics />
      </body>
    </html>
  );
}

