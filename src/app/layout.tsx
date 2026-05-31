import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mohadese Ghadimi — AI OS Portfolio",
  description: "Interactive portfolio for Frontend, Android, AI Products, and Web3 experience.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
