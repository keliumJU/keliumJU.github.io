import matter from "gray-matter";

export interface PostData {
  slug: string;
  title: string;
  date: string;
  author: string;
  content: string;
}

const modules = import.meta.glob("../content/*.md", {
  query: "?raw",
  import: "default",
});

export const getPosts = async (): Promise<PostData[]> => {
  const posts: PostData[] = [];

  for (const path in modules) {
    const rawContent = (await modules[path]()) as string;
    const { data, content } = matter(rawContent);

    let dateString = data.date;
    if (data.date instanceof Date) {
      dateString = data.date.toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      });
    }

    posts.push({
      ...data,
      date: dateString,
      content,
    } as PostData);
  }

  return posts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );
};

export const getPostBySlug = async (
  slug: string,
): Promise<PostData | undefined> => {
  const posts = await getPosts();
  return posts.find((post) => post.slug === slug);
};
