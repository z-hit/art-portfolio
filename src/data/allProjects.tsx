import { TArtwork } from "../components/ui/galleryUI/GalleryUI";
import { animalasian, catasian, catgirls } from "./artworks2017";
import { best2018 } from "./artworks2018";
import { best2019_2020 } from "./artworks2019-2020";
import { birds, catasianworld, catyoga, fish } from "./artworks2024";

interface TProject {
  year: string;
  artworks: TArtwork[];
}

type TAllProjects = Record<string, TProject>;

export const allProjects: TAllProjects = {
  catasian: { year: "2017", artworks: catasian },
  catgirls: { year: "2017", artworks: catgirls },
  animalasian: { year: "2017", artworks: animalasian },
  best2018: { year: "2018", artworks: best2018 },
  "best2019-2020": { year: "2019-2020", artworks: best2019_2020 },
  birds: { year: "2024", artworks: birds },
  fish: { year: "2024", artworks: fish },
  catyoga: { year: "2024", artworks: catyoga },
  catasianworld: { year: "2024", artworks: catasianworld },
};
