// src/lib/api.ts
const API_BASE_URL = import.meta.env.AZURE_API_URL;

export async function fetchApi<T>(
    endpoint: string,
    init?: RequestInit
): Promise<T> {
    if (!API_BASE_URL) {
        throw new Error(
            'AZURE_API_URL is not configured.'
        );
    }

    const response = await fetch(
        `${API_BASE_URL}${endpoint}`,
        init
    );

    if (!response.ok) {
        const responseText =
            await response.text();

        throw new Error(
            responseText ||
            `API request failed: ${response.status} ${response.statusText}`
        );
    }

    if (response.status === 204) {
        return undefined as T;
    }

    return response.json() as Promise<T>;
}