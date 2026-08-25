import React from "react";
import SectionTitel from "../../Components/common/SectionTitel";
import { useState ,useEffect } from "react";
import clsx from "clsx";
import { LuTableProperties, LuLayoutGrid } from "react-icons/lu";
import ProductsTableView from "./../../features/ProductsView/ProductsTableView";
import ProductsGridView from "../../features/ProductsView/ProductsGridView.jsx";
import Modal from "../../Components/common/Modal";
import Buttons from "../../features/ProductsView/Components/Buttons.jsx";
import { products } from "../../data/products.js";

function Products() {
  let [allProducts, setAllProducts] = useState([...products]);
  let [layoutType, setLayoutType] = useState("TABLE");
  let [addNewProduct, setAddNewProduct] = useState({
    id: crypto.randomUUID(),
    title: "",
    description: "",
    img: "/images/product-img.png",
    isPublished: false,
    price: "",
    entity: "",
  });

 
  let addProductHandler = () => {
    setAddNewProduct([...allProducts, addNewProduct]);

    
    

    setAddNewProduct({
      id: crypto.randomUUID(),
      title: "",
      description: "",
      img: "/images/product-img.png",
      isPublished: false,
      price: "",
      entity: "",
    });
  };

  const ChangeLayout = () =>
    setLayoutType(layoutType == "GRID" ? "TABLE" : "GRID");

  return (
    <>
      <div className="w-full ">
        <SectionTitel
          title="لیست محصولات"
          Button={
            <Buttons
              layout={layoutType}
              setLayoutType={ChangeLayout}
              addNewProduct={addNewProduct}
              setAddNewProduct={setAddNewProduct}
              addProductHandler={addProductHandler}
            />
          }
        />

        {layoutType === "TABLE" ? (
          <ProductsTableView
            allProducts={allProducts}
            setAllProducts={setAllProducts}
          />
        ) : (
          <ProductsGridView
            allProducts={allProducts}
            setAllProducts={setAllProducts}
          />
        )}
      </div>
    </>
  );
}

export default Products;
