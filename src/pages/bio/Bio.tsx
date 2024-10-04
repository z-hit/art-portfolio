import { useEffect } from "react";
import styles from "./Bio.module.css";
import SEO from "../../components/seo/seo";
import { seoBio } from "../../components/seo/seoData";
import clsx from "clsx";

const Bio = () => {
  useEffect(() => {
    const artistPhoto = document.getElementById("artist-photo");
    const preventEvent = (event: any) => {
      event.preventDefault();
    };

    artistPhoto && artistPhoto.addEventListener("contextmenu", preventEvent);

    return () => {
      artistPhoto &&
        artistPhoto.removeEventListener("contextmenu", preventEvent);
    };
  }, []);

  return (
    <div className={styles.section}>
      <SEO title={seoBio.title} description={seoBio.description} />
      <img
        id="artist-photo"
        draggable={false}
        src={require("../../assets/images/artist-portrait.jpg")}
        className={styles.image}
        alt="artist portrait"
        width="300"
        height="auto"
      />

      <div className={styles.text_box}>
        <p className={styles.text}>
          My name is{" "}
          <span className={clsx(styles.text, styles.bold)}>Zhenya Hitrova</span>{" "}
          and I am a{" "}
          <span className={clsx(styles.text, styles.bold)}>self-taught</span>{" "}
          mixed media{" "}
          <span className={clsx(styles.text, styles.bold)}>srtist</span>,
          polyglot, and animal enthusiast.
        </p>
        <p className={styles.text}>
          I have been{" "}
          <span className={clsx(styles.text, styles.bold)}>passionate</span>{" "}
          about art since early childhood, and started developing my art career
          professionally in{" "}
          <span className={clsx(styles.text, styles.bold)}>2015</span> when I
          moved to{" "}
          <span className={clsx(styles.text, styles.bold)}>Shanghai</span>,
          China, where I participated in various group art{" "}
          <span className={clsx(styles.text, styles.bold)}>exhibitions</span> as
          well as in charity events aimed at helping stray animals.
        </p>
        <p className={styles.text}>
          In <span className={clsx(styles.text, styles.bold)}>2017</span>, in my
          tiny{" "}
          <span className={clsx(styles.text, styles.bold)}>sketchbook</span> on
          the board of the plane flying from Hong Kong to Taiwan my signature{" "}
          <span className={clsx(styles.text, styles.bold)}>Catasian face</span>{" "}
          was invented. After that, I started painting different{" "}
          <span className={clsx(styles.text, styles.bold)}>creatures</span> with
          this mystical face, which later became an absolute center of my
          artistic practice.
        </p>
        <p className={styles.text}>
          In <span className={clsx(styles.text, styles.bold)}>2019</span>, I
          moved back to my{" "}
          <span className={clsx(styles.text, styles.bold)}>hometown</span> on
          the Pacific coast of{" "}
          <span className={clsx(styles.text, styles.bold)}>Russia</span> where I
          continue living and developing different ideas with Catasian face.
        </p>
      </div>
    </div>
  );
};

export default Bio;
