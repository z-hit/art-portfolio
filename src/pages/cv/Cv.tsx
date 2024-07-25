import styles from "./Cv.module.css";

const Cv = () => {
  return (
    <div className={styles.section}>
      <div className={styles.text_box}>
        <h3 className={styles.section_title}>general</h3>
        <p className={styles.text}>Zhenya Hitrova, born 1987</p>
        <p className={styles.text}>lives and works in Nakhodka, Russia</p>
      </div>
      <div className={styles.text_box}>
        <h3 className={styles.section_title}>Group exhibitions</h3>
        <h4 className={styles.text_year}>2021</h4>
        <p className={styles.text}>
          Listen Exhibition: Smombies, curated by Heather Cai, YCAC, M50,
          Shanghai, China.
        </p>
        <h4 className={styles.text_year}>2020</h4>
        <p className={styles.text}>
          Behold Exhibition, THE WHO? of 2020, curated by Heather Cai, No Name
          Studio, Shanghai, China.
        </p>
        <h4 className={styles.text_year}>2019</h4>
        <p className={styles.text}>
          Project collaboration with Square Gallery, Shanghai, China.
        </p>
        <h4 className={styles.text_year}>2018</h4>
        <p className={styles.text}>
          Project collaboration with U Gallery (prev. Uconcept Gallery),
          Shanghai, China.
        </p>
        <h4 className={styles.text_year}>2017</h4>
        <p className={styles.text}>
          MUSE 1-3-5, Curated by Lulu, MUSE gallery & art lab, Shanghai, China.
        </p>
      </div>

      <div className={styles.text_box}>
        <h3 className={styles.section_title}>Collections</h3>
        <p className={styles.text}>
          Works are in private collections in Russia, the USA, China, Australia,
          France, Switzerland, and Japan.
        </p>
      </div>
      <div className={styles.text_box}>
        <h3 className={styles.section_title}>Education</h3>
        <p className={styles.text}>
          2009, Far Eastern Federal University, English philology, Vladivostok,
          Russia.
        </p>
      </div>
    </div>
  );
};

export default Cv;
