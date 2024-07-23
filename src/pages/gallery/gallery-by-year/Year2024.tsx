import { Outlet } from "react-router-dom";
import { MenuUI, TMenuLink } from "../../../components/ui/menuUI/MenuUI";

const year2024Links: TMenuLink[] = [
  { name: "Fish", url: "/gallery/2024/fish" },
  { name: "Birds", url: "/gallery/2024/birds" },
  { name: "Cat yoga", url: "/gallery/2024/catyoga" },
  { name: "Catasian world", url: "/gallery/2024/catasianworld" },
];

const MenuProjects = () => MenuUI(year2024Links);

const Year2024 = () => {
  return (
    <>
      <MenuProjects />
      <Outlet />
    </>
  );
};

export default Year2024;
