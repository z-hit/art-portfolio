import { useParams } from "react-router-dom";
import { allProjects } from "../../data/allProjects";
import { MenuProjects } from "./MenuProjects";
import { routeGalleryByYearLinks } from "./ProjectsByYearRoutes";
import { TMenuLink } from "../../components/ui/menuUI/MenuUI";
import styles from "./Gallery.module.css";

export const GalleryProject = () => {
  const { project } = useParams();
  const projectData = project
    ? allProjects[project]
    : { year: "unknown", artworks: [] };

  const year = projectData.year;
  const artworks = projectData.artworks;

  const projectLinks: TMenuLink[] = year ? routeGalleryByYearLinks[year] : [];

  return (
    <>
      <div className={styles.nav_bar}>
        <MenuProjects linksList={projectLinks} />
      </div>
      {artworks.map((artwork) => (
        <h2>{artwork.name}</h2>
      ))}
    </>
  );
};
