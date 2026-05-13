import { MediaDetails } from "../../types/details";
import { MediaType } from "../../types/media";
import { tmdbGet } from "../api/tmdbClient";
import { TMDB_IMAGE_BASE_URL } from "../api/tmdbConfig";

type TmdbGenre = { id: number; name: string };

type TmdbCastMember = {
    id: number;
    name: string;
    profile_path: string | null;
}

type TmdbCredits = {
    cast: TmdbCastMember[];
}

type TmdbDetailsResponse = {
    id: number;
    title?: string;
    name?: string;
    overview: string;
    poster_path: string | null;
    backdrop_path: string | null;
    vote_average: number;
    release_date?: string;
    first_air_date?: string;
    runtime?: number;
    number_of_seasons?: number;
    genres: TmdbGenre[];
    credits: TmdbCredits;
}

export async function getTmdbMediaDetails (
    id: string,
    type: MediaType
): Promise<MediaDetails> {
    const path = type === "movie" ? `/movie/${id}` : `/tv/${id}`;

    const data = await tmdbGet<TmdbDetailsResponse>(path, {append_to_response: 'credits', });
    console.log("Data", data)

    const title = data.title ?? data.name ?? "Untitled";
    const dateStr = data.release_date ?? data.first_air_date ?? "";
    const year = dateStr ? new Date(dateStr).getFullYear() : 0;
    const posterUrl = data.poster_path ? `${TMDB_IMAGE_BASE_URL}${data.poster_path}` : 'https://placehold.co/300x450/222c35/f9f8ff?text=No+Image';
    const backdropUrl = data.backdrop_path ? `${TMDB_IMAGE_BASE_URL}${data.backdrop_path}` : 'https://placehold.co/300x450/222c35/f9f8ff?text=No+Image';

    const keyInfo = 
        type === "movie" 
            ? [
                {
                    id: 'runtime',
                    label: 'Runtime',
                    value: data.runtime ? `${data.runtime} min` : "N/A",
                },
                { id: 'year', label: "Year", value: String(year) },
                {
                    id: "rating",
                    label: "Rating",
                    value: data.vote_average.toFixed(1),
                }
            ] : [
                {
                    id: 'seasons',
                    label: "Seasons",
                    value: data.number_of_seasons ? String(data.number_of_seasons) : "N/A"
                },
                { id: 'year', label: "Year", value: String(year) },
                {
                    id: "rating",
                    label: "Rating",
                    value: data.vote_average.toFixed(1),
                }
            ];

    return {
        id: String(data.id),
        title,
        year,
        rating: Number(data.vote_average.toFixed(1)),
        type,
        imageUrl: posterUrl,
        backdropUrl: backdropUrl,
        genres: data.genres.map(g => g.name),
        overview: data.overview,
        keyInfo,
        cast: data.credits.cast.slice(0, 10).map(member => ({
            id: String(member.id),
            name: member.name,
            imageUrl: member.profile_path
                ? `${TMDB_IMAGE_BASE_URL}${member.profile_path}`
                : 'https://placehold.co/150x150/222c35/f9f8ff?text=?',
        }))
    }
}