import { TMenuLink } from "../../components/ui/menuUI/MenuUI";

type TRoutesProjectsByYears = Record<string, TMenuLink[]>;

export const routesProjectsByYears: TRoutesProjectsByYears = {
  "2017": [
    { name: "Catasian", url: "/gallery/2017/catasian" },
    { name: "Cat Girls", url: "/gallery/2017/catgirls" },
    { name: "Animalasian", url: "/gallery/2017/animalasian" },
  ],
  "2018": [{ name: "Best 2018", url: "/gallery/2018/best2018" }],
  "2019-2020": [
    { name: "Best 2019 - 2020", url: "/gallery/2019-2020/best2019-2020" },
  ],
  "2024": [
    { name: "Fish", url: "/gallery/2024/fish" },
    { name: "Birds", url: "/gallery/2024/birds" },
    { name: "Cat yoga", url: "/gallery/2024/catyoga" },
    { name: "Catasian world", url: "/gallery/2024/catasianworld" },
  ],
};
