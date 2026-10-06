import { getHashnodePost, getHashnodePosts } from '../../../lib/hashnode';
  import { notFound } from 'next/navigation';
  import Link from 'next/link';
import ShareButton from "../../../components/ShareButton";

 import { getHashnodePost } from '../../../lib/hashnode';

  

  

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.brief,
    author: {
      "@type": "Person",
      name: "Harsh Ranjan Jha",
      url: "https://hrjhaa.me",
    },
    publisher: {
      "@type": "Person",
      name: "Harsh Ranjan Jha",
      url: "https://hrjhaa.me",
    },
    datePublished: post.publishedAt,
    url: `https://hrjhaa.me/blogs/${slug}`,
    keywords: post.tags?.map((t) => t.name).join(", "),
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://hrjhaa.me/blogs/${slug}`,
    },
  };


  

  
   export async function generateMetadata({
    params,
  }: {
    params: Promise<{ slug: string }>;
  }) {
    const { slug } = await params;
    const post = await getHashnodePost(slug);

    if (!post) return { title: "Post Not Found" };

    const keywords = post.tags?.map((t) => t.name) ?? [];

    return {
      title: post.title,
      description: post.brief,
      keywords: [...keywords, "Harsh Ranjan Jha", "Harsh blog"],
      alternates: {
        canonical: `https://hrjhaa.me/blogs/${slug}`,
      },
      openGraph: {
        title: post.title,
        description: post.brief,
        type: "article",
        url: `https://hrjhaa.me/blogs/${slug}`,
        publishedTime: post.publishedAt,
        authors: ["Harsh Ranjan Jha"],
        images: [],    // no cover image in social previews
      },
      twitter: {
        card: "summary",   // text-only card, no image
        title: post.title,
        description: post.brief,
        creator: "@thattallboy987",
        images: [],
      },
    };
  }


  export default async function BlogPostPage({
    params,
  }: {
    params: Promise<{ slug: string }>;
  }) {
    const { slug } = await params;
    const post = await getHashnodePost(slug);

    if (!post) notFound();

    return (
      <div className="relative isolate min-h-screen bg-black text-white pt-24 pb-20">
         <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
        <div className="fixed inset-0 flex items-center justify-center z-0 pointer-events-none">
          <div className="h-[600px] w-[600px] bg-gradient-to-r from-purple-500 via-pink-400 to-yellow-300 rounded-full blur-[160px]
  opacity-20" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4">
          <Link
            href="/blogs"
            className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white transition mb-8"
          >
            ← Back to Blogs
          </Link>

          

          {post.tags?.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-4">
              {post.tags.map((tag) => (
                <span
                  key={tag.name}
                  className="text-xs px-3 py-1 rounded-full bg-white/10 text-gray-300 font-mono"
                >
                  #{tag.name}
                </span>
              ))}
            </div>
          )}

          <h1 className="text-3xl md:text-4xl font-semibold mb-4 leading-tight
          text-transparent bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text">
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center gap-3 text-sm text-gray-400 mb-8 border-b border-white/10 pb-6">
            {post.author?.profilePicture && (
              <img
                src={post.author.profilePicture}
                alt={post.author.name}
                className="w-8 h-8 rounded-full"
              />
            )}
            <span className = "font-mono">Written by<span className = "font-bold text-white"> {post.author?.name}</span></span>
            
            <span className = "ml-4 font-mono">Published on <span className = "font-bold text-white">{post.publishedAt.split('T')[0]}</span></span>
            <span>·</span>
            <span>{post.readTimeInMinutes} min read</span>
             <ShareButton title={post.title} />
          </div>

          <article
            className="blog-content"
            dangerouslySetInnerHTML={{ __html: post.content.html }}
          />
        </div>
      </div>
    );
  }
