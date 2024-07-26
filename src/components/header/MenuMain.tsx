import { TMenuLink } from "../../utils/types";
import { MenuUI } from "../ui/menuUI/MenuUI";

const menuMainLinks: TMenuLink[] = [
  { name: "About", path: "/about" },
  { name: "Gallery", path: "/gallery" },
  { name: "Contact", path: "/contact" },
];

const MenuMain = () => MenuUI(menuMainLinks);

export default MenuMain;
