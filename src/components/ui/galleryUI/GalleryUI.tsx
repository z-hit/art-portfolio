import { Link } from "react-router-dom";
import styles from "./MenuUI.module.css";
import { TArtwork } from "../../../utils/types";

export const GalleryUI = (artworks: TArtwork[]) => {
  return (
    <div className={styles.gallery}>
      {artworks.map((artwork) => {
        return (
          <div className={styles.image_box}>
            <Link to={"/gallery/:year/:project/:artwork"}>
              <img
                src={require(artwork.url)}
                className={styles.image}
                alt={artwork.name}
                width="300"
                height="auto"
              />
            </Link>
          </div>
        );
      })}
    </div>
  );
};
