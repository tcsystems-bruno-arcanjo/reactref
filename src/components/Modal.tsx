import React, { forwardRef } from "react";

export interface ModalHandles {
  openModal: () => void;
}

const Modal: React.ForwardRefRenderFunction<ModalHandles> = (props, ref) => {
  const [visible, setVisible] = React.useState(true);

  const handleCloseModal = React.useCallback(() => {
    setVisible(false);
  }, []);

  const openModal = React.useCallback(() => {
    setVisible(true);
  }, []);

  React.useImperativeHandle(ref, () => {
    return {
      openModal
    }
  })
  
  if (!visible) {
    return null;
  }

  return (
    <>
      <div>Modal aberto</div>
      <button onClick={handleCloseModal}>Fechar modal</button>
    </>
  )
}

export default forwardRef(Modal);