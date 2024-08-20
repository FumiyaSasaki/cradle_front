import { ImageContentType } from '@/types/Common.type';
import { create } from 'zustand';

export type BlogType = {
    uid: string;
    title: string;
    content: string;
    imageContents: ImageContentType[];
    updatedAt: Date;
};

type Actions = {
    setBlogState: (newBlogs: BlogType[]) => void;
};

type BlogStateType = { blogState: { [key: string]: BlogType } };

export const useBlogStore = create<BlogStateType & Actions>(set => ({
    blogState: {},
    setBlogState: (newBlogs: BlogType[]) => set(state => {
        newBlogs.forEach(blog => {
            state.blogState[blog.uid] = blog
        });
        return ({ blogState: state.blogState });
    })
}));

