import { getHashnodePost, getHashnodePosts } from '../../../lib/hashnode';
  import { notFound } from 'next/navigation';
  import Link from 'next/link';

  export async function generateStaticParams() {
    const posts = await getHashnodePosts();
    return posts.map((post) => ({ slug: post.slug }));
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
        <div className="fixed inset-0 flex items-center justify-center z-0 pointer-events-none">
          <div className="h-[600px] w-[600px] bg-gradient-to-r from-purple-500 via-pink-400 to-yellow-300 rounded-full blur-[160px]
  opacity-20" />
        </div>

        <div className="relative z-10 max-w-3xl mx-auto px-4">
          <Link
            href="/blogs"
            className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white transition mb-8"
          >
            ← Back to Blogs
          </Link>

          {post.coverImage?.url && (
            <div className="w-full h-64 md:h-80 rounded-xl overflow-hidden mb-8">
              <img
                src={post.coverImage.url}
                alt={post.title}
                className="w-full h-full object-cover"
              />
            </div>
          )}

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

          <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
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
            <span>{post.author?.name}</span>
            <span>·</span>
            <span>{post.publishedAt.split('T')[0]}</span>
            <span>·</span>
            <span>{post.readTimeInMinutes} min read</span>
          </div>

          <article
            className="blog-content"
            dangerouslySetInnerHTML={{ __html: post.content.html }}
          />
        </div>
      </div>
    );
  }
