export interface SiteImageItem {
    id: number;
    fileName: string;
    storagePath: string;
    altText?: string | null;
    publicUrl: string;
    createdAtUtc: string;
}