export interface Forum {
    id: number;
    parent_forum: number;
    name: string;
    slug: string;
    description?: string;
    created_at: Date;
    updated_at: Date;
    image?: string;
    category: number;
}