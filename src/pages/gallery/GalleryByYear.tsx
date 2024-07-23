import { Outlet } from "react-router-dom";
import { MenuProjects } from "./MenuProjects";

const GalleryByYear = () => {
  return (
    <>
      <MenuProjects />
      <Outlet />
    </>
  );
};

export default GalleryByYear;
