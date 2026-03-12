import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "BrightSmile Dental | Modern Care, Friendly Faces in Riverside, CA",
  description: "Experience advanced dental care at BrightSmile Dental. Led by Dr. Sarah Chen & Dr. Marcus Rivera, we offer general, cosmetic, and orthodontic services in Riverside, CA.",
  keywords: ["Dentist Riverside", "Cosmetic Dentistry", "Invisalign Riverside", "Orthodontics", "Dr. Sarah Chen", "Dr. Marcus Rivera", "Teeth Whitening Riverside", "Dental Implants"],
  authors: [{ name: "BrightSmile Dental Team" }],
  openGraph: {
    title: "BrightSmile Dental | Modern Care, Friendly Faces",
    description: "Your destination for high-quality, compassionate dental care in Riverside, CA.",
    url: "https://brightsmileriverside.com", // Placeholder URL
    siteName: "BrightSmile Dental",
    images: [
      {
        url: "/og-image.jpg", // Placeholder image path
        width: 1200,
        height: 630,
        alt: "BrightSmile Dental Practice",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "BrightSmile Dental | Riverside's Premier Practice",
    description: "Modern care meets friendly faces. Book your appointment with our experts today.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${outfit.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
