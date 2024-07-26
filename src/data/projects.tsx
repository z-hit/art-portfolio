import { TProject } from "../utils/types";
import { animalasian, catasian, catgirls } from "./artworks2017";
import { best2018 } from "./artworks2018";
import { best2019_2020 } from "./artworks2019-2020";
import { birds, catasianworld, catyoga, fish } from "./artworks2024";

export const projects: TProject[] = [
  {
    name: "catasian",
    year: "2017",
    artworks: catasian,
    path: "/gallery/2017/catasian",
  },
  {
    name: "catgirls",
    year: "2017",
    artworks: catgirls,
    path: "/gallery/2017/catgirls",
  },
  {
    name: "animalasian",
    year: "2017",
    artworks: animalasian,
    path: "/gallery/2017/animalasian",
  },
  {
    name: "best2018",
    year: "2018",
    artworks: best2018,
    path: "/gallery/2018/best2018",
  },
  {
    name: "best2019-2020",
    year: "2019-2020",
    artworks: best2019_2020,
    path: "/gallery/2019-2020/best2019-2020",
  },
  {
    name: "fish",
    year: "2024",
    artworks: fish,
    path: "/gallery/2024/fish",
  },
  {
    name: "birds",
    year: "2024",
    artworks: birds,
    path: "/gallery/2024/birds",
  },

  {
    name: "catyoga",
    year: "2024",
    artworks: catyoga,
    path: "/gallery/2024/catyoga",
  },
  {
    name: "catasianworld",
    year: "2024",
    artworks: catasianworld,
    path: "/gallery/2024/catasianworld",
  },
];
