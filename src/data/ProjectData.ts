// src/data/ProjectData.ts
import type { SiteImageItem } from '@data/ImageData';
import type {
    IndustrySectorLabel,
    PackageLevelLabel
} from '@data/ProjectOptions';

export interface ProjectItem {
    id: number;
    title: string;
    description: string;
    techStack?: string;
    liveUrl?: string;
    siteImageId?: number;
    siteImage?: SiteImageItem;
    package: PackageLevelLabel;
    featured: boolean;
    displayOrder: number;
    completedOn?: string;
    isPublic: boolean;
    industry: IndustrySectorLabel;
    clientName?: string;
}