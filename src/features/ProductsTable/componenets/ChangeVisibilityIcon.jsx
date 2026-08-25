import React from "react";
import Modal from "../../../Components/common/Modal";
import { IoEyeSharp } from "react-icons/io5";
import clsx from "clsx";

function ChangeVisibilityIcon({ product, handler }) {
  const Triger = () => {
    return (
      <div className="text-blue-500 text-xl cursor-pointer">
        <IoEyeSharp />
      </div>
    );
  };

  return (
    <Modal
      Triger={Triger}
      title="تغییر وضعیت انتشار"
      handler={() => handler(product.id)}
    >
      <div>
        <div className="flex items-center justify-center">
          {" "}
          ایا از
          <span
            className={clsx(
              " text-md font-bold   mx-2",
              product.isPublished
                ? "text-red-500 text-shadow-lg text-shadow-red-500/10"
                : "text-green-500 text-shadow-lg text-shadow-green-500/10",
            )}
          >
            {product.isPublished ? "خصوصی" : "عمومی"}
          </span>
          کردن این محصول اطمینان دارید ؟
        </div>
      </div>
    </Modal>
  );
}

export default ChangeVisibilityIcon;
