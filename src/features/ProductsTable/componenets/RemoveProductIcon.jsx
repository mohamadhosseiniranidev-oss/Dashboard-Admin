import React from "react";
import Modal from "../../../Components/common/Modal";
import { FaTrash } from "react-icons/fa";

function RemoveProductIcon({ product, handler }) {
  const Triger = () => {
    return (
      <div className="text-red-500 cursor-pointer">
        <FaTrash />
      </div>
    );
  };
  return (
    <Modal Triger={Triger} title="حذف محصول" handler={()=> handler(product.id)}>
      <div>
        <div className="flex items-center justify-center">
          ایا از حذف
          <span className="bg-red-200 text-md font-bold px-2 py-1 rounded-md text-red-500 mx-2">
            {product.title}
          </span>
          اطمینان دارید ؟
        </div>
      </div>
    </Modal>
  );
}

export default RemoveProductIcon;
