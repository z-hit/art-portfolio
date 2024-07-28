import styles from "./NavArrows.module.css";

type TNavArrowProps = {
  onClick: () => void;
};

export const NavArrowPrev = ({ onClick }: TNavArrowProps) => {
  return (
    <div onClick={onClick}>
      <img
        className={styles.arrow}
        src={require("../../../assets/icons/nav-arrow-prev.png")}
        alt="close-icon"
      />
    </div>
  );
};
