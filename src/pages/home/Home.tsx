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
    <Link to={"/gallery"} className={styles.image_box}>
      <SEO title={seoHome.title} description={seoHome.description} />
      <img
        id="home-photo"
        draggable={false}
        src={require("../../assets/images/Home-cover.JPG")}
        className={styles.image}
        alt="Acrylic painting of turquoise magic Catasian fish with chicken legs and angel wings by artist Zhenya Hitrova"
        width="300"
        height="auto"
      />
    </Link>
  );
};

export default Home;
