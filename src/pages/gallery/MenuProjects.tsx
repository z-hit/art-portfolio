import { useParams } from "react-router-dom";
import { MenuUI, TMenuLink } from "../../components/ui/menuUI/MenuUI";

const MenuProjects2017: TMenuLink[] = [
  { name: "Catasian", url: "/gallery/2017/catasian" },
  { name: "Cat Girls", url: "/gallery/2017/catgirls" },
  { name: "Animalasian", url: "/gallery/2017/animalasian" },
];

const MenuProjects2024: TMenuLink[] = [
  { name: "Fish", url: "/gallery/2024/fish" },
  { name: "Birds", url: "/gallery/2024/fish" },
  { name: "Catasian World", url: "/gallery/2024/fish" },
  { name: "Cat Yoga", url: "/gallery/2024/fish" },
];

export const MenuProjects = () => {
  const { year } = useParams();

  switch (year) {
    case "2017":
      return MenuUI(MenuProjects2017);

    default:
      return MenuUI(MenuProjects2024);
  }
};
