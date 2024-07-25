import { useParams } from "react-router-dom";
import { allProjects } from "../../data/allProjectsRefLinks";

export const GalleryProject = () => {
  const { project } = useParams();
  const artworks = project ? allProjects[project] : [];

  return <h5>{artworks.map((artwork) => artwork.name)}</h5>;
};
