// src/pages/api/admin/team.ts
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

export const POST: APIRoute = async ({ request, cookies }) => {
    const token = cookies.get('admin_token')?.value;

    if (!token) {
        return jsonResponse(
            { error: 'Unauthorized' },
            401
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
            `${API_BASE_URL}/api/admin/team`,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`
                },
                body: JSON.stringify(body)
            }
        );

        const responseText = await response.text();

        if (!response.ok) {
            return jsonResponse(
                {
                    error:
                        responseText ||
                        'Failed to create team member'
                },
                response.status
            );
        }

        if (!responseText) {
            return jsonResponse(
                { success: true },
                201
            );
        }

        return new Response(responseText, {
            status: 201,
            headers: {
                'Content-Type':
                    response.headers.get('Content-Type') ??
                    'application/json'
            }
        });
    } catch (error) {
        console.error(
            'Failed to create team member:',
            error
        );

        return jsonResponse(
            { error: 'Unable to create team member.' },
            500
        );
    }
};