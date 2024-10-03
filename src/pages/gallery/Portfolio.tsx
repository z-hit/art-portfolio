import { Outlet } from "react-router-dom";
import MenuYears from "./MenuYears";

const Portfolio = () => {
  return (
    <>
      <MenuYears />
      <Outlet />
    </>
  );
};

export default Portfolio;
