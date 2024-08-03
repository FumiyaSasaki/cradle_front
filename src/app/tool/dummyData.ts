import { BlogType } from "../store/blog";

export namespace DummyData {
    export const imageUrl = 'http://fs561381.xsrv.jp/img/test.png';

    export const blogData: BlogType[] = [
        { uid: 'news123456789', title: 'title1', content: 'content1content1content1content1content1content1content1content1content1', imageUrls: [imageUrl], updatedAt: new Date() },
        { uid: 'news123456789', title: 'title1', content: 'content1', imageUrls: [imageUrl], updatedAt: new Date() },
    ];

    export const data = [
        { title: '/Users/fumiyasasaki/Desktop/workspace/develop/cradle/front/public/home/topImageDummy.png' },
        { title: 'aaaa2' },
        { title: 'aaaa3' },
        { title: 'aaaa4' },
    ];
};