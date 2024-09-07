import { Link, useLocation } from "react-router-dom";
import styles from "./Contact.module.css";

const Contact = () => {
  const location = useLocation();

  return (
    <div className={styles.section}>
      <div className={styles.link_box}>
        <h3 className={styles.title}>Email </h3>
        <p className={styles.text}>hitrovazhenya@gmail.com</p>
      </div>
      <div className={styles.link_box}>
        <h3 className={styles.title}>Instagram </h3>
        <Link
          to={"https://instagram.com/zhenya_hitrova"}
          className={styles.link}
          target="_blank"
        >
          @zhenya_hitrova
        </Link>
      </div>
      <div className={styles.link_box}>
        <h3 className={styles.title}>VK </h3>
        <Link
          to={"https://vk.ru/catasian"}
          className={styles.link}
          target="_blank"
        >
          Художник Женя Хитрова
        </Link>
      </div>
      <div className={styles.link_box}>
        <h3 className={styles.title}>WeChat </h3>
        <Link
          to={"/contact/wechat"}
          className={styles.link}
          state={{ background: location }}
        >
          @jarotea
        </Link>
      </div>
    </div>
  );
};

export default Contact;
