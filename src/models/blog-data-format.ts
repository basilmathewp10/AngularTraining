export interface BlogDataFormat {
    articleId: number;
    articleTitle: string;
    articleDesc: string;
    thumbImg: string;
    pubDate: string;
    category: string;
    articleContent: {
        heading: string;
        paragraphs: string[];
    }[];
}