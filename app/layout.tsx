import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "Product2Video MVP",
  description: "Turn product images into short ad videos in minutes.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <div className="site-shell">
          <header className="site-header">
            <Link href="/" className="brand">
              Product2Video
            </Link>
            <nav className="nav-links">
              <Link href="/generate">Generate</Link>
            </nav>
          </header>
          <main>{children}</main>
          <footer className="site-footer">
            <p>Built as an MVP for ecommerce product image to video generation.</p>
          </footer>
        </div>
      </body>
    </html>
  );
}
