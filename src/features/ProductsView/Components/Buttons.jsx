import React from "react";

import { LuTableProperties, LuLayoutGrid } from "react-icons/lu";
import Modal from "../../../Components/common/Modal";
import AddProductFields from "./AddProductFields";

let Buttons = ({ layout, setLayoutType, addNewProduct, setAddNewProduct, addProductHandler }) => {
  let ButtonModal = () => {
    return (
      <button
        className={
          "px-4 py-3 cursor-pointer border-[var(--border-light)] rounded-md text-[var(--text-primary)] border-[1px] text-sm font-medium hover:bg-green-400/70 hover:text-white duration-200 "
        }
      >
        ایجاد محصول
      </button>
    );
  };

  return (
    <>
      <div className="flex justify-center gap-3">
        <button
          onClick={setLayoutType}
          className="p-3 cursor-pointer border-[var(--border-light)] rounded-md text-[var(--text-primary)] border-[1px] text-sm font-medium hover:bg-[#ffffff10]"
        >
          {layout === "GRID" ? (
            <LuTableProperties size={20} />
          ) : (
            <LuLayoutGrid size={20} />
          )}
        </button>

        <Modal
          Triger={ButtonModal}
          title="ایجاد محصول"
          handler={addProductHandler}
        >
          <AddProductFields  addNewProduct={addNewProduct} setAddNewProduct={setAddNewProduct}/>
        </Modal>
      </div>
    </>
  );
};

export default Buttons;
