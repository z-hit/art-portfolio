import { useParams } from "react-router-dom";
import { artworksData } from "../../data/artworks";
import Page404 from "../page404/Page404";
import { TArtwork } from "../../components/ui/galleryUI/GalleryUI";
import { useEffect, useState } from "react";

export const ArtProject = () => {
  const { project } = useParams();
  const { year } = useParams();
  const [artworks, setArtworks] = useState([]);

  /* useEffect(); */

  return <p>yes</p>;
};
