import {
  Navigate,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from "react-router-dom";
import Page404 from "../../pages/page404/Page404";
import Contact from "../../pages/contact/Contact";
import Home from "../../pages/home/Home";
import Portfolio from "../../pages/gallery/Portfolio";
import About from "../../pages/about/About";
import Layout from "../layout/Layout";
import Bio from "../../pages/bio/Bio";
import Cv from "../../pages/cv/Cv";
import styles from "./App.module.css";
import Statement from "../../pages/statement/Statement";
import GalleryProject from "../../pages/gallery/GalleryProject";
import GalleryYear from "../../pages/gallery/GalleryYear";
import ArtworkPreview from "../artwork-preview/ArtworkPreview";
import Modal from "../modal/Modal";
import WechatQR from "../ui/wechat/WechatQR";

function App() {
  const location = useLocation();
  const backgroundLocation = location.state?.background;
  const navigate = useNavigate();
  const handleCloseModal = () => navigate(-1);

  return (
    <div className={styles.app}>
      <Routes location={backgroundLocation || location}>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/gallery" element={<Portfolio />}>
            <Route index element={<Navigate to="/gallery/2024" replace />} />
            <Route path="/gallery/:year" element={<GalleryYear />}>
              <Route path=":project" element={<GalleryProject />}></Route>
            </Route>
            <Route
              path="/gallery/2017"
              element={<Navigate to="/gallery/2017/catasian" replace />}
            />
            <Route
              path="/gallery/2018"
              element={<Navigate to="/gallery/2018/best-2018" replace />}
            />
            <Route
              path="/gallery/2019-2020"
              element={
                <Navigate to="/gallery/2019-2020/best-2019-2020" replace />
              }
            />
            <Route
              path="/gallery/2024"
              element={<Navigate to="/gallery/2024/fish-and-birds" replace />}
            />
          </Route>
          <Route path="/about" element={<About />}>
            <Route index element={<Navigate to="/about/bio" replace />} />
            <Route path="/about/bio" element={<Bio />} />
            <Route path="/about/statement" element={<Statement />} />
            <Route path="/about/cv" element={<Cv />} />
          </Route>
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Page404 />} />
        </Route>
      </Routes>

      {backgroundLocation && (
        <Routes>
          <Route
            path="/gallery/:year/:project/:artwork"
            element={
              <Modal onClose={handleCloseModal}>
                <ArtworkPreview />
              </Modal>
            }
          />

          <Route
            path="/contact/wechat"
            element={
              <Modal onClose={handleCloseModal}>
                <WechatQR />
              </Modal>
            }
          />
        </Routes>
      )}
    </div>
  );
}

export default App;
