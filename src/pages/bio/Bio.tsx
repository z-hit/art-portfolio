import styles from "./Bio.module.css";

export const Bio = () => {
  return (
    <div className={styles.section}>
      <img
        src={require("../../assets/images/artist-portrait.JPG")}
        className={styles.image}
        alt="artist portrait"
        width="300"
        height="auto"
      ></img>
      <div className={styles.text_box}>
        <p className={styles.text}>
          Hello, dear art lover. My name is Zhenya Hitrova and I am a
          self-taught mixed media artist and animal enthusiast from Russia.
        </p>
        <p className={styles.text}>
          I have been passionate about art since early childhood, and started
          developing my art career professionally in 2015 when I moved to China.
        </p>
        <p className={styles.text}>
          In Shanghai, I participated in various group art exhibitions as well
          as in charity events aimed at helping stray animals.
        </p>
        <p className={styles.text}>
          In 2017, in my tiny sketchbook on the board of the plane flying from
          Hong Kong to Taiwan my signature Catasian face was invented. After
          that, I started painting more and more creatures with this mystical
          face, which later became an absolute center of my artistic practice.
        </p>
        <p className={styles.text}>
          In 2019, I moved back to my hometown in Russia where I continued
          developing different ideas with a Catasian face.
        </p>
        <p className={styles.text}>
          After experimenting with numerous art media and styles, I now focus on
          painting with acrylics on paper with details added with colored
          pencils. I love flat colors, simple geometry, mysterious symbols, and
          mixing languages.
        </p>
        <p className={styles.text}>
          My main goal when creating artworks is to bring a joy of colors and
          bit of weirdness and fun together into this world.
        </p>
      </div>
    </div>
  );
};
