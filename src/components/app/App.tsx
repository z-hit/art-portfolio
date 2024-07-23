import { Navigate, Route, Routes } from "react-router-dom";
import Page404 from "../../pages/page404/Page404";
import Contact from "../../pages/contact/Contact";
import Home from "../../pages/home/Home";
import Gallery from "../../pages/gallery/Gallery";
import About from "../../pages/about/About";
import Layout from "../layout/Layout";
import { Bio } from "../../pages/bio/Bio";
import { Cv } from "../../pages/cv/Cv";
import { Qa } from "../../pages/qa/Qa";
import styles from "./App.module.css";
import { GalleryProject } from "../../pages/gallery/GalleryProject";
import Gallery2017 from "../../pages/gallery/gallery-by-year/Gallery2017";
import Gallery2024 from "../../pages/gallery/gallery-by-year/Gallery2024";
import Gallery2018 from "../../pages/gallery/gallery-by-year/Gallery2018";

function App() {
  return (
    <div className={styles.app}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/gallery" element={<Gallery />}>
            <Route index element={<Navigate to="/gallery/2024" replace />} />
            <Route path="/gallery/2024" element={<Gallery2024 />}>
              <Route
                index
                element={<Navigate to="/gallery/2024/fish" replace />}
              />
              <Route
                path="/gallery/2024/:project"
                element={<GalleryProject />}
              />
            </Route>

            <Route path="/gallery/:year" element={<GalleryProject />} />
            <Route path="/gallery/2024" element={<Year2024 />}>
              <Route
                index
                element={<Navigate to="/gallery/2017/catasian" replace />}
              />
              <Route
                path="/gallery/2017/:project"
                element={<GalleryProject />}
              />
            </Route>
          </Route>
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />}>
            <Route index element={<Navigate to="/about/bio" replace />} />
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
