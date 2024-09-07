import styles from "./WechatQR.module.css";

export const WechatQR = () => {
  return (
    <div className={styles.qr_box}>
      <img
        className={styles.qr_picture}
        src={require("../../../assets/images/wechatqr.JPG")}
        alt="WeChat QR code to scan and follow artist"
        width="100%"
        height="auto"
      />
    </div>
  );
};
