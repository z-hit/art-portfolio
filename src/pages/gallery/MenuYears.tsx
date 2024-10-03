import { MenuUI } from "../../components/ui/menuUI/MenuUI";
import { TMenuLink } from "../../utils/types";

const MenuYearsLinks: TMenuLink[] = [
  { name: "2017", path: "/gallery/2017" },
  { name: "2018", path: "/gallery/2018" },
  { name: "2019 - 2020", path: "/gallery/2019-2020" },
  { name: "2024", path: "/gallery/2024" },
];

const MenuYears = () => MenuUI(MenuYearsLinks);

export default MenuYears;
