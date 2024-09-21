import { useEffect } from "react";
import { TArtwork } from "../../../utils/types";
import styles from "./ArtworkUI.module.css";

type TArtworkProps = {
  artworkData: TArtwork;
};

export const ArtworkUI = ({ artworkData }: TArtworkProps) => {
  return (
    <div className={styles.image_box}>
      <img
        className={styles.image}
        src={artworkData.url}
        alt={artworkData.name}
      />
    </div>
  );
};
