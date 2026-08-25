import React from "react";
import { productsAllTableHeadRow, products } from "../../data/products";
import Pagination from "../../Components/common/Table/elements/Pagination";
import { useState } from "react";
import { FaEllipsisVertical } from "react-icons/fa6";
import ProductCard from "./ProductCard";

function ProductsGridView({ allProducts, setAllProducts }) {


  return (
    <div className=" w-full mt-12">
      <div className=" w-full grid-cols-4 grid gap-10">
        {allProducts.map((product) => (
          <ProductCard {...product}/>
        ))}
      </div>
      <Pagination
       
          items= {products}
          setItems= {setAllProducts}
          itemsPerPage= {12}
       
      />
    </div>
  );
}

export default ProductsGridView;
