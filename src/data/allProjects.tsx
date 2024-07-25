import { TArtwork } from "../components/ui/galleryUI/GalleryUI";
import { animalasian, catasian, catgirls } from "./projects2017";
import { best2018 } from "./projects2018";
import { best2019_2020 } from "./projects2019-2020";
import { birds, catasianworld, catyoga, fish } from "./projects2024";

interface TProject {
  name: string;
  year: string;
  artworks: TArtwork[];
}

export const allProjects: TProject[] = [
  { name: "catasian", year: "2017", artworks: catasian },
  { name: "catgirls", year: "2017", artworks: catgirls },
  { name: "animalasian", year: "2017", artworks: animalasian },
  { name: "best2018", year: "2018", artworks: best2018 },
  { name: "best2019-2020", year: "2019-2020", artworks: best2019_2020 },
  { name: "birds", year: "2024", artworks: birds },
  { name: "fish", year: "2024", artworks: fish },
  { name: "catyoga", year: "2024", artworks: catyoga },
  { name: "catasianworld", year: "2024", artworks: catasianworld },
];
