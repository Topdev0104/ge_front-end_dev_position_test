export type HomeDataTypes = {
  media: Array<MediaTypes>;
  pageInfo: PageInfoTypes;
};

export type MediaTypes = {
  id: number;
  title: TitleTypes;
};

export type TitleTypes = {
  english: string | null;
  native: string | null;
  romaji: string | null;
};

export type PageInfoTypes = {
  currentPage: number;
  hasNextPage: boolean;
  lastPage: number;
  perPage: number;
  total: number;
};

export type TableDataType = {
  id: number;
} & TitleTypes;
