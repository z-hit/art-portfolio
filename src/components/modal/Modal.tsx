import { memo, ReactNode, useEffect } from "react";
import ReactDOM from "react-dom";
import { ModalUI } from "../ui/modalUI/ModalUI";

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
    document.body.style.overflowY = "hidden";

    return () => {
      document.removeEventListener("keydown", handleEsc);
      document.body.style.overflowY = "scroll";
    };
  }, [onClose]);

  return ReactDOM.createPortal(
    <ModalUI onClose={onClose}>{children}</ModalUI>,
    modalRoot as HTMLDivElement
  );
});
