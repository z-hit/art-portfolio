import { useParams } from "react-router-dom";
import styles from "./ArtworkPreview.module.css";
import artworks from "../../data/artworks";
import { NavArrowPrev } from "../ui/nav-arrows/NavArrowPrev";
import { NavArrowNext } from "../ui/nav-arrows/NavArrowNext";
import { useState } from "react";
import { ArtworkUI } from "../artwork/ArtworkUI";

export const ArtworkPreview = () => {
  const { artwork } = useParams();
  const [artworkChosen, setArtworkChosen] = useState(
    artworks.filter((art) => art._id === artwork)[0]
  );
  const projectArtworks = artworks.filter(
    (art) => art.project === artworkChosen.project
  );
  const artworkIndex = projectArtworks.indexOf(artworkChosen);
  const projectLenght = projectArtworks.length;

  const showPrevArtwork = () => {
    artworkIndex === 0
      ? setArtworkChosen(projectArtworks[projectLenght - 1])
      : setArtworkChosen(projectArtworks[artworkIndex - 1]);
  };

  const showNextArtwork = () => {
    artworkIndex === projectLenght - 1
      ? setArtworkChosen(projectArtworks[0])
      : setArtworkChosen(projectArtworks[artworkIndex + 1]);
  };

  return (
    <div className={styles.preview_box}>
      <NavArrowPrev onClick={showPrevArtwork} />
      <ArtworkUI artworkData={artworkChosen} />
      <NavArrowNext onClick={showNextArtwork} />
    </div>
  );
};
