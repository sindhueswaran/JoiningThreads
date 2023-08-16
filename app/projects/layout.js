import {
  BASE_PATH,
  SITE_TITLE,
  SITE_DESC,
  SITE_KEYWORDS,
} from "@/lib/constants";

export const metadata = {
  title: `Projects | ${SITE_TITLE}`,
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
    canonical: "/projects",
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

export default function PageLayout({ children }) {
  return (
    <section> 
      {children} 
    </section>
  );
}
