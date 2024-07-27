import { memo, ReactNode, useEffect } from "react";
import ReactDOM from "react-dom";
import { ModalUI } from "./ModalUI";

export type TModalProps = {
  onClose: () => void;
  children?: ReactNode;
};

const modalRoot = document.getElementById("modal");

export const Modal = memo(({ onClose, children }: TModalProps) => {
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      e.key === "Escape" && onClose();
    };

    document.addEventListener("keydown", handleEsc);
    return () => {
      document.removeEventListener("keydown", handleEsc);
    };
  }, [onClose]);

  return ReactDOM.createPortal(
    <ModalUI onClose={onClose}>{children}</ModalUI>,
    modalRoot as HTMLDivElement
  );
});
