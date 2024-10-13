import { BlogType } from '@/store/blog';
import { BlogPage } from '@/components/client/blog/BlogPage';
import { getAllBlog, getBlogByUid } from '@/core/api';

export const generateStaticParams = async () => {
  const blogData: BlogType[] = await getAllBlog();
  return blogData.map((blog: BlogType) => ({
    uid: blog.uid,
  }));
};

const Blog = async ({ params }: { params: { uid: string } }) => {
  const blog: BlogType = await getBlogByUid(params.uid);
  return <BlogPage blog={blog} />
};

export default Blog;
