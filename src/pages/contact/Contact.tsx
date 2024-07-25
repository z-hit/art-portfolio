import { Link } from "react-router-dom";
import styles from "./Contact.module.css";
import clsx from "clsx";

const Contact = () => {
  return (
    <div className={styles.section}>
      <div className={clsx(styles.text_box, styles.right)}>
        <h3 className={styles.section_title}>Email</h3>
        <p className={styles.text}>hitrovazhenya@gmail.com</p>
      </div>
      <div className={styles.text_box}>
        <h3 className={styles.section_title}>Social media</h3>
        <div className={styles.social_link_box}>
          <h4 className={styles.social_title}>Instagram: </h4>
          <Link
            to={"https://instagram.com/zhenya_hitrova"}
            className={styles.link}
          >
            @zhenya_hitrova
          </Link>
        </div>
        <div className={styles.social_link_box}>
          <h4 className={styles.social_title}>VK: </h4>
          <Link to={"https://vk.ru/catasian"} className={styles.link}>
            Художник Женя Хитрова
          </Link>
        </div>
        <div className={styles.social_link_box}>
          <h4 className={styles.social_title}>WeChat ID: </h4>
          <Link to={""} className={styles.link}>
            jarotea
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;
