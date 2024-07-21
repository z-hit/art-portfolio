import { Menu, TMenuLink } from "../../components/Menu";

const MenuAboutLinks: TMenuLink[] = [
  { name: "Bio", url: "/about/bio" },
  { name: "CV", url: "/about/cv" },
  { name: "Q'n'A", url: "/about/qa" },
];

const MenuAbout = () => Menu(MenuAboutLinks);

export default MenuAbout;
