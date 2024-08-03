import React from 'react';
import { NewsType } from '../store/news';
import { NewsList } from './NewsList';
const imgUrl = 'http://fs561381.xsrv.jp/img/test.png';

export const NewsFetch = React.memo(async () => {
    const newsData: NewsType[] = [
        { id: 1, uid: 'news123456789', title: 'title1', content: 'content1content1content1content1content1content1content1content1content1', imageUrls: [imgUrl], updatedAt: new Date() },
        { id: 2, uid: 'news123456789', title: 'title1', content: 'content1', imageUrls: [imgUrl], updatedAt: new Date() },
    ];
    return <NewsList newsData={newsData} />;
});

NewsFetch.displayName = 'NewsFetch';