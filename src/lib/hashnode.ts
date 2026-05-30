import data from '../data/blogs.json';

  export interface HashnodePost {
    title: string;
    brief: string;
    slug: string;
    coverImage: { url: string };
    publishedAt: string;
  }

  export interface HashnodeFullPost extends HashnodePost {
    content: { html: string };
    tags: { name: string }[];
    author: { name: string; profilePicture: string };
    readTimeInMinutes: number;
  }

  export async function getHashnodePosts(): Promise<HashnodePost[]> {
    return (data as any).posts as HashnodePost[];
  }

  export async function getHashnodePost(slug: string): Promise<HashnodeFullPost | null> {
    return ((data as any).fullPosts[slug] as HashnodeFullPost) ?? null;
  }