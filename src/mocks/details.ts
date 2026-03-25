import { MediaDetails } from '@/types/details';

export const detailsMock: MediaDetails = {
  id: '1',
  title: 'Movie or TV Show Name',
  year: 2023,
  rating: 8.3,
  type: 'movie',
  imageUrl: 'https://placehold.co/1200x700/222c35/f9f8ff?text=Backdrop',
  genres: ['Comedy', 'Adventure', 'Fantasy'],
  overview:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  keyInfo: [
    { id: '1', label: 'Duration', value: '120 mins' },
    { id: '2', label: 'Rating', value: 'PG-13' },
    { id: '3', label: 'Director', value: 'Director Name' },
    { id: '4', label: 'Writer', value: 'Writer Name' },
  ],
  cast: [
    {
      id: '1',
      name: 'Actor Name',
      imageUrl: 'https://placehold.co/160x160/222c35/f9f8ff?text=Actor',
    },
    {
      id: '2',
      name: 'Actor Name',
      imageUrl: 'https://placehold.co/160x160/222c35/f9f8ff?text=Actor',
    },
    {
      id: '3',
      name: 'Actor Name',
      imageUrl: 'https://placehold.co/160x160/222c35/f9f8ff?text=Actor',
    },
    {
      id: '4',
      name: 'Actor Name',
      imageUrl: 'https://placehold.co/160x160/222c35/f9f8ff?text=Actor',
    },
  ],
};
