import { Outlet, useParams } from "react-router-dom";
import { TMenuLink } from "../../components/ui/menuUI/MenuUI";
import { MenuProjects } from "./MenuProjects";
import styles from "./Gallery.module.css";
import { routesProjectsByYears } from "./RoutesProjectsByYears";

const GalleryYear = () => {
  const { year } = useParams();
  const projectsLinks: TMenuLink[] = year ? routesProjectsByYears[year] : [];

  return (
    <>
      <div className={styles.nav_bar}>
        <MenuProjects linksList={projectsLinks} />
      </div>
      <Outlet />
    </>
  );
};

export default GalleryYear;
