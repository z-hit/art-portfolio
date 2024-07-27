import { memo, ReactNode } from "react";
import styles from "./Modal.module.css";

export type TModalUIProps = {
  onClose: () => void;
  children?: ReactNode;
};

export const ModalUI = memo(({ onClose, children }: TModalUIProps) => (
  <>
    <div className={styles.modal}>
      <button onClick={onClose} className={styles.button} type="button">
        CLOSE MODAL
      </button>
      <div className={styles.content}>{children}</div>
    </div>
  </>
));
