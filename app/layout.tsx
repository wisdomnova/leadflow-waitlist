import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "LeadFlow Waitlist",
  description: "Join the waitlist for LeadFlow - AI-powered cold email automation platform",
  keywords: ["leadflow", "cold email", "outreach", "automation", "AI"],
  authors: [{ name: "LeadFlow" }],
  openGraph: {
    title: "LeadFlow Waitlist",
    description: "Join the waitlist for LeadFlow - AI-powered cold email automation platform",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
