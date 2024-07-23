import { Outlet } from "react-router-dom";
import { MenuUI, TMenuLink } from "../../../components/ui/menuUI/MenuUI";
import styles from "./styles.module.css";

const year2024Links: TMenuLink[] = [
  { name: "Fish", url: "/gallery/2024/fish" },
  { name: "Birds", url: "/gallery/2024/birds" },
  { name: "Cat yoga", url: "/gallery/2024/catyoga" },
  { name: "Catasian world", url: "/gallery/2024/catasianworld" },
];

const MenuProjects = () => MenuUI(year2024Links);

const Gallery2024 = () => {
  return (
    <>
      <div className={styles.nav_bar}>
        <MenuProjects />
      </div>
      <Outlet />
    </>
  );
};

export default Gallery2024;
