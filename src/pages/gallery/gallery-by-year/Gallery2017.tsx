import { Outlet } from "react-router-dom";
import { MenuUI, TMenuLink } from "../../../components/ui/menuUI/MenuUI";

const year2017Links: TMenuLink[] = [
  { name: "Catasian", url: "/gallery/2017/catasian" },
  { name: "Cat Girls", url: "/gallery/2017/catgirls" },
  { name: "Animalasian", url: "/gallery/2017/animalasian" },
];

const MenuProjects = () => MenuUI(year2017Links);

const Gallery2017 = () => {
  return (
    <>
      <MenuProjects />
      <Outlet />
    </>
  );
};

export default Gallery2017;
