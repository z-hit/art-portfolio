import { useParams } from "react-router-dom";
import styles from "./ArtworkPreview.module.css";
import artworks from "../../data/artworks";
import { NavArrowPrev } from "../ui/nav-arrows/NavArrowPrev";
import { NavArrowNext } from "../ui/nav-arrows/NavArrowNext";
import { useState } from "react";

export const Artwork = () => {
  const { artwork } = useParams();
  const [artworkChosen, setArtworkChosen] = useState(
    artworks.filter((art) => art._id === artwork)[0]
  );
  //const artworkData = artworks.filter((art) => art._id === artwork)[0];
  const projectArtworks = artworks.filter(
    (art) => art.project === artworkChosen.project
  );
  const artworkIndex = projectArtworks.indexOf(artworkChosen);

  const showPrevArtwork = () => {
    setArtworkChosen(projectArtworks[artworkIndex - 1]);
  };

  const showNextArtwork = () => {
    setArtworkChosen(projectArtworks[artworkIndex + 1]);
  };

  return (
    <div className={styles.preview_box}>
      <NavArrowPrev onClick={showPrevArtwork} />
      <div className={styles.image_box}>
        <img
          className={styles.image}
          src={artworkChosen.url}
          alt={artworkChosen.name}
        />
      </div>
      <NavArrowNext onClick={showNextArtwork} />
    </div>
  );
};
