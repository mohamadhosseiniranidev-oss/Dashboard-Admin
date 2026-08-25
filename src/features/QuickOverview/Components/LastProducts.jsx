import React from "react";
import SectionTitel from "./../../../Components/common/SectionTitel";
import SectionFooter from "../../../Components/common/SectionFooter";
import { products } from "../../../data/products.js";
import { FaEllipsisVertical } from "react-icons/fa6";

function LastProducts() {
  let lastPeroducts = products.slice(-3).reverse();
  return (
    <div className="h-max  rounded-md bg-[var(--bg-card)] border-[1px] border-[var(--border-light)] p-8">
      <SectionTitel title="آخرین محصولات" />
      <div className="flex flex-col justify-start items-center gap-4 mt-6 mb-10 ">
        {lastPeroducts.map((product) => (
          <div
            key={product.id}
            className="w-full h-[130px] flex justify-between items-center rounded-md p-4 gap-4 border-[1px] border-[var(--border-light)] cursor-pointer hover:scale-[1.03] hover:border-[#8f8f8f] duration-300"
          >
            <img className="w-[110px] h-[96px] rounded-md" src={product.img} />

            <div className=" w-full h-full flex flex-col justify-between ">
              <h1 className="text-[var(--text-primary)] font-bold">{product.title}</h1>
              <span className="text-[var(--text-muted)] text-sm font-light line-clamp-1">
                {product.description}
              </span>

              <div className=" flex justify-between items-center">
                <div className=" text-md text-[var(--text-muted)]">
                  <span className="text-lg font-bold text-[var(--text-primary)]">
                    {product.price.toLocaleString("fa-IR")}
                  </span>{" "}
                  تومان
                </div>
                <div className="text-[var(--text-muted)]">
                  <FaEllipsisVertical  size={20}/>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <SectionFooter
        count={products.length}
        button={{ title: "نمایش تمام محصولات", link: "/products" }}
      />
    </div>
  );
}

export default LastProducts;
