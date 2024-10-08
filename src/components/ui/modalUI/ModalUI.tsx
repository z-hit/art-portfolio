import { memo, ReactNode } from "react";
import styles from "./Modal.module.css";
import { CloseIcon } from "../close-icon/CloseIcon";

export type TModalUIProps = {
  onClose: () => void;
  children?: ReactNode;
};

export const ModalUI = memo(({ onClose, children }: TModalUIProps) => {
  return (
    <>
      <div className={styles.modal}>
        <div className={styles.content}>
          <button
            id="close_button"
            onClick={onClose}
            className={styles.button}
            type="button"
          >
            <CloseIcon />
          </button>
          {children}
        </div>
      </div>
    </>
  );
});
