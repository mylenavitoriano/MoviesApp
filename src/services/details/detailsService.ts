import { detailsMock } from '../../mocks/details';
import { MediaDetails } from '../../types/details';

export async function getMediaDetails(): Promise<MediaDetails> {
  return detailsMock;
}
