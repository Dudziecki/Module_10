import React, { ReactNode, MouseEvent } from "react";
import "./Modal.css";
import { CrossIcon } from "../../../assets/icons/CrossIcon";

type ModalPropsType = {
  isOpen: boolean;
  title?: string;
  onClose: () => void;
  children: ReactNode;
  footer?: ReactNode;
};

export const Modal = ({
  isOpen,
  title,
  onClose,
  children,
  footer,
}: ModalPropsType) => {
  function handleModalClick(e: MouseEvent<HTMLDialogElement>) {
    e.stopPropagation();
  }

  if (!isOpen) return null;

  return (
    <section className="modal-overlay" onClick={onClose}>
      <dialog className="modal" open onClick={handleModalClick}>
        {title && (
          <header className="modal-header">
            <h3>{title}</h3>
            <CrossIcon onClick={onClose} aria-label="Close modal" />
          </header>
        )}

        <main className="modal-content">{children}</main>

        {footer && <footer className="modal-footer">{footer}</footer>}
      </dialog>
    </section>
  );
};
