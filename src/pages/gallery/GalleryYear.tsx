import { Outlet, useParams } from "react-router-dom";
import { MenuProjects } from "./MenuProjects";
import styles from "./Portfolio.module.css";
import { TMenuLink, TProject } from "../../utils/types";
import { projects } from "../../data/projects";

const GalleryYear = () => {
  const { year } = useParams();

  const projectsByYear: TProject[] = projects.filter(
    (proj) => proj.year === year
  );
  const projectsLinks: TMenuLink[] = [];

  projectsByYear.map((proj) =>
    projectsLinks.push({ name: proj.name, path: proj.path })
  );

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
