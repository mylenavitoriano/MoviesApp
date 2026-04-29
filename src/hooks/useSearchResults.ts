// src/hooks/useSearchResults.ts
import { useQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import { SearchFilters, SearchResultItem } from '../types/search';
import { getSearchMedia } from '../services/search/searchService';

export function useSearchResults(query: string, filters: SearchFilters) {
  const [debouncedQuery, setDebouncedQuery] = useState(query);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedQuery(query);
    }, 400);

    return () => clearTimeout(timer);
  }, [query]);

  const result = useQuery<SearchResultItem[]>({
    queryKey: ['search', debouncedQuery, filters],
    queryFn: () => getSearchMedia(debouncedQuery, filters),
  });

  return result;
}