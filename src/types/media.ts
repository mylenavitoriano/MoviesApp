export type MediaType = 'movie' | 'tv';

export type MediaGenre = {
  id: number;
  name: string;
};

export type MediaListItem = {
  id: string;
  title: string;
  year: number;
  rating: number;
  type: MediaType;
  posterUrl: string;
};

export type MediaSummary = {
  id: string;
  title: string;
  year: number;
  rating: number;
  type: MediaType;
  imageUrl: string;
  genres: string[];
};

/** Representa o banner principal */
export type FeaturedMediaItem = {
  id: string;
  title: string;
  imageUrl: string;
};

/** Representa cada bloco da Home (New e Movies) */
export type HomeSection = {
  id: string;
  title: string;
  items: MediaListItem[];
};

/** Representa tudo o que a home precisa receber */
export type HomeScreenData = {
  categories: string[];
  featuredItem: FeaturedMediaItem;
  sections: HomeSection[];
};
