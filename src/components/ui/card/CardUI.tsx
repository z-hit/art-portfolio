import { TArtwork } from "../../../utils/types";
import styles from "./Card.module.css";

type TCardProps = {
  artwork: TArtwork;
  key: string;
};

const CardUI = (props: TCardProps) => {
  return (
    <img
      className={styles.image}
      src={props.artwork.url}
      alt={props.artwork.name}
    />
  );
};

export default CardUI;
