import { useParams } from "react-router-dom";
import { projects } from "../../data/projects";

export const GalleryProject = () => {
  const { project } = useParams();

  const artworks = project
    ? projects.filter((proj) => proj.name === project)[0].artworks
    : [];

  return (
    <>
      {artworks.map((artwork) => (
        <h2>{artwork.name}</h2>
      ))}
    </>
  );
};
