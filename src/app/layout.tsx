import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Taran Wadhawan | Portfolio",
  description: "Portfolio of Taran Wadhawan - CSE AIML Student and Technology Enthusiast",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}