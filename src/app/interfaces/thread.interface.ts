export interface Thread {
    id: number;
    parent_forum: number;
    name: string;
    slug: string;
    description: string;
    is_closed: boolean;
    created_by: number;
    created_at: Date;
    updated_at: Date;
    is_pinned: boolean;
    global_pin: boolean;
}