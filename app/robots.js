import { BASE_PATH } from "@/lib/constants";
export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/private/",
    },
    sitemap: `${BASE_PATH}/sitemap.xml`,
  };
}
