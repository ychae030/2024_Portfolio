import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "유채원 프론트엔드 포트폴리오",
  description: "Frontend Portfolio",
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
