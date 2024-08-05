import { DummyData } from '@/tool/dummyData';
import { BlogType } from '@/store/blog';
import { BlogPage } from '@/components/client/blog/BlogPage';

export const generateStaticParams = async () => {
  const blogData: BlogType[] = DummyData.blogData;
  return blogData.map((blog: BlogType) => ({
    uid: blog.uid,
  }));
};

const Blog = ({ params }: { params: { uid: string } }) => {
  return <BlogPage uid={params.uid} />
};

export default Blog;
