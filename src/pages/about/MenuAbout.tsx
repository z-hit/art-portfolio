import { MenuUI } from "../../components/ui/menuUI/MenuUI";
import { TMenuLink } from "../../utils/types";

const MenuAboutLinks: TMenuLink[] = [
  { name: "Bio", path: "/about/bio" },
  { name: "statement", path: "/about/statement" },
  { name: "CV", path: "/about/cv" },
];

const MenuAbout = () => MenuUI(MenuAboutLinks);

export default MenuAbout;
