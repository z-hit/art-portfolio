import { MenuUI, TMenuLink } from "../../components/ui/menuUI/MenuUI";

const MenuYearsLinks: TMenuLink[] = [
  { name: "2017", url: "/gallery/2017" },
  { name: "2018", url: "/gallery/2018" },
  { name: "2019 - 2020", url: "/gallery/2019-2020" },
  { name: "2024", url: "/gallery/2024" },
];

const MenuYears = () => MenuUI(MenuYearsLinks);

export default MenuYears;
