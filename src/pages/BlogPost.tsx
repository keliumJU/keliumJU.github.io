import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import { getPostBySlug, type PostData } from "../utils/posts";

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<PostData | null>(null);

  useEffect(() => {
    if (slug) {
      getPostBySlug(slug).then((data) => setPost(data || null));
    }
  }, [slug]);

  if (!post) return <div className="p-6">Loading...</div>;

  return (
    <div className="max-w-3xl mx-auto p-6">
      <header className="mb-8 border-b border-gray-200 pb-4">
        <h1 className="text-4xl font-bold mb-2">{post.title}</h1>
        <p className="text-gray-500">
          {post.date} by {post.author}
        </p>
      </header>

      {/*
        Tailwind 4 'prose' works exactly the same way.
        It converts the raw HTML from ReactMarkdown into styled elements.
      */}
      <article className="prose prose-lg prose-blue max-w-none">
        <ReactMarkdown>{post.content}</ReactMarkdown>
      </article>
    </div>
  );
};

export default BlogPost;
