import { MenuUI, TMenuLink } from "../../components/ui/menuUI/MenuUI";

const menuMainLinks: TMenuLink[] = [
  { name: "About", url: "/about" },
  { name: "Gallery", url: "/gallery" },
  { name: "Contact", url: "/contact" },
];

const MenuMain = () => MenuUI(menuMainLinks);

export default MenuMain;
