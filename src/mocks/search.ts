// src/mocks/search.ts

import { SearchFilters, SearchResultItem } from '../types/search';

export const searchResultsMock: SearchResultItem[] = [
  {
    id: '1',
    title: 'Lilo & Stitch',
    year: 2025,
    rating: 7.2,
    type: 'movie',
    posterUrl:
      'https://placehold.co/300x450/222c35/f9f8ff?text=Lilo+%26+Stitch',
    genres: ['Adventure', 'Comedy', 'Family'],
  },
  {
    id: '2',
    title: 'House of David',
    year: 2025,
    rating: 7.8,
    type: 'tv',
    posterUrl: 'https://placehold.co/300x450/222c35/f9f8ff?text=House+of+David',
    genres: ['Drama', 'History'],
  },
  {
    id: '3',
    title: 'Mickey 17',
    year: 2025,
    rating: 6.9,
    type: 'movie',
    posterUrl: 'https://placehold.co/300x450/222c35/f9f8ff?text=Mickey+17',
    genres: ['Sci-Fi', 'Comedy'],
  },
  {
    id: '4',
    title: 'Spider-Man',
    year: 2023,
    rating: 8.1,
    type: 'movie',
    posterUrl: 'https://placehold.co/300x450/222c35/f9f8ff?text=Spider-Man',
    genres: ['Adventure', 'Action'],
  },
  {
    id: '5',
    title: 'Avatar',
    year: 2024,
    rating: 8.0,
    type: 'movie',
    posterUrl: 'https://placehold.co/300x450/222c35/f9f8ff?text=Avatar',
    genres: ['Sci-Fi', 'Adventure'],
  },
  {
    id: '6',
    title: 'Dune',
    year: 2024,
    rating: 8.4,
    type: 'movie',
    posterUrl: 'https://placehold.co/300x450/222c35/f9f8ff?text=Dune',
    genres: ['Sci-Fi', 'Drama'],
  },
  {
    id: '7',
    title: 'Wednesday',
    year: 2024,
    rating: 7.7,
    type: 'tv',
    posterUrl: 'https://placehold.co/300x450/222c35/f9f8ff?text=Wednesday',
    genres: ['Fantasy', 'Comedy'],
  },
  {
    id: '8',
    title: 'The Last of Us',
    year: 2024,
    rating: 8.6,
    type: 'tv',
    posterUrl: 'https://placehold.co/300x450/222c35/f9f8ff?text=The+Last+of+Us',
    genres: ['Drama', 'Thriller'],
  },
];

export const searchGenresMock = [
  'Action',
  'Adventure',
  'Comedy',
  'Drama',
  'Family',
  'Fantasy',
  'History',
  'Sci-Fi',
  'Thriller',
];

export const searchRatingOptions = [0, 6, 7, 8];

export const searchInitialFilters: SearchFilters = {
  type: 'all',
  genres: [],
  minimumRating: 0,
};
