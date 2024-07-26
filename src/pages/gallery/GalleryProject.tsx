import { useParams } from "react-router-dom";
import { projects } from "../../data/projects";
import CardUI from "../../components/ui/card/CardUI";
import styles from "./Portfolio.module.css";
import { nanoid } from "nanoid";

export const GalleryProject = () => {
  const { project } = useParams();

  const artworks = project
    ? projects.filter((proj) => proj.name === project)[0].artworks
    : [];

  return (
    <div className={styles.gallery}>
      <ul className={styles.list}>
        {artworks.map((artwork) => (
          <li key={nanoid()} className={styles.list_item}>
            <CardUI artwork={artwork} />
          </li>
        ))}
      </ul>
    </div>
  );
};
