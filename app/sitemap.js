import { BASE_PATH } from "@/lib/constants";
export default function sitemap() {
  return [
    {
      url: `${BASE_PATH}`,
      lastModified: new Date(),
    },
  ];
}
