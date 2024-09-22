import { useEffect } from "react";
import styles from "./Bio.module.css";

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
      <img
        id="artist-photo"
        draggable={false}
        src={require("../../assets/images/artist-portrait.JPG")}
        className={styles.image}
        alt="artist portrait"
        width="300"
        height="auto"
      />

      <div className={styles.text_box}>
        <p className={styles.text}>
          My name is Zhenya Hitrova and I am a self-taught mixed media artist
          and animal enthusiast.
        </p>
        <p className={styles.text}>
          I have been passionate about art since early childhood, and started
          developing my art career professionally in 2015 when I moved to
          Shanghai, China, where I participated in various group art exhibitions
          as well as in charity events aimed at helping stray animals.
        </p>
        <p className={styles.text}>
          In 2017, in my tiny sketchbook on the board of the plane flying from
          Hong Kong to Taiwan my signature Catasian face was invented. After
          that, I started painting different creatures with this mystical face,
          which later became an absolute center of my artistic practice.
        </p>
        <p className={styles.text}>
          In 2019, I moved back to my hometown on the Pacific coast of Russia
          where I continue living and developing different ideas with Catasian
          face.
        </p>
        <p className={styles.text}>
          After experimenting with numerous art media and styles, I now focus on
          painting with acrylics on paper with details added with colored
          pencils. I love flat colors, simple geometry, mysterious symbols, and
          incorporating languages in my works.
        </p>
      </div>
    </div>
  );
};

export default Bio;
