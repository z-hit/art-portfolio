import styles from "./CloseIcon.module.css";

export const CloseIcon = () => {
  return (
    <img
      className={styles.icon}
      src={require("../../../assets/icons/close-button.png")}
      alt="close-icon"
    />
  );
};
