import { Link, Outlet, useLocation, useParams } from "react-router-dom";
import CardUI from "../../components/ui/card/CardUI";
import styles from "./Portfolio.module.css";
import { nanoid } from "nanoid";
import { TArtwork } from "../../utils/types";
import artworks from "../../data/artworks";

export const GalleryProject = () => {
  const location = useLocation();
  const { project } = useParams();

  const projectArtworks: TArtwork[] = project
    ? artworks.filter((artwork) => artwork.project === project)
    : [];

  return (
    <div className={styles.wrapper}>
      {projectArtworks.map((artwork) => (
        <Link
          className={styles.article}
          to={`/gallery/${artwork.year}/${artwork.project}/${artwork._id}`}
          state={{ background: location }}
          key={nanoid()}
        >
          <CardUI artwork={artwork} key={nanoid()} project={projectArtworks} />
        </Link>
      ))}
    </div>
  );
};
