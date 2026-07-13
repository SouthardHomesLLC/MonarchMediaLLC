export interface SiteImageItem {
    id: number;
    fileName: string;
    storagePath: string;
    altText?: string;
    publicUrl: string;
    createdAtUtc: string;
}

export interface ProjectItem {
    id: number;
    title: string;
    description: string;
    techStack?: string;
    liveUrl?: string;
    siteImageId?: number;
    siteImage?: SiteImageItem; // Nested object matching SiteImageDto
    package: number;
    featured: boolean;
    displayOrder: number;
    completedOn?: string;
    isPublic: boolean;
    industry: number;
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


