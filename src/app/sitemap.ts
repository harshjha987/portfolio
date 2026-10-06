import { getHashnodePosts } from "@/lib/hashnode";
  import { MetadataRoute } from "next";

  export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const posts = await getHashnodePosts();

    const blogEntries = posts.map((post) => ({
      url: `https://hrjhaa.me/blogs/${post.slug}`,
      lastModified: new Date(post.publishedAt),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    }));

    return [
      { url: "https://hrjhaa.me", lastModified: new Date(), changeFrequency: "monthly", priority: 1 },
      { url: "https://hrjhaa.me/blogs", lastModified: new Date(), changeFrequency: "weekly", priority: 0.8 },
      ...blogEntries,
    ];
  }