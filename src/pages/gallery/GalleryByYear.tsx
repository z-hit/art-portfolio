import { useParams } from "react-router-dom";
import styles from "./Gallery.module.css";

export const GalleryByYear = () => {
  const { year } = useParams();

  return (
    <div className={styles.gallery}>
      <h2>Galley by year: {year} </h2>
      <h2>Galley by year: {year} </h2>
      <h2>Galley by year: {year} </h2>
      <h2>Galley by year: {year} </h2>
      <h2>Galley by year: {year} </h2>
      <h2>Galley by year: {year} </h2>
      <h2>Galley by year: {year} </h2>
      <h2>Galley by year: {year} </h2>
      <h2>Galley by year: {year} </h2>
      <h2>Galley by year: {year} </h2>
      <h2>Galley by year: {year} </h2>
    </div>
  );
};
