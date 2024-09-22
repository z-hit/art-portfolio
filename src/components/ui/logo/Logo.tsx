import { Link } from "react-router-dom";
import styles from "./LogoUI.module.css";
import { useEffect } from "react";

const Logo = () => {
  useEffect(() => {
    const logoStamp = document.getElementById("logo");
    const preventEvent = (event: any) => {
      event.preventDefault();
    };

    logoStamp && logoStamp.addEventListener("contextmenu", preventEvent);

    return () => {
      logoStamp && logoStamp.removeEventListener("contextmenu", preventEvent);
    };
  }, []);

  return (
    <Link to={"/"} className={styles.logo_box}>
      <img
        id="logo"
        draggable={false}
        className={styles.logo}
        src={require("../../../assets/images/logo.jpg")}
        alt="artist logo signature"
        width="100"
        height="auto"
      />
      <p className={styles.text}>Zhenya Hitrova</p>
    </Link>
  );
};

export default Logo;
