import { TMDB_BASE_URL, TMDB_LANGUAGE, TMDB_TOKEN } from "./tmdbConfig";

type QueryParams = Record<string, string | number>;

export async function tmdbGet<T>(
    path: string,
    params: QueryParams = {}
): Promise<T> {
    const query = new URLSearchParams({
        language: TMDB_LANGUAGE,
        ...Object.fromEntries(
            Object.entries(params).map(([k, v]) => [k, String(v)]),
        ),
    }).toString();

    const url = `${TMDB_BASE_URL}${path}?${query}`;

    const response = await fetch(url, {
        headers: {
            Authorization: `Bearer ${TMDB_TOKEN}`,
            'Content-type': 'application/json',
        },
    });

    if(!response.ok) {
        throw new Error(`TMDB request failed: ${response.status} ${path}`);
    }

    const data = await response.json();
    return data as T;
}