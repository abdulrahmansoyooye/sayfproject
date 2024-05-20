import { Bree_Serif, Rubik } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const bree_Serif = Bree_Serif({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
  variable: "--font-bree_serif",
});
export const rubik = Rubik({
  subsets: ["latin"],
  weight: ["300", "400", "600", "500", "700", "800", "900"],

  display: "swap",
  variable: "--font-rubik",
});

export const metadata = {
  title: "Sayf Productive Muslims",
  description: "productivity always",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="app">
      <body className={`${rubik.variable} ${bree_Serif.variable}`}>
        <main className="app">
          <Nav />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
