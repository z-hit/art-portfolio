import { Outlet } from "react-router-dom";
import MenuAbout from "./MenuAbout";

const About = () => {
  return (
    <>
      <MenuAbout />
      <Outlet />
    </>
  );
};

export default About;
