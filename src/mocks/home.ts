import { MediaListItem } from '@/types/media';

export const categories = ['All', 'Adventure', 'Comedy', 'Fantasy', 'Drama'];

export const featuredItems = [
  {
    id: '1',
    title: 'The Beekeeper',
    imageUrl:
      'https://placehold.co/1200x600/1c252d/f9f8ff?text=Featured+Banner',
  },
];

export const newItems: MediaListItem[] = [
  {
    id: '1',
    title: 'Lilo & Stitch',
    year: 2025,
    rating: 7.2,
    type: 'movie',
    posterUrl:
      'https://placehold.co/300x450/222c35/f9f8ff?text=Lilo+%26+Stitch',
  },
  {
    id: '2',
    title: 'House of David',
    year: 2025,
    rating: 7.8,
    type: 'tv',
    posterUrl: 'https://placehold.co/300x450/222c35/f9f8ff?text=House+of+David',
  },
  {
    id: '3',
    title: 'Mickey 17',
    year: 2025,
    rating: 6.9,
    type: 'movie',
    posterUrl: 'https://placehold.co/300x450/222c35/f9f8ff?text=Mickey+17',
  },
];

export const movieItems: MediaListItem[] = [
  {
    id: '4',
    title: 'Spider-Man',
    year: 2023,
    rating: 8.1,
    type: 'movie',
    posterUrl: 'https://placehold.co/300x450/222c35/f9f8ff?text=Spider-Man',
  },
  {
    id: '5',
    title: 'Avatar',
    year: 2024,
    rating: 8.0,
    type: 'movie',
    posterUrl: 'https://placehold.co/300x450/222c35/f9f8ff?text=Avatar',
  },
  {
    id: '6',
    title: 'Dune',
    year: 2024,
    rating: 8.4,
    type: 'movie',
    posterUrl: 'https://placehold.co/300x450/222c35/f9f8ff?text=Dune',
  },
];
