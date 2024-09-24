import { useEffect } from "react";
import styles from "./Home.module.css";
import { Helmet } from "react-helmet";

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
      <Helmet>
        <title>Home | Artist Zhenya Hitrova</title>
        <meta
          name="description"
          content="Home page of the artist Zhenya Hitrova portfolio website, contemporary Russian art. Biography, Artists statement, CV, Gallery, Contacts"
        />
      </Helmet>
      <img
        id="home-photo"
        draggable={false}
        src={require("../../assets/images/Home-cover.JPG")}
        className={styles.image}
        alt="Acrylic painting of turquoise magic Catasian fish with chicken legs and angel wings by artist Zhenya Hitrova"
        width="300"
        height="auto"
      />
    </div>
  );
};

export default Home;
