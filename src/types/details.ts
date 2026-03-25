export type CastMember = {
  id: string;
  name: string;
  imageUrl: string;
};

export type DetailKeyInfoItem = {
  id: string;
  label: string;
  value: string;
};

export type MediaDetails = {
  id: string;
  title: string;
  year: number;
  rating: number;
  type: 'movie' | 'tv';
  imageUrl: string;
  genres: string[];
  overview: string;
  keyInfo: DetailKeyInfoItem[];
  cast: CastMember[];
};
