import { useEffect } from "react";
import { TArtwork } from "../../../utils/types";
import styles from "./Card.module.css";

type TCardProps = {
  artwork: TArtwork;
  key: string;
};

const CardUI = (props: TCardProps) => {
  useEffect(() => {
    const preventEvent = (event: any) => {
      event.preventDefault();
    };

    document.addEventListener("contextmenu", preventEvent);

    return () => {
      document.removeEventListener("contextmenu", preventEvent);
    };
  }, []);

  return (
    <img
      draggable={false}
      className={styles.image}
      src={props.artwork.url}
      alt={props.artwork.name}
    />
  );
};

export default CardUI;
