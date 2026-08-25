import React from "react";
import { FiEye } from "react-icons/fi";
import { FiEyeOff } from "react-icons/fi";
import { AiOutlineShopping } from "react-icons/ai";

function ProductCard({
  id,
  title,
  description,
  img,
  isPublished,
  price,
  entity,
}) {
  return (
    <div className="p-5 bg-[var(--bg-card)]  border-[1px] cursor-pointer rounded-md border-2 border-[var(--border-light)] hover:border-[#929292] duration-300">
      <img
        className="size-full object-cover h-[200px] hover:scale-[1.05] duration-300 rounded-lg"
        src={img}
      />

      <h1 className="text-lg font-bold mt-2 text-[var(--text-primary)]">
        {title}
      </h1>

      <span className="line-clamp-2 w-full text-sm text-[var(--text-muted)] mt-2">
        {description}
      </span>

      <div className="w-full flex justify-between items-center mt-4">
        <div className="">
          {isPublished ? (
            <div className="text-[12px] px-3 py-1.5 rounded-md text-green-400/80 bg-green-400/10 flex justify-center items-center gap-1.5 border border-green-400/80">
              {" "}
              <FiEye /> <span>منتشر شده</span>
            </div>
          ) : (
            <div className="text-[12px] px-3 py-1.5 rounded-md text-red-400/80 bg-red-400/10 flex justify-center items-center gap-1.5 border border-red-400/80">
              {" "}
              <FiEyeOff />
              <span>مخفی شده</span>
            </div>
          )}
        </div>

        <div className="text-[var(--text-muted)] flex justify-center items-center gap-2">
          <AiOutlineShopping />
          <span className=" text-[12px]">{`تعداد موجودی : ${entity}`}</span>
        </div>
      </div>

      <div className="text-sm  mt-3 text-[var(--text-muted)]">
        <span className="text-lg font-bold  text-[var(--text-primary)] pl-1">
          {price.toLocaleString("fa-IR")}
        </span>
        تومان
      </div>
    </div>
  );
}

export default ProductCard;
