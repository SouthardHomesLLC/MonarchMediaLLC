import type { APIRoute } from 'astro';

export const prerender = false;

const API_BASE_URL =
    import.meta.env.AZURE_API_URL;

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

function validateId(
    value: string | undefined
): number | null {
    if (!value) {
        return null;
    }

    const id = Number(value);

    return Number.isInteger(id) && id > 0
        ? id
        : null;
}

export const PUT: APIRoute = async ({
    params,
    request,
    cookies
}) => {
    const token =
        cookies.get('admin_token')?.value;

    const imageId =
        validateId(params.id);

    if (!token) {
        return jsonResponse(
            { error: 'Unauthorized' },
            401
        );
    }

    if (!imageId) {
        return jsonResponse(
            { error: 'A valid image ID is required.' },
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
            `${API_BASE_URL}/api/admin/images/${imageId}`,
            {
                method: 'PUT',
                headers: {
                    'Content-Type':
                        'application/json',
                    Authorization:
                        `Bearer ${token}`
                },
                body: JSON.stringify(body)
            }
        );

        if (!response.ok) {
            const responseText =
                await response.text();

            return jsonResponse(
                {
                    error:
                        responseText ||
                        'Failed to update image.'
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
            `Image update proxy failed for ${imageId}:`,
            error
        );

        return jsonResponse(
            { error: 'Unable to update image.' },
            500
        );
    }
};

export const DELETE: APIRoute = async ({
    params,
    cookies
}) => {
    const token =
        cookies.get('admin_token')?.value;

    const imageId =
        validateId(params.id);

    if (!token) {
        return jsonResponse(
            { error: 'Unauthorized' },
            401
        );
    }

    if (!imageId) {
        return jsonResponse(
            { error: 'A valid image ID is required.' },
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
            `${API_BASE_URL}/api/admin/images/${imageId}`,
            {
                method: 'DELETE',
                headers: {
                    Authorization:
                        `Bearer ${token}`
                }
            }
        );

        if (!response.ok) {
            const responseText =
                await response.text();

            return jsonResponse(
                {
                    error:
                        responseText ||
                        'Failed to delete image.'
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
            `Image deletion proxy failed for ${imageId}:`,
            error
        );

        return jsonResponse(
            { error: 'Unable to delete image.' },
            500
        );
    }
};