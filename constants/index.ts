import { BlogCardProps } from "@/types";
import { FilePlus2, Newspaper, UserCog } from "lucide-react";

export const buttonCategory = [
    {
        label: "All",
        name: "all",
    },
    {
        label: "Lifestyle",
        name: "lifestyle",
    },
    {
        label: "Technology",
        name: "technology",
    },
    {
        label: "Startup",
        name: "startup",
    },
];

export const blogs: BlogCardProps[] = [
    {
        id: 1,
        title: "test title",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        image: "/assets/placeholder.jpg",
        category: "lifestyle",
        author: "Alireza",
        authorImage: "/assets/placeholder.jpg",
    },
    {
        id: 2,
        title: "test title",
        description: "test descriptiontest descriptiontest descriptiontest descriptiontest descriptiontest descriptiontest descriptiontest descriptiontest descriptiontest descriptiontest descriptiontest descriptiontest description",
        image: "/assets/placeholder.jpg",
        category: "startup",
        author: "Alireza",
        authorImage: "/assets/placeholder.jpg",
    },
    {
        id: 3,
        title: "test title",
        description: "test descriptiontest descriptiontest descriptiontest descriptiontest descriptiontest descriptiontest descriptiontest descriptiontest descriptiontest descriptiontest descriptiontest descriptiontest description",
        image: "/assets/placeholder.jpg",
        category: "lifestyle",
        author: "Alireza",
        authorImage: "/assets/placeholder.jpg",
    },
    {
        id: 4,
        title: "test title",
        description: "test descriptiontest descriptiontest descriptiontest descriptiontest descriptiontest descriptiontest descriptiontest descriptiontest descriptiontest descriptiontest descriptiontest descriptiontest description",
        image: "/assets/placeholder.jpg",
        category: "lifestyle",
        author: "Alireza",
        authorImage: "/assets/placeholder.jpg",
    },
    {
        id: 5,
        title: "test title",
        description: "test descriptiontest descriptiontest descriptiontest descriptiontest descriptiontest descriptiontest descriptiontest descriptiontest descriptiontest descriptiontest descriptiontest descriptiontest description",
        image: "/assets/placeholder.jpg",
        category: "technology",
        author: "Alireza",
        authorImage: "/assets/placeholder.jpg",
    },
    {
        id: 6,
        title: "test title",
        description: "test descriptiontest descriptiontest descriptiontest descriptiontest descriptiontest descriptiontest descriptiontest descriptiontest descriptiontest descriptiontest descriptiontest descriptiontest description",
        image: "/assets/placeholder.jpg",
        category: "lifestyle",
        author: "Alireza",
        authorImage: "/assets/placeholder.jpg",
    },
    {
        id: 7,
        title: "test title",
        description: "test descriptiontest descriptiontest descriptiontest descriptiontest descriptiontest descriptiontest descriptiontest descriptiontest descriptiontest descriptiontest descriptiontest descriptiontest description",
        image: "/assets/placeholder.jpg",
        category: "lifestyle",
        author: "Alireza",
        authorImage: "/assets/placeholder.jpg",
    },
];

export const sidebar = [
    {
        label: "Profile",
        href: "/profile",
        Icon: UserCog 
    },
    {
        label: "Create Blog",
        href: "/create-blog",
        Icon: FilePlus2 
    },
    {
        label: "My Blogs",
        href: "/my-blogs",
        Icon: Newspaper 
    },
];