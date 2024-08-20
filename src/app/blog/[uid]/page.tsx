import { BlogType } from '@/store/blog';
import { BlogPage } from '@/components/client/blog/BlogPage';
import { getAllBlog } from '@/core/api';

export const generateStaticParams = async () => {
  const blogData: BlogType[] = await getAllBlog();
  return blogData.map((blog: BlogType) => ({
    uid: blog.uid,
  }));
};

const Blog = ({ params }: { params: { uid: string } }) => {
  return <BlogPage uid={params.uid} />
};

export default Blog;
