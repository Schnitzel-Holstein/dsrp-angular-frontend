export interface Post {
    id: number;
    parent_thread: number;
    name: string;
    description: string;
    content: string;
    created_by: number;
    created_at: Date;
    updated_at: Date;
}