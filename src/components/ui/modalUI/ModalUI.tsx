import { memo, ReactNode } from "react";
import styles from "./Modal.module.css";
import { ModalOverlayUI } from "./ModalOverlay";
import { CloseIcon } from "../close-icon/CloseIcon";

export type TModalUIProps = {
  onClose: () => void;
  children?: ReactNode;
};

export const ModalUI = memo(({ onClose, children }: TModalUIProps) => (
  <>
    <div className={styles.modal}>
      <button onClick={onClose} className={styles.button} type="button">
        <CloseIcon />
      </button>
      <div className={styles.content}>{children}</div>
    </div>
    <ModalOverlayUI onClick={onClose} />
  </>
));
