import { Link } from "react-router-dom";
import styles from "./LogoUI.module.css";

const Logo = () => {
  return <Link to={'/'} className={styles.text}>Zhenya Hitrova</Link>;
};

export default Logo;
