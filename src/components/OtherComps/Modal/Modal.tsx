import React, { FC, PropsWithChildren } from "react";
import cl from "./Modal.module.scss";

interface ModalProps extends PropsWithChildren {
  visible: boolean;
  setVisible: (value: boolean) => void;
}

const Modal: FC<ModalProps> = ({ children, visible, setVisible }) => {
  const rootClasses = [cl.Modal];
  if (visible) {
    rootClasses.push(cl.active);
  }

  return (
    <div className={rootClasses.join(" ")} onClick={() => setVisible(false)}>
      <div className={cl.ModalContent} onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
};

export default Modal;
