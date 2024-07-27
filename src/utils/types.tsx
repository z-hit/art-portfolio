export type TArtwork = {
  _id: string;
  name: string;
  project: string;
  year: string;
  url: string;
  path: string;
};

export type TProject = {
  id: string;
  year: string;
  name: string;
  path: string;
  artworks: TArtwork[];
};

export type TMenuLink = {
  name: string;
  path: string;
};
