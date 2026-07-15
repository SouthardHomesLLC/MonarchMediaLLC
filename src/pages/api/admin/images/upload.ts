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

export const POST: APIRoute = async ({
    request,
    cookies
}) => {
    const token =
        cookies.get('admin_token')?.value;

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
        const formData =
            await request.formData();

        const response = await fetch(
            `${API_BASE_URL}/api/admin/images/upload`,
            {
                method: 'POST',
                headers: {
                    Authorization:
                        `Bearer ${token}`
                },
                body: formData
            }
        );

        const responseText =
            await response.text();

        if (!response.ok) {
            return jsonResponse(
                {
                    error:
                        responseText ||
                        'Failed to upload image.'
                },
                response.status
            );
        }

        return new Response(responseText, {
            status: response.status,
            headers: {
                'Content-Type':
                    response.headers.get(
                        'Content-Type'
                    ) ?? 'application/json'
            }
        });
    } catch (error) {
        console.error(
            'Image upload proxy failed:',
            error
        );

        return jsonResponse(
            { error: 'Unable to upload image.' },
            500
        );
    }
};