import { useParams } from "react-router-dom";

export const GalleryByYear = () => {
  const { year } = useParams();

  return <h2>Year: {year}</h2>;
};
