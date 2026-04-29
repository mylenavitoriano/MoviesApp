import { SearchFilters, SearchResultItem } from '../../types/search';
import { searchResultsMock } from '../../mocks/search';

type SearchServiceMode = 'success' | 'error';

const SEARCH_SERVICE_MODE: SearchServiceMode = 'success';

function wait(ms: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms));
}


export async function getSearchMedia(
    query: string,
    filters: SearchFilters
): Promise<SearchResultItem[]> {
  await wait(700);

  if (SEARCH_SERVICE_MODE === 'error') {
    throw new Error('Could not load search results.');
  }

  const normalized = query.trim().toLowerCase();

  return searchResultsMock.filter(item => {
    const matchesQuery =
    normalized.length === 0 ||
      item.title.toLowerCase().includes(normalized);

    const matchesType = filters.type === 'all' || item.type === filters.type;

    const matchesGenres =
      filters.genres.length === 0 ||
      filters.genres.every(genre => item.genres.includes(genre));

    const matchesRating = item.rating >= filters.minimumRating;

    return matchesQuery && matchesType && matchesGenres && matchesRating;
  });
}
