export interface Admin {
    id: number;
    username: string;
    isActive: boolean;
    createdAtUtc: string;
}

export interface CreateAdminRequest {
    username: string;
    password: string;
    isActive: boolean;
}

export interface UpdateAdminRequest {
    username: string;
    newPassword?: string;
    isActive: boolean;
}
