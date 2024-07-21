import { Menu, TMenuLink } from "../../components/Menu";

const MenuGalleryLinks: TMenuLink[] = [
  { name: "2017", url: "/gallery/2017" },
  { name: "2018", url: "/gallery/2018" },
  { name: "2019", url: "/gallery/2019" },
  { name: "2020", url: "/gallery/2020" },
  { name: "2021", url: "/gallery/2021" },
  { name: "2023", url: "/gallery/2023" },
  { name: "2024", url: "/gallery/2024" },
];

const MenuGallery = () => Menu(MenuGalleryLinks);

export default MenuGallery;
