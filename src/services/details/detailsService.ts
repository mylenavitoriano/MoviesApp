import { detailsMock } from '../../mocks/details';
import { MediaDetails } from '../../types/details';
import { MediaType } from '../../types/media';
import { getTmdbMediaDetails } from './tmdbDetailsService';

type DetailsServiceMode = 'success' | 'error' | "real";

const DETAILS_SERVICE_MODE: DetailsServiceMode = 'real';

function wait(ms: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export async function getMediaDetails(id: string, type: MediaType): Promise<MediaDetails> {
  if (DETAILS_SERVICE_MODE === 'real') {
    return getTmdbMediaDetails(id, type);
  }

  await wait(700);

  if (DETAILS_SERVICE_MODE === 'error') {
    throw new Error('Could not load media details.');
  }

  return detailsMock;
}
