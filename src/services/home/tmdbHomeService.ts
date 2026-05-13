import { HomeScreenData, MediaListItem } from "../../types/media";
import { tmdbGet } from "../api/tmdbClient";
import { TMDB_IMAGE_BASE_URL } from "../api/tmdbConfig";

type TmdbMediaItem = {
    id: number;
    title?: string;
    name?: string;
    poster_path: string | null;
    vote_average: number;
    release_date?: string;
    first_air_date?: string;
    media_type?: "movie" | "tv";
}

type TmdbListResponse = {
    results: TmdbMediaItem[];
}

function toMediaListResponse (
    item: TmdbMediaItem,
    fallbackType: "movie" | "tv" = "movie"
): MediaListItem {
    const type = item.media_type ?? fallbackType;
    const title = item.title ?? item.name ?? "Untitled";
    const dateStr = item.release_date ?? item.first_air_date ?? "";
    const year = dateStr ? new Date(dateStr).getFullYear() : 0;
    const posterUrl = item.poster_path ? `${TMDB_IMAGE_BASE_URL}${item.poster_path}` : 'https://placehold.co/300x450/222c35/f9f8ff?text=No+Image';

    return {
        id: String(item.id),
        title,
        year,
        rating: Number(item.vote_average.toFixed(1)),
        type,
        posterUrl
    }
}

export async function getTmdbHomeScreenData(): Promise<HomeScreenData> {
    const [trending, nowPlaying] = await Promise.all([
        tmdbGet<TmdbListResponse>("/trending/all/week"),
        tmdbGet<TmdbListResponse>("/movie/now_playing"),
    ]);

    const featuredRaw = trending.results[0];
    const featuredItem = featuredRaw 
        ? {
            id: String(featuredRaw.id),
            title: featuredRaw.title ?? featuredRaw.name ?? "Untitled",
            imageUrl: featuredRaw.poster_path
                ? `${TMDB_IMAGE_BASE_URL}${featuredRaw.poster_path}`
                : 'https://placehold.co/1200x600/1c252d/f9f8ff?text=Featured',
        }
        : null;

    return {
        categories: ["All", "Action", "Comedy", "Drama", "Sci-Fi"],
        featuredItem,
        sections: [
            {
                id: "trending",
                title: "Trending",
                items: trending.results.slice(1, 10).map(item => toMediaListResponse(item)),
            },
            {
                id: "in_theaters",
                title: "In Theaters",
                items: nowPlaying.results.slice(0, 10).map(item => toMediaListResponse(item, "movie"))
            }
        ]
    }
}