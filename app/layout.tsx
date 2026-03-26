import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Product2Video MVP",
  description: "Turn product images into short ad videos in minutes",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
