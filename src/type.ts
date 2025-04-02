export interface Project {
    id: number;
    title: string;
    categoria: 'indigenous' | 'reforestaion' | 'wildlife-protection';
    description: string;
    image: string;
}

export interface NewsItem {
    id: number;
    title: string;
    description: string;
    image: string;
    date: string;
    category: string;
    excerpt: string;
}