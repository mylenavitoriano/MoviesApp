import { MediaType } from '@/types/media';

export function getMediaLabel(type: MediaType) {
  return type === 'movie' ? 'Movie' : 'TV';
}

export function formatRating(value: number) {
  return value.toFixed(1);
}
