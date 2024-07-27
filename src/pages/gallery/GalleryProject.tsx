import { useParams } from "react-router-dom";
import CardUI from "../../components/ui/card/CardUI";
import styles from "./Portfolio.module.css";
import { nanoid } from "nanoid";
import { TArtwork } from "../../utils/types";
import artworks from "../../data/artworks";

export const GalleryProject = () => {
  const { project } = useParams();

  const projectArtworks: TArtwork[] = project
    ? artworks.filter((artwork) => artwork.project === project)
    : [];

  const handleCardClick = (artwork: TArtwork, project: TArtwork[]): void => {
    return console.log(artwork.name), console.log(project);
  };

  return (
    <div className={styles.wrapper}>
      {projectArtworks.map((artwork) => (
        <div
          onClick={() => handleCardClick(artwork, projectArtworks)}
          key={nanoid()}
        >
          <CardUI artwork={artwork} key={nanoid()} project={projectArtworks} />
        </div>
      ))}
    </div>
  );
};
