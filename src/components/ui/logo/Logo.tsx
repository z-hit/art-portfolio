import { Link } from "react-router-dom";
import styles from "./LogoUI.module.css";

const Logo = () => {
  return (
    <Link to={"/"} className={styles.logo_box}>
      <img
        className={styles.logo}
        src={require("../../../assets/images/logo.jpg")}
        alt="artins logo aignature"
        width="100"
        height="auto"
      />
      <p className={styles.text}>Zhenya Hitrova</p>
    </Link>
  );
};

export default Logo;
