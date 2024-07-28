import { useParams } from "react-router-dom";
import styles from "./ArtworkPreview.module.css";
import { NavArrowPrev } from "../ui/nav-arrows/NavArrowPrev";
import { NavArrowNext } from "../ui/nav-arrows/NavArrowNext";
import { useEffect, useState } from "react";
import { ArtworkUI } from "../artwork/ArtworkUI";
import artworks from "../../data/artworks";

export const ArtworkPreview = () => {
  const { artwork } = useParams();
  const [artworkPreview, setArtworkPreview] = useState(
    artworks.filter((art) => art._id === artwork)[0]
  );
  const [visibleNavPrev, setVisibleNavPrev] = useState(true);
  const [visibleNavNext, setVisibleNavNext] = useState(true);

  const artworkProject = artworks.filter(
    (art) => art.project === artworkPreview.project
  );
  const artworkPreviewIndex = artworkProject.indexOf(artworkPreview);
  const artworkProjectLength = artworkProject.length;

  useEffect(() => {
    if (artworkPreviewIndex === 0) {
      setVisibleNavPrev(false);
    }

    if (artworkPreviewIndex === artworkProjectLength - 1) {
      setVisibleNavNext(false);
    }
    return () => {
      setVisibleNavPrev(true);
      setVisibleNavNext(true);
    };
  }, [artworkPreview, artworkPreviewIndex, artworkProjectLength]);

  const showPrevArtwork = () => {
    setArtworkPreview(artworkProject[artworkPreviewIndex - 1]);
  };

  const showNextArtwork = () => {
    setArtworkPreview(artworkProject[artworkPreviewIndex + 1]);
  };

  return (
    <div className={styles.preview_box}>
      <NavArrowPrev onClick={showPrevArtwork} isVisible={visibleNavPrev} />
      <ArtworkUI artworkData={artworkPreview} />
      <NavArrowNext onClick={showNextArtwork} isVisible={visibleNavNext} />
    </div>
  );
};
