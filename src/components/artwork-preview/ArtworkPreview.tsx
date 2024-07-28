import { useParams } from "react-router-dom";
import styles from "./ArtworkPreview.module.css";
import { NavArrowPrev } from "../ui/nav-arrows/NavArrowPrev";
import { NavArrowNext } from "../ui/nav-arrows/NavArrowNext";
import { useState } from "react";
import { ArtworkUI } from "../artwork/ArtworkUI";
import artworks from "../../data/artworks";

export const ArtworkPreview = () => {
  const { artwork } = useParams();
  const [artworkPreview, setArtworkPreview] = useState(
    artworks.filter((art) => art._id === artwork)[0]
  );
  const [visible, setVisible] = useState(true);

  const artworkProject = artworks.filter(
    (art) => art.project === artworkPreview.project
  );
  const artworkPreviewIndex = artworkProject.indexOf(artworkPreview);
  const artworkProjectLength = artworkProject.length;

  const showPrevArtwork = () => {
    artworkPreviewIndex === 0 && setVisible(false);

    setArtworkPreview(artworkProject[artworkPreviewIndex - 1]);
  };

  const showNextArtwork = () => {
    artworkPreviewIndex === artworkProjectLength - 1 && setVisible(false);
    setArtworkPreview(artworkProject[artworkPreviewIndex + 1]);
  };

  return (
    <div className={styles.preview_box}>
      <NavArrowPrev onClick={showPrevArtwork} isVisible={visible} />
      <ArtworkUI artworkData={artworkPreview} />
      <NavArrowNext onClick={showNextArtwork} isVisible={visible} />
    </div>
  );
};
