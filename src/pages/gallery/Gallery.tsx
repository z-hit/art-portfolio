import { Outlet } from "react-router-dom";
import MenuGallery from "./MenuGallery";

const Gallery = () => {
  return (
    <>
      <MenuGallery />
      <Outlet />
    </>
  );
};

export default Gallery;
