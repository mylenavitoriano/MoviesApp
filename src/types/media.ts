export type MediaType = 'movie' | 'tv';

export type MediaGenre = {
  id: number;
  name: string;
};

export type MediaListItem = {
  id: string;
  title: string;
  year: number;
  rating: number;
  type: MediaType;
  posterUrl: string;
};

export type MediaSummary = {
  id: string;
  title: string;
  year: number;
  rating: number;
  type: MediaType;
  imageUrl: string;
  genres: string[];
};
