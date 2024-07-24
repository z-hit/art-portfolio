import { Navigate, Route, Routes } from "react-router-dom";
import Page404 from "../../pages/page404/Page404";
import Contact from "../../pages/contact/Contact";
import Home from "../../pages/home/Home";
import Portfolio from "../../pages/gallery/Portfolio";
import About from "../../pages/about/About";
import Layout from "../layout/Layout";
import { Bio } from "../../pages/bio/Bio";
import { Cv } from "../../pages/cv/Cv";
import { Qa } from "../../pages/qa/Qa";
import styles from "./App.module.css";
import Gallery2017 from "../../pages/gallery/gallery-by-year/Gallery2017";
import Gallery2024 from "../../pages/gallery/gallery-by-year/Gallery2024";
import { ArtProject } from "../../pages/gallery/ArtProject";
import { Statement } from "../../pages/statement/Statement";

function App() {
  return (
    <div className={styles.app}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/gallery" element={<Portfolio />}>
            <Route index element={<Navigate to="/gallery/2024" replace />} />
            <Route path="/gallery/:year" element={<ArtProject />} />
            <Route path="/gallery/2024" element={<Gallery2024 />}>
              <Route
                index
                element={<Navigate to="/gallery/2024/fish" replace />}
              />
              <Route path="/gallery/2024/:project" element={<ArtProject />} />
            </Route>
            <Route path="/gallery/2017" element={<Gallery2017 />}>
              <Route
                index
                element={<Navigate to="/gallery/2017/catasian" replace />}
              />
              <Route path="/gallery/2017/:project" element={<ArtProject />} />
            </Route>
          </Route>
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />}>
            <Route index element={<Navigate to="/about/bio" replace />} />
            <Route path="/about/bio" element={<Bio />} />
            <Route path="/about/statement" element={<Statement />} />
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
