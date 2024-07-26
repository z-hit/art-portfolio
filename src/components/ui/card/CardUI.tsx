import { Link } from "react-router-dom";
import { TArtwork } from "../../../utils/types";
import styles from "./Card.module.css";

type TCardProps = {
  artwork: TArtwork;
};

const CardUI = (props: TCardProps) => {
  return (
    <div className={styles.image_box}>
      <Link to={props.artwork.path}>
        <img
          className={styles.image}
          src={props.artwork.url}
          alt={props.artwork.name}
        />
      </Link>
    </div>
  );
};

export default CardUI;
