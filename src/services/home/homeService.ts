import { HomeScreenData } from '@/types/media';
import {
  categories,
  featuredItems,
  movieItems,
  newItems,
} from '../../mocks/home';
import { getTmdbHomeScreenData } from './tmdbHomeService';

type HomeServiceMode = 'success' | 'empty' | 'error' | "real";

const HOME_SERVICE_MODE: HomeServiceMode = 'real';

function wait(ms: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export async function getHomeScreenData(): Promise<HomeScreenData> {
  if (HOME_SERVICE_MODE === 'real') {
    const data = await getTmdbHomeScreenData();
    console.log('HOME DATA:', JSON.stringify(data, null, 2));
    return data;
  }

  await wait(700);

  if (HOME_SERVICE_MODE === 'error') {
    throw new Error('Could not load home screen data.');
  }

  if (HOME_SERVICE_MODE === 'empty') {
    return {
      categories: [],
      featuredItem: null,
      sections: [],
    };
  }

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
