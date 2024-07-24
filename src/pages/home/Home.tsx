import styles from "./Home.module.css";

const Home = () => {
  return (
    <div className={styles.image_box}>
      <img
        src={require("../../assets/images/Home-cover.JPG")}
        className={styles.image}
        alt="Acrylic painting of urquoise magic fish with chicken legs and angel wings"
        width="300"
        height="auto"
      />{" "}
    </div>
  );
};

export default Home;
