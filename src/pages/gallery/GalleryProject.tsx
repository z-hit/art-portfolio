import { Link, useLocation, useParams } from "react-router-dom";
import styles from "./Portfolio.module.css";
import { nanoid } from "nanoid";
import { TArtwork } from "../../utils/types";
import { artworks } from "../../data/artworks";
import { projects } from "../../data/projects";
import SEO from "../../components/seo/seo";
import CardUI from "../../components/ui/cardUI/CardUI";

const GalleryProject = () => {
  const location = useLocation();
  const { project } = useParams();

  const projectArtworks: TArtwork[] = project
    ? artworks.filter((artwork) => artwork.project === project)
    : [];

  const titleSEO = project
    ? projects.filter((proj) => proj.id === project)[0].name.toUpperCase() +
      " " +
      " | Artist Zhenya Hitrova"
    : "Gallery | Artist Zhenya Hitrova";

  return (
    <div className={styles.wrapper}>
      <SEO
        title={titleSEO}
        description={`${titleSEO} - art project by contemporary Russian artist Zhenya Hitrova`}
      />
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
