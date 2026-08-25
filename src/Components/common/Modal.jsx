import clsx from "clsx";
import React, { useEffect, useState } from "react";

import ModalFooter from "./ModalFooter";
import ModalHeader from "./ModalHeader";

function Modal({ Triger, children, title, handler }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <div onClick={openModal}>{Triger()}</div>

      <div
        className={clsx(
          "fixed top-0 right-0 w-full h-[100vh] z-20  backdrop-blur-sm  justify-center items-center ",
          isModalOpen ? "flex" : "hidden",
        )}
      >
        <div className="w-[500px] bg-[var(--bg-secondary)] rounded-md ">
          <ModalHeader title={title} closeModal={closeModal} />
          <div className="p-5">{children}</div>
          <ModalFooter handler={handler} closeModal={closeModal} />
        </div>
      </div>
    </>
  );
}

export default Modal;
