import { Outlet } from "react-router-dom";
import { bio } from "../../data/bio";
import MenuAbout from "./MenuAbout";

const About = () => {
  return (
    <>
      <MenuAbout />
      <h1>About</h1>
      <Outlet />
    </>
  );
};

export default About;
