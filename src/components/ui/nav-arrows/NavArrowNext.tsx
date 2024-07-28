import styles from "./NavArrows.module.css";

type TNavArrowProps = {
  onClick: () => void;
};

export const NavArrowNext = ({ onClick }: TNavArrowProps) => {
  return (
    <div onClick={onClick}>
      <img
        className={styles.arrow}
        src={require("../../../assets/icons/nav-arrow-next.png")}
        alt="close-icon"
      />
    </div>
  );
};
