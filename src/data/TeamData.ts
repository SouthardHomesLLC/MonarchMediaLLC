import type { SiteImageItem } from '@data/ImageData';

export interface TeamMemberItem {
    id: number;
    name: string;
    title: string;
    siteImageId?: number | null;
    siteImage?: SiteImageItem | null;
}