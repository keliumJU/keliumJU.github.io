import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getPosts, type PostData } from "../utils/posts";

const BlogList = () => {
  const [posts, setPosts] = useState<PostData[]>([]);

  useEffect(() => {
    getPosts().then(setPosts);
  }, []);

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-8">Blog</h1>
      <div className="grid gap-6">
        {posts.map((post) => (
          <Link
            key={post.slug}
            to={`/blog/${post.slug}`}
            className="block p-6 border border-gray-200 rounded-lg hover:shadow-lg transition bg-white"
          >
            <h2 className="text-2xl font-semibold mb-2">{post.title}</h2>
            <p className="text-gray-500 text-sm">
              {post.date} • {post.author}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BlogList;
