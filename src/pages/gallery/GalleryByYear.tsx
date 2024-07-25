import { Outlet, useParams } from "react-router-dom";
import styles from "./Gallery.module.css";
import { routeGalleryByYearLinks } from "./ProjectsByYearRoutes";
import { TMenuLink } from "../../components/ui/menuUI/MenuUI";
import { MenuProjects } from "./MenuProjects";

const GalleryByYear = () => {
  const { year } = useParams();
  const projectLinks: TMenuLink[] = year ? routeGalleryByYearLinks[year] : [];

  return (
    <>
      <div className={styles.nav_bar}>
        <MenuProjects linksList={projectLinks} />
      </div>
      <Outlet />
    </>
  );
};

export default GalleryByYear;
