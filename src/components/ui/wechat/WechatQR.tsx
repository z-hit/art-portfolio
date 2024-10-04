import styles from "./WechatQR.module.css";
import { Helmet } from "react-helmet";

const WechatQR = () => {
  return (
    <div className={styles.qr_box}>
      <Helmet>
        <title>WeChat QR code | Artist Zhenya Hitrova</title>
        <meta
          name="description"
          content="Scan WeChat QR code to add artist Zhenya Hitrova to your contacts. Contemporary Russian artist."
        />
      </Helmet>
      <img
        className={styles.qr_picture}
        src={require("../../../assets/images/wechatqr.jpg")}
        alt="WeChat QR code to scan and follow artist"
        width="100%"
        height="auto"
      />
    </div>
  );
};

export default WechatQR;
