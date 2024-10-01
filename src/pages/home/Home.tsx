import { useEffect } from "react";
import styles from "./Home.module.css";
import SEO from "../../components/seo/seo";
import { seoHome } from "../../components/seo/seoData";
import { Link } from "react-router-dom";

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
    <Link to={"/gallery"}>
      <SEO title={seoHome.title} description={seoHome.description} />
      <picture id="home-photo" draggable={false} className={styles.image_box}>
        <source
          media="(max-width:450px)"
          srcSet={require("../../assets/images/home-cover-mobile.JPG")}
        ></source>
        <source
          media="(min-width:450px)"
          srcSet={require("../../assets/images/home-cover-desktop.JPG")}
        ></source>
        <img
          src={require("../../assets/images/home-cover-desktop.JPG")}
          className={styles.image}
          alt="Acrylic painting of turquoise magic Catasian fish with chicken legs and angel wings by artist Zhenya Hitrova"
          width="300"
          height="auto"
        />
      </picture>
    </Link>
  );
};

export default Home;
