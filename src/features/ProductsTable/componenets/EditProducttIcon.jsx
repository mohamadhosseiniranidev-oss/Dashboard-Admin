import React from "react";
import { FaEdit } from "react-icons/fa";
import Modal from "../../../Components/common/Modal";

function EditProducttIcon() {
  const Triger = () => {
    return (
      <div className="text-green-500 text-xl cursor-pointer">
        <FaEdit />
      </div>
    )
  };

  return (
    <Modal Triger={Triger} title="تغییر جزئیات محصول">
      
    </Modal>
  );
}

export default EditProducttIcon;
