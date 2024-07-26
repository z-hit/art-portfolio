import { useParams } from "react-router-dom";
import { projects } from "../../data/projects";
import CardUI from "../../components/ui/card/CardUI";
import styles from "./Portfolio.module.css";
import { nanoid } from "nanoid";

export const GalleryProject = () => {
  const { project } = useParams();

  const artworks = project
    ? projects.filter((proj) => proj.id === project)[0].artworks
    : [];

  return (
    <div className={styles.wrapper}>
      {artworks.map((artwork) => (
        <CardUI artwork={artwork} key={nanoid()} />
      ))}
    </div>
  );
};
