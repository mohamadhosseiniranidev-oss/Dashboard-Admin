import React from "react";
import { IoCloseSharp } from "react-icons/io5";

function ModalHeader({ title, closeModal }) {
  return (
    <div className="w-full p-5 border-b-2 border-[var(--border-light)] flex justify-between items-center">
      <h1 className="text-[var(--text-primary)]">{title}</h1>
      <span
        onClick={closeModal}
        className="text-xl text-[var(--text-muted)] cursor-pointer"
      >
        <IoCloseSharp />
      </span>
    </div>
  );
}

export default ModalHeader;
