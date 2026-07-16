// src/data/ProjectData.ts
import type { SiteImageItem } from '@data/ImageData';
import type { PackageLevelLabel, IndustrySectorLabel } from '@data/ProjectOptions';

export interface ProjectItem {
    id: number;
    title: string;
    description: string;
    techStack?: string;
    liveUrl?: string;
    siteImageId?: number;
    siteImage?: SiteImageItem; //Nested object mapping
    package: PackageLevelLabel; //Strictly typed: "Core" | "Professional" | "Premium"
    featured: boolean;
    displayOrder: number;
    completedOn?: string;
    isPublic: boolean;
    industry: IndustrySectorLabel; //Strictly typed: "General" | "Construction" | ...
    clientName?: string;
}

export interface Database {
    public: {
        Tables: {
            MMLLC_Projects: {
                Row: ProjectItem;
            };
        };
    };
}