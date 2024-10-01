import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Рибарлък Риболовен Магазин  ",
  description: "Онлайн магазин за риболовни принадлежности",
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
