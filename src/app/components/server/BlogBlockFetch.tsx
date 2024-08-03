import React from 'react';
import { BlogBlock } from '../client/home/BlogBlock';
import { DummyData } from '@/app/tool/dummyData';

export const BlogFetch = React.memo(async () => {
    return <BlogBlock blogsData={DummyData.blogData} />;
});

BlogFetch.displayName = 'BlogFetch';