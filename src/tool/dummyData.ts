import { BlogType } from '../store/blog';

export namespace DummyData {
    export const imageUrl = 'http://fs561381.xsrv.jp/img/test.png';

    export const blogData: BlogType[] = [
        { uid: 'news123456789', title: 'title1', content: 'content1content1content1content1content1content1content1content1content1', imageUrls: [imageUrl], updatedAt: new Date() },
        { uid: 'news123456789', title: 'title1', content: 'content1', imageUrls: [imageUrl], updatedAt: new Date() },
    ];
};