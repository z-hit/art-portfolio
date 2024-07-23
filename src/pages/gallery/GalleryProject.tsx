import { useParams } from "react-router-dom";

export const GalleryProject = () => {
  const { project } = useParams();
  const { year } = useParams();

  if (project) {
    return (
      <>
        <p>Project NAME: {project}</p>
      </>
    );
  }

  if (year) {
    return (
      <>
        <p>Project YEAR: {year}</p>
      </>
    );
  }

  return (
    <>
      <p>Doesn't work</p>
    </>
  );
};
