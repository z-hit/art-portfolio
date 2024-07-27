import { useParams } from "react-router-dom";

export const Artwork = () => {
  const { artwork } = useParams();

  return (
    <>
      <p>{artwork}</p>
    </>
  );
};
