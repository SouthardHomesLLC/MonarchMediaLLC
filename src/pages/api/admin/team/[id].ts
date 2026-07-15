// src/pages/api/admin/team/[id].ts
import type { APIRoute } from 'astro';
export const prerender = false;

const API_BASE_URL = import.meta.env.AZURE_API_URL;

const jsonResponse = (
    body: unknown,
    status: number
): Response =>
    new Response(JSON.stringify(body), {
        status,
        headers: {
            'Content-Type': 'application/json'
        }
    });

const getToken = (
    cookies: Parameters<APIRoute>[0]['cookies']
): string | undefined =>
    cookies.get('admin_token')?.value;

export const PUT: APIRoute = async ({
    params,
    request,
    cookies
}) => {
    const id = params.id;
    const token = getToken(cookies);

    if (!token) {
        return jsonResponse(
            { error: 'Unauthorized' },
            401
        );
    }

    if (!id) {
        return jsonResponse(
            { error: 'Team member ID is required.' },
            400
        );
    }

    if (!API_BASE_URL) {
        return jsonResponse(
            { error: 'API URL is not configured.' },
            500
        );
    }

    try {
        const body = await request.json();

        const response = await fetch(
            `${API_BASE_URL}/api/admin/team/${id}`,
            {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`
                },
                body: JSON.stringify(body)
            }
        );

        if (!response.ok) {
            const errorText = await response.text();

            return jsonResponse(
                {
                    error:
                        errorText ||
                        'Failed to update team member'
                },
                response.status
            );
        }

        return jsonResponse(
            { success: true },
            200
        );
    } catch (error) {
        console.error(
            `Failed to update team member ${id}:`,
            error
        );

        return jsonResponse(
            { error: 'Unable to update team member.' },
            500
        );
    }
};

export const DELETE: APIRoute = async ({
    params,
    cookies
}) => {
    const id = params.id;
    const token = getToken(cookies);

    if (!token) {
        return jsonResponse(
            { error: 'Unauthorized' },
            401
        );
    }

    if (!id) {
        return jsonResponse(
            { error: 'Team member ID is required.' },
            400
        );
    }

    if (!API_BASE_URL) {
        return jsonResponse(
            { error: 'API URL is not configured.' },
            500
        );
    }

    try {
        const response = await fetch(
            `${API_BASE_URL}/api/admin/team/${id}`,
            {
                method: 'DELETE',
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
        );

        if (!response.ok) {
            const errorText = await response.text();

            return jsonResponse(
                {
                    error:
                        errorText ||
                        'Failed to delete team member'
                },
                response.status
            );
        }

        return jsonResponse(
            { success: true },
            200
        );
    } catch (error) {
        console.error(
            `Failed to delete team member ${id}:`,
            error
        );

        return jsonResponse(
            { error: 'Unable to delete team member.' },
            500
        );
    }
};