import React from "react";

function ModalFooter({handler,closeModal}) {
  return (
    <div className="w-full p-3.5 px-5 border-t-2 border-[var(--border-light)] flex justify-start items-center gap-3">
      <button
        onClick={() => {
          (handler(), closeModal());
        }}
        className="px-4 py-1 pt-1.5 text-[var(--text-primary)] bg-green-500/65 rounded-md cursor-pointer hover:bg-green-800/90 duration-200"
      >
        تایید
      </button>
      <button
        onClick={closeModal}
        className="px-4 py-1 pt-1.5 rounded-md text-[var(--text-muted)] border border-[var(var(--text-muted))] cursor-pointer hover:bg-white/5 duration-200"
      >
        {" "}
        انصراف
      </button>
    </div>
  );
}

export default ModalFooter;
