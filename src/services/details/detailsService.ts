import { detailsMock } from '../../mocks/details';
import { MediaDetails } from '../../types/details';

type DetailsServiceMode = 'success' | 'error';

const DETAILS_SERVICE_MODE: DetailsServiceMode = 'success';

function wait(ms: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export async function getMediaDetails(): Promise<MediaDetails> {
  await wait(700);

  if (DETAILS_SERVICE_MODE === 'error') {
    throw new Error('Could not load media details.');
  }

  return detailsMock;
}
