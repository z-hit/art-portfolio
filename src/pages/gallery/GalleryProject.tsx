import { useParams } from "react-router-dom";

export const GalleryProject = () => {
  const { project } = useParams();

  return (
    <>{project ? <p>Gallery Project NAME: {project}</p> : <p></p>}
      
    </>
  );
};
