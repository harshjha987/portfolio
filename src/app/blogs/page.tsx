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
    <div className="p-6 mt-30 text-center  mx-auto  ">
      <h1 className="text-4xl font-bold mb-6">My Blog Posts</h1>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-1 gap-6 text-start max-w-7xl p-4">
          {posts.map((post) => (
            <a
              key={post.title}
              href={`https://yourharsh.hashnode.dev/${post.slug}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 border rounded-lg hover:shadow-lg transition font-mono"
            >
              
              <h2 className="text-xl font-semibold mt-4">{post.title}</h2>
              <p className="text-gray-600 mt-2">{post.brief}</p>
              <p className="text-sm font-medium font-mono mt-2">
                <span className='font-medium font-mono text-white'>Published on</span> {post.publishedAt.toString().split('T')[0]}
              </p>
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
