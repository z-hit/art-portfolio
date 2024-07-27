import { TArtwork, TProject } from "../utils/types";
import artworks from "./artworks";

const getProjectArtworks = (projectName: string): TArtwork[] => {
  return artworks.filter((artwork) => artwork.project === projectName);
};

export const projects: TProject[] = [
  {
    id: "catasian",
    name: "catasian",
    year: "2017",
    artworks: getProjectArtworks("catasian"),
    path: "/gallery/2017/catasian",
  },
  {
    id: "catgirls",
    name: "catgirls",
    year: "2017",
    artworks: getProjectArtworks("catgirls"),
    path: "/gallery/2017/catgirls",
  },
  {
    id: "animalasian",
    name: "animalasian",
    year: "2017",
    artworks: getProjectArtworks("animalasian"),
    path: "/gallery/2017/animalasian",
  },
  {
    id: "best2018",
    name: "best 2018",
    year: "2018",
    artworks: getProjectArtworks("best2018"),
    path: "/gallery/2018/best2018",
  },
  {
    id: "best2019-2020",
    name: "best 2019-2020",
    year: "2019-2020",
    artworks: getProjectArtworks("best2019-2020"),
    path: "/gallery/2019-2020/best2019-2020",
  },
  {
    id: "fish",
    name: "fish",
    year: "2024",
    artworks: getProjectArtworks("fish"),
    path: "/gallery/2024/fish",
  },
  {
    id: "birds",
    name: "birds",
    year: "2024",
    artworks: getProjectArtworks("birds"),
    path: "/gallery/2024/birds",
  },

  {
    id: "catyoga",
    name: "catyoga",
    year: "2024",
    artworks: getProjectArtworks("catyoga"),
    path: "/gallery/2024/catyoga",
  },
  {
    id: "catasianworld",
    name: "catasianworld",
    year: "2024",
    artworks: getProjectArtworks("catcatasianworldyoga"),
    path: "/gallery/2024/catasianworld",
  },
];
