import type { Metadata } from "next";
import "./globals.css";
import Navigation from "./components/navigation/Navigation";
import Footer from "./components/footer/Footer";

export const metadata: Metadata = {
  title: "Рибарлък Риболовен Магазин",
  description: "Онлайн магазин за риболовни принадлежности",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="layout">
          <Navigation />
          <main className="content">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
