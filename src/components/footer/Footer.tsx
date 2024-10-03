import styles from "./Footer.module.css";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <p className={styles.footer}>
      Copyright &copy; Zhenya Hitrova 2017 - {year}
    </p>
  );
};

export default Footer;
