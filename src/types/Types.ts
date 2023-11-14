export type Destination = {
  id: number;
  name: string;
  images: {
    png: string;
    webp: string;
  },
  description: string;
  distance: string;
  travel: string;
};

export type Crew = {
  id: number;
  name: string;
  images: {
    png: string;
    webp: string;
  },
  role: string;
  bio: string;
};

export type Technology = {
  id: number;
  name: string;
  images: {
    portrait: string;
    landscape: string;
  },
  description: string;
};