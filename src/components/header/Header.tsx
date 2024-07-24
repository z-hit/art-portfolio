import MenuMain from "../../pages/home/MenuMain";
import Logo from "../ui/logoUI/Logo";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <div className={styles.header}>
      <Logo />
      <div className={styles.menu}>
        <MenuMain />
      </div>
    </div>
  );
};

export default Header;
