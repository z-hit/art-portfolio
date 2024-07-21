import { MenuUI, TMenuLink } from "../../components/ui/menuUI/MenuUI";

const MenuAboutLinks: TMenuLink[] = [
  { name: "Bio", url: "/about/bio" },
  { name: "CV", url: "/about/cv" },
  { name: "Q and A", url: "/about/qa" },
];

const MenuAbout = () => MenuUI(MenuAboutLinks);

export default MenuAbout;
