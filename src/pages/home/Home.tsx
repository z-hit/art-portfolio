import { useEffect } from "react";
import styles from "./Home.module.css";

const Home = () => {
  useEffect(() => {
    const homePhoto = document.getElementById("home-photo");
    const preventEvent = (event: any) => {
      event.preventDefault();
    };

    homePhoto && homePhoto.addEventListener("contextmenu", preventEvent);

    return () => {
      homePhoto && homePhoto.removeEventListener("contextmenu", preventEvent);
    };
  }, []);
  
  return (
    <div className={styles.image_box}>
      <img
        id="home-photo"
        draggable={false}
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
