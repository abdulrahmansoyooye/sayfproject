import { Bree_Serif, Poppins, Rubik } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const rubik = Rubik({
  subsets: ["latin"],
  weight: ["400", "600", "500", "700"],

  display: "swap",
  variable: "--font-rubik",
});

export const bree_serif = Bree_Serif({
  subsets: ["latin"],
  weight: ["400"],

  display: "swap",
  variable: "--font-serif",
});

export const metadata = {
  title: "Sayf Productive Muslims",
  description: "productivity always",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="app">
      <body className={`${rubik.variable} ${bree_serif.variable}`}>
        <main className="app">
          <Nav />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
