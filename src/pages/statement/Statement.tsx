import { useEffect } from "react";
import styles from "./Statement.module.css";
import SEO from "../../components/seo/seo";
import { seoStatement } from "../../components/seo/seoData";
import clsx from "clsx";

const Statement = () => {
  useEffect(() => {
    const statementPhoto = document.getElementById("statement-photo");
    const preventEvent = (event: any) => {
      event.preventDefault();
    };

    statementPhoto &&
      statementPhoto.addEventListener("contextmenu", preventEvent);

    return () => {
      statementPhoto &&
        statementPhoto.removeEventListener("contextmenu", preventEvent);
    };
  }, []);

  return (
    <div className={styles.section}>
      <SEO title={seoStatement.title} description={seoStatement.description} />
      <img
        id="statement-photo"
        draggable={false}
        src={require("../../assets/images/statement-cover.jpg")}
        className={styles.image}
        alt="artist portrait"
        width="300"
        height="auto"
      />

      <div className={styles.text_box}>
        <p className={styles.text}>
          The world is{" "}
          <span className={clsx(styles.text, styles.bold)}>random</span>,{" "}
          <span className={clsx(styles.text, styles.bold)}>chaotic</span>, and{" "}
          <span className={clsx(styles.text, styles.bold)}>absurd</span>.
        </p>
        <p className={styles.text}>
          Everythign has a{" "}
          <span className={clsx(styles.text, styles.bold)}>soul</span>.
        </p>
        <p className={styles.text}>
          Objects around us are full of{" "}
          <span className={clsx(styles.text, styles.bold)}>mystery</span> and{" "}
          <span className={clsx(styles.text, styles.bold)}>symbolism</span>.
        </p>
        <p className={styles.text}>
          Combining{" "}
          <span className={clsx(styles.text, styles.bold)}>colors</span> is so
          much <span className={clsx(styles.text, styles.bold)}>fun</span>.
        </p>
        <p className={styles.text}>
          <span className={clsx(styles.text, styles.bold)}>Information</span>{" "}
          and <span className={clsx(styles.text, styles.bold)}>energy</span> can
          be felt and almost seen.
        </p>
        <p className={styles.text}>
          A bit of <span className={clsx(styles.text, styles.bold)}>humor</span>{" "}
          saves the day.
        </p>
        <p className={styles.text}>
          Try to keep{" "}
          <span className={clsx(styles.text, styles.bold)}>peace of mind</span>{" "}
          no matter what.
        </p>
        <p className={styles.text}>
          Enjoy life's{" "}
          <span className={clsx(styles.text, styles.bold)}>
            little pleasures
          </span>
          .
        </p>
        <p className={styles.text}>
          Foreign{" "}
          <span className={clsx(styles.text, styles.bold)}>languages</span> can
          help you open new{" "}
          <span className={clsx(styles.text, styles.bold)}>worlds</span>.
        </p>
      </div>

      {/* <div className={styles.text_box}>
        <p className={styles.text}>
          I find an endless source of inspiration in the complex, overloaded,
          and absurd nature of modern reality.
        </p>
        <p className={styles.text}>
          With my puzzle-like artworks, created as if just for fun, in reality I
          am trying to help the viewers order the chaos of the surrounding
          world, present them with the aesthetic pleasure of the harmony of
          colors and shapes, add a bit of mystery with symbols and weird
          creatures, and sometimes even entertain with a touch of humor or
          irony.
        </p>
        <p className={styles.text}>
          But the key mission of my paintings is to get across the idea that no
          matter what happens around us, we have to try our best to keep peace
          of mind, which in my artworks is reflected in these calm, emotionless,
          and spiritualized Catasian faces.
        </p>
        <p className={styles.text}>Zhenya Hitrova, 2024</p>
      </div> */}
    </div>
  );
};

export default Statement;
