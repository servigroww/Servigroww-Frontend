import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://www.servigrow.com",
      lastModified: new Date(),
    },
    {
      url: "https://www.servigrow.com/about",
      lastModified: new Date(),
    },
    {
      url: "https://www.servigrow.com/contact",
      lastModified: new Date(),
    },
    // Add more pages dynamically if needed
  ];
}
