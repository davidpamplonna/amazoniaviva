export interface Project {
    id: number;
    title: string;
    category: 'indigenous-rights' | 'reforestation' | 'wildlife-protection';
    description: string;
    image: string;
}

export interface NewsItem {
    id: number;
    title: string;
    image: string;
    date: string;
    category: string;
    excerpt: string;
}