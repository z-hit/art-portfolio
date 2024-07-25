import { useParams } from "react-router-dom";
import { allProjects } from "../../data/allProjects";

export const GalleryProject = () => {
  const { project } = useParams();

  const artworks = project
    ? allProjects.filter((proj) => proj.name === project)[0].artworks
    : [];

  return (
    <>
      {artworks.map((artwork) => (
        <h2>{artwork.name}</h2>
      ))}
    </>
  );
};
