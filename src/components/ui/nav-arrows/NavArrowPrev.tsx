import styles from "./NavArrows.module.css";

type TNavArrowProps = {
  onClick: () => void;
  isVisible: boolean;
};

export const NavArrowPrev = ({ onClick, isVisible }: TNavArrowProps) => {
  const arrow = document.getElementById("nav-arrow");
  if (!isVisible) {
    arrow?.classList.add("arrow_hidden");
  } else {
    arrow?.classList.remove("arrow_hidden");
  }

  return (
    <div id="nav-arrow" onClick={onClick}>
      <img
        className={styles.arrow}
        src={require("../../../assets/icons/nav-arrow-prev.png")}
        alt="close-icon"
      />
    </div>
  );
};
