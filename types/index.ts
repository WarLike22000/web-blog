export interface ButtonProps {
    children: React.ReactNode;
    className?: string
    onClick?: () => void;
};

export interface BlogCardProps {
    id: number;
    title: string;
    description: string;
    image: string;
    date: number;
    category: string;
    author: string;
    authorImage: string;
};