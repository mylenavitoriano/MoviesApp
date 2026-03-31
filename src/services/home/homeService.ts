import { HomeScreenData } from '@/types/media';
import {
  categories,
  featuredItems,
  movieItems,
  newItems,
} from '../../mocks/home';

export async function getHomeScreenData(): Promise<HomeScreenData> {
  return {
    categories,
    featuredItem: featuredItems[0],
    sections: [
      {
        id: 'new',
        title: 'New',
        items: newItems,
      },
      {
        id: 'movies',
        title: 'Movies',
        items: movieItems,
      },
    ],
  };
}
