import { MediaType } from './media';

export type SearchMediaType = 'all' | MediaType;

export type SearchResultItem = {
  id: string;
  title: string;
  year: number;
  rating: number;
  type: MediaType;
  posterUrl: string;
  genres: string[];
};

export type SearchFilters = {
  type: SearchMediaType;
  genres: string[];
  minimunRating: number;
};
