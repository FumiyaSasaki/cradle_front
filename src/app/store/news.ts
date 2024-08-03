import { create } from 'zustand';

export type NewsType = {
    id: number;
    uid: string;
    title: string;
    content: string;
    imageUrls: string[];
    updatedAt: Date;
};

type Actions = {
    setNews: (newProperties: NewsType[]) => void;
};

type News = { newsState: { [key: string]: NewsType } };

export const useNewsStore = create<News & Actions>((set) => ({
    newsState: {},
    setNews: (newNews: NewsType[]) => set(state => {
        newNews.forEach(news => {
            state.newsState[news.uid] = news
        });
        return ({ newsState: state.newsState });
    })
}));

