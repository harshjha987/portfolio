'use client';

import { useEffect, useState } from 'react';
import { getHashnodePosts } from "../../lib/hashnode";
import { HashnodePost } from "../../lib/hashnode";

export default function BlogsPage() {
  const [posts, setPosts] = useState<HashnodePost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      const data = await getHashnodePosts();
      setPosts(data);
      setLoading(false);
    };

    fetchPosts();
  }, []);

  return (
    <div className="relative px-4 pt-28 pb-20 isolate flex items-center justify-center min-h-screen bg-black text-white">
      {/* Glowing blurred blob behind */}
      <div className="absolute inset-0 flex items-center justify-center z-0">
        <div className="h-[600px] w-[600px] bg-gradient-to-r from-purple-500 via-pink-400 to-yellow-300 rounded-full blur-[120px] opacity-30" />
      </div>
  
      {/* Foreground content */}
      <div className="relative z-10 w-full max-w-5xl text-center">
        <h1 className="text-4xl font-bold mb-10">My Blog Posts</h1>
  
        {loading ? (
          <p>Loading...</p>
        ) : (
          <div className="grid grid-cols-1  gap-6">
            {posts.map((post) => (
              <a
                key={post.title}
                href={`https://yourharsh.hashnode.dev/${post.slug}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 border border-white/20 rounded-lg hover:shadow-lg transition font-mono bg-black/30 backdrop-blur-md text-left"
              >
                <h2 className="text-xl font-semibold">{post.title}</h2>
                <p className="text-gray-300 mt-2">{post.brief}</p>
                <p className="text-sm font-medium mt-4">
                  <span className="font-medium text-white">Published on</span>{" "}
                  {post.publishedAt.toString().split("T")[0]}
                </p>
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}  