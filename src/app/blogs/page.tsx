import { getHashnodePosts } from "../../lib/hashnode";
  import Link from "next/link";

  export default async function BlogsPage() {
    const posts = await getHashnodePosts();

    return (
      <div className="relative px-4 pt-28 pb-20 isolate flex items-center justify-center min-h-screen bg-black text-white">
        <div className="absolute inset-0 flex items-center justify-center z-0">
          <div className="h-[600px] w-[600px] bg-gradient-to-r from-purple-500 via-pink-400 to-yellow-300 rounded-full blur-[120px]
  opacity-30" />
        </div>

        <div className="relative z-10 w-full max-w-5xl text-center">
          <h1 className="text-4xl font-mono mb-3 text-transparent font-semibold bg-gradient-to-r from-purple-400 to-pink-500
  bg-clip-text">My Blogs</h1>
  <p className="text-gray-400 text-sm mb-6 font-mono">Things I learned, built, or just had to write about.</p>

          <div className="grid grid-cols-1 gap-6">
            {posts.map((post, index) => (
    <Link
      key={post.slug}
      href={`/blogs/${post.slug}`}
      className="p-4 border border-white/20 rounded-lg hover:shadow-lg transition font-mono bg-black/30 backdrop-blur-md text-left
  block"
    >
      {index === 0 && (
        <span className="inline-block text-xs font-semibold px-2 py-0.5 rounded-full bg-purple-500/20 text-purple-300 border
  border-purple-500/30 mb-3">
          ✦ Recent
        </span>
      )}
                
                <h2 className="text-xl font-semibold">{post.title}</h2>
                <p className="text-gray-300 mt-2 line-clamp-1">{post.brief}</p>
                <p className="text-sm text-gray-400 mt-4">
                  Published on {post.publishedAt.toString().split("T")[0]}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    );
  }
