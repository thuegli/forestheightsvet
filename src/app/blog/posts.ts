import fs from "fs";
import path from "path";

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  description: string;
  category: string;
  content: string;
}

function loadPosts(dir: string): BlogPost[] {
  const fullPath = path.join(process.cwd(), dir);
  if (!fs.existsSync(fullPath)) return [];

  return fs
    .readdirSync(fullPath)
    .filter((f) => f.endsWith(".json"))
    .map((f) => {
      const raw = fs.readFileSync(path.join(fullPath, f), "utf-8");
      const data = JSON.parse(raw);
      return { slug: f.replace(/\.json$/, ""), ...data } as BlogPost;
    });
}

const posts: BlogPost[] = loadPosts("content/blog/published");

export default posts;
