import { Forum } from './forum.interface';

export interface Category {
    // Retrieved from API
    id: number;
    name: string;
    image?: string;
    color?: string;
    created_at: Date;
    updated_at: Date;
    description?: string;
    // Second call to API to get its associated forums
    forums?: Forum[];
}