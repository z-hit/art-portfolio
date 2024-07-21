import { Menu, TMenuLink } from "../Menu";

const menuMainLinks: TMenuLink[] = [
  { name: "About", url: "/about" },
  { name: "Gallery", url: "/gallery" },
  { name: "Contact", url: "/contact" },
];

const MenuMain = () => Menu(menuMainLinks);

export default MenuMain;
