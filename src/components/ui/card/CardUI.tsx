import { TArtwork } from "../../../utils/types";
import styles from "./Card.module.css";

type TCardProps = {
  artwork: TArtwork;
};

const CardUI = (props: TCardProps) => {
  return (
    <div onClick={() => console.log("image click wroks: " + props.artwork.name)}>
      <img
        className={styles.image}
        src={props.artwork.url}
        alt={props.artwork.name}
      />
    </div>
  );
};

export default CardUI;
