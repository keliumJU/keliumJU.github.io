import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getPosts, type PostData } from "../utils/posts";

const randomBorders = [
  "h-0.5 w-full bg-gray-200 mt-4",
  "h-0.5 w-full bg-brand-yellow mt-4",
  "h-0.5 w-full bg-gray-200 mt-4 group-hover:bg-brand-cyan transition-colors",
];
const randomTitleDecoration = [
  "text-xl font-bold",
  "text-xl font-bold group-hover:decoration-wavy group-hover:underline",
  "text-xl font-bold border-b-4 border-brand-pink inline-block pb-1",
  "text-xl font-bold group-hover:text-brand-cyan transition-colors",
];

const seedBorder = Math.floor(Math.random() * (2 - 0 + 1)) + 0;
const seedTitle = Math.floor(Math.random() * (3 - 0 + 1)) + 0;

const BlogList = () => {
  const [posts, setPosts] = useState<PostData[]>([]);

  useEffect(() => {
    getPosts().then(setPosts);
  }, []);

  return (
    <div className="space-y-6">
      {posts.map((post) => (
        <Link key={post.slug} to={`/blog/${post.slug}`}>
          <div className="group cursor-pointer">
            <p className="text-gray-500 text-sm font-bold mb-1">
              {post.date} • {post.author}
            </p>
            <h3 className={randomTitleDecoration[seedTitle]}>{post.title}</h3>
            <div className={randomBorders[seedBorder]}></div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default BlogList;
