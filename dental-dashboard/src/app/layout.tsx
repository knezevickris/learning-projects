import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dental Dashboard",
  description: "Dental practices review dashboard",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
