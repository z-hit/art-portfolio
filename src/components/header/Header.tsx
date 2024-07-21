import MenuMain from "../../pages/home/MenuMain";
import Logo from "../ui/logoUI/Logo";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <div className={styles.header}>
      <Logo />
      <MenuMain />
    </div>
  );
};

export default Header;
