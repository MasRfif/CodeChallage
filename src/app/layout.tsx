import type { Metadata } from "next";
import NavBar from "@/components/Navbar";
import { Inter } from "next/font/google";
import Footer from "@/components/Footer";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header>
          <NavBar />
        </header>

        {children}

        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  );
}
