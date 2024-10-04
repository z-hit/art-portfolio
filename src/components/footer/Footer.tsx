import styles from "./Footer.module.css";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <div className={styles.footer_box}>
      <p className={styles.footer_text}>
        Copyright &copy; Zhenya Hitrova 2017 - {year}
      </p>
    </div>
  );
};

export default Footer;
