import styles from "./NavArrows.module.css";

type TNavArrowProps = {
  onClick: () => void;
  isVisible: boolean;
  id: string;
};

export const NavArrowNext = ({ onClick, isVisible }: TNavArrowProps) => {
  const style = (visible: boolean) => {
    if (!visible) {
      return styles.arrow_hidden;
    }

    return styles.arrow;
  };

  return (
    <button className={styles.button} onClick={onClick} disabled={!isVisible}>
      <img
        id="nav-arrow"
        className={style(isVisible)}
        src={require("../../../assets/icons/nav-arrow-next.png")}
        alt="close-icon"
      />
    </button>
  );
};
