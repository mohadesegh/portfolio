import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mohadese Ghadimi — Senior Software Engineer",
  description:
    "Portfolio of Mohadese Ghadimi, Senior Software Engineer building AI products, fintech platforms, real-time systems, cloud-enabled applications, and high-performance web experiences.",
  openGraph: {
    title: "Mohadese Ghadimi — Senior Software Engineer",
    description:
      "AI Products, Fintech, Cloud & High-Performance Systems.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>{children}</body>
    </html>
  );
}