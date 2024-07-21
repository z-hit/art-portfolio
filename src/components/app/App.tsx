import { Route, Routes } from "react-router-dom";
import Page404 from "../../pages/page404/Page404";
import Contact from "../../pages/contact/Contact";
import Home from "../../pages/home/Home";
import Gallery from "../../pages/gallery/Gallery";
import About from "../../pages/about/About";
import Layout from "../layout/Layout";
import { GalleryByYear } from "../../pages/gallery/GalleryByYear";
import { Bio } from "../../pages/about/Bio";
import { Cv } from "../../pages/about/Cv";
import { Qa } from "../../pages/about/Qa";
import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.app}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/gallery" element={<Gallery />}>
            <Route path="/gallery/:year" element={<GalleryByYear />} />
          </Route>
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />}>
            <Route path="/about/bio" element={<Bio />} />
            <Route path="/about/cv" element={<Cv />} />
            <Route path="/about/qa" element={<Qa />} />
          </Route>
          <Route path="*" element={<Page404 />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
