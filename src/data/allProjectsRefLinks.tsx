import { TArtwork } from "../components/ui/galleryUI/GalleryUI";
import { animalasian, catasian, catgirls } from "./artworks2017";
import { best2018 } from "./artworks2018";
import { best2019_2020 } from "./artworks2019-2020";
import { birds, catasianworld, catyoga, fish } from "./artworks2024";

type TAllProjects = Record<string, TArtwork[]>;

export const allProjects: TAllProjects = {
  catasian: catasian,
  catgirls: catgirls,
  animalasian: animalasian,
  best2018: best2018,
  "best2019-2020": best2019_2020,
  birds: birds,
  fish: fish,
  catyoga: catyoga,
  catasianworld: catasianworld,
};
