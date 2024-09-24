import { useParams } from "react-router-dom";
import styles from "./ArtworkPreview.module.css";
import { NavArrowPrev } from "../ui/nav-arrows/NavArrowPrev";
import { NavArrowNext } from "../ui/nav-arrows/NavArrowNext";
import { useCallback, useEffect, useState } from "react";
import artworks from "../../data/artworks";
import { ArtworkUI } from "../ui/artwork/ArtworkUI";
import { Helmet } from "react-helmet";

const ArtworkPreview = () => {
  const { artwork } = useParams();
  const [artworkPreview, setArtworkPreview] = useState(
    artworks.filter((art) => art._id === artwork)[0]
  );
  const [visibleNavPrev, setVisibleNavPrev] = useState(false);
  const [visibleNavNext, setVisibleNavNext] = useState(false);

  const artworkProject = artworks.filter(
    (art) => art.project === artworkPreview.project
  );
  const artworkPreviewIndex = artworkProject.indexOf(artworkPreview);
  const artworkProjectLength = artworkProject.length;

  const showPrevArtwork = useCallback(() => {
    setArtworkPreview(artworkProject[artworkPreviewIndex - 1]);
  }, [artworkPreviewIndex, artworkProject]);

  const showNextArtwork = useCallback(() => {
    setArtworkPreview(artworkProject[artworkPreviewIndex + 1]);
  }, [artworkPreviewIndex, artworkProject]);

  useEffect(() => {
    const handleArrowKeyDown = (e: KeyboardEvent) => {
      e.key === "ArrowLeft" &&
        !(artworkPreviewIndex === 0) &&
        showPrevArtwork();
      e.key === "ArrowRight" &&
        !(artworkPreviewIndex === artworkProjectLength - 1) &&
        showNextArtwork();
    };

    const preventEvent = (event: any) => {
      event.preventDefault();
    };

    document.addEventListener("keydown", handleArrowKeyDown);

    if (artworkPreviewIndex === 0) {
      setVisibleNavPrev(false);
    }

    if (artworkPreviewIndex === artworkProjectLength - 1) {
      setVisibleNavNext(false);
    }

    document.addEventListener("contextmenu", preventEvent);

    return () => {
      document.removeEventListener("keydown", handleArrowKeyDown);
      document.removeEventListener("contextmenu", preventEvent);

      setVisibleNavPrev(true);
      setVisibleNavNext(true);
    };
  }, [
    artworkPreviewIndex,
    artworkProjectLength,
    showNextArtwork,
    showPrevArtwork,
  ]);

  const titleSEO = artworkPreview
    ? artworkPreview.name.toUpperCase() + " | Artist Zhenya Hitrova"
    : "Artwork by artist Zhenya Hitrova";

  return (
    <div className={styles.preview_box}>
      <Helmet>
        <title>{titleSEO}</title>
        <meta
          name="description"
          content={`${titleSEO} acrylic artwork painting by Russian contemporary artist Zhenya Hitrova. Weird, colorful, symbolic, whimsical.`}
        />
      </Helmet>
      <NavArrowPrev
        id="arrow_prev"
        onClick={showPrevArtwork}
        isVisible={visibleNavPrev}
      />
      <ArtworkUI artworkData={artworkPreview} />
      <NavArrowNext
        id="arrow_next"
        onClick={showNextArtwork}
        isVisible={visibleNavNext}
      />
    </div>
  );
};

export default ArtworkPreview;
