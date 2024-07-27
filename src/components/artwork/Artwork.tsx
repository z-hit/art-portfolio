import { useParams } from "react-router-dom";
import styles from "./Artwork.module.css";
import artworks from "../../data/artworks";

export const Artwork = () => {
  const { artwork } = useParams();
  const artworkData = artworks.filter((art) => art._id === artwork)[0];

  return (
    <div className={styles.image_box}>
      <img src={artworkData.url} alt={artworkData.name} />
    </div>
  );
};
