export type MediaType = "movie" | "tv";

export type MediaCardItem = {
    id: string;
    title: string;
    year: number;
    rating: number;
    type: MediaType;
    posterUrl: string;
}

export type FeaturedItem = {
    id: string;
    title: string;
    imageUrl: string;
}