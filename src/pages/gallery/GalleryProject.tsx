import { useParams } from "react-router-dom";

export const GalleryProject = () => {
  const { project } = useParams();

  return (
    <>
      <p>Gallery Project NAME: {project}</p>
    </>
  );
};
