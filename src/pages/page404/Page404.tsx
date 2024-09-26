import styles from "./Page404.module.css";

const Page404 = () => {
  return (
    <div className={styles.text_box}>
      <h1 className={styles.title}>404 Page Not Found</h1>;
      <p className={styles.text}>
        Please, visit any existing pages from the site menu above.
      </p>
    </div>
  );
};

export default Page404;
