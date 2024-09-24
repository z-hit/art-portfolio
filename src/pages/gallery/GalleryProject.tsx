import { Link, useLocation, useParams } from "react-router-dom";
import CardUI from "../../components/ui/cardUI/CardUI";
import styles from "./Portfolio.module.css";
import { nanoid } from "nanoid";
import { TArtwork } from "../../utils/types";
import artworks from "../../data/artworks";
import { Helmet } from "react-helmet";

const GalleryProject = () => {
  const location = useLocation();
  const { project } = useParams();

  const projectArtworks: TArtwork[] = project
    ? artworks.filter((artwork) => artwork.project === project)
    : [];

  const titleSEO = project
    ? project.toUpperCase() + " | Artist Zhenya Hitrova"
    : "Gallery | Artist Zhenya Hitrova";

  return (
    <div className={styles.wrapper}>
      <Helmet>
        <title>{titleSEO}</title>
        <meta
          name="description"
          content={`${titleSEO} - art project by contemporary Russian artist Zhenya Hitrova`}
        />
      </Helmet>
      {projectArtworks.map((artwork) => (
        <Link
          to={`/gallery/${artwork.year}/${artwork.project}/${artwork._id}`}
          state={{ background: location }}
          key={nanoid()}
        >
          <CardUI artwork={artwork} key={nanoid()} />
        </Link>
      ))}
    </div>
  );
};

export default GalleryProject;
