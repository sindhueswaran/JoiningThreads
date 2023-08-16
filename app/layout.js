import Nav from "./components/nav";
import Footer from "./components/footer"; 
import "./globals.css";
import { Oranienbaum, Roboto, Pacifico } from "next/font/google";
import {
  BASE_PATH,
  SITE_TITLE,
  SITE_DESC,
  SITE_KEYWORDS,
} from "@/lib/constants";

const oranienbaum = Oranienbaum({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
  variable: "--font-oranienbaum",
});

const roboto = Roboto({
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "300", "400", "500", "700", "900"],
  variable: "--font-roboto",
});

const pacifico = Pacifico({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
  variable: "--font-pacifico",
});

export const metadata = {
  title: `Home | ${SITE_TITLE}`,
  description: `${SITE_DESC}`,
  generator: "Next.js",
  referrer: "origin-when-cross-origin",
  keywords: `${SITE_KEYWORDS}`,
  authors: [{ name: "Sindhu Eswaran" }, { name: "Mohan Kumar", url: "/" }],
  colorScheme: "light",
  creator: "Mohan Kumar",
  publisher: "Sindhu Eswaran",
  metadataBase: new URL(`${BASE_PATH}`),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: `Home | ${SITE_TITLE}`,
    description: `${SITE_DESC}`,
    authors: ["Sindhu", "Mohan"],
    images: "/images/jtjllogo.png",
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${pacifico.variable} ${oranienbaum.variable} ${roboto.variable}`}
    >
      <body>
        <main>
          <Nav /> 
          {children} 
          <Footer />
        </main>
      </body>
    </html>
  );
}
