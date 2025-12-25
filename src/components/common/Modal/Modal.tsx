import React, { FC, ReactNode, useEffect } from 'react';
import './Modal.css';
import { CrossIcon } from '../../../assets/icons/CrossIcon';

type ModalPropsType = {
  isOpen: boolean;
  title?: string;
  onClose: () => void;
  children: ReactNode;
  footer?: ReactNode;
};

export const Modal: FC<ModalPropsType> = ({
  isOpen,
  title,
  onClose,
  children,
  footer,
}) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <section className="modal-overlay" onClick={onClose}>
      <dialog className="modal" open onClick={(e) => e.stopPropagation()}>
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
