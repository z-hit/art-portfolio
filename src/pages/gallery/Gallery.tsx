import { Outlet } from "react-router-dom";
import MenuGallery from "./MenuGallery";

const Gallery = () => {
  return (
    <>
      <MenuGallery />
      <h1>Gallery</h1>
      <Outlet />
    </>
  );
};

export default Gallery;
