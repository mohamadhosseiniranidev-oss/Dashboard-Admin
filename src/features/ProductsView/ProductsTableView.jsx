import TableHeadCell from "../../Components/common/Table/elements/TableHeadCell";
import TableHead from "../../Components/common/Table/elements/TableHead";
import TableBody from "../../Components/common/Table/elements/TableBody";
import TableCell from "../../Components/common/Table/elements/TableCell";
import { productsAllTableHeadRow , products} from "../../data/products";
import TableRow from "../../Components/common/Table/elements/TableRow";
import Table from "../../Components/common/Table/Table";
import { useState } from "react";
import React from "react";
import RemoveProductIcon from "../../features/ProductsTable/componenets/RemoveProductIcon";
import ChangeVisibilityIcon from "../../features/ProductsTable/componenets/ChangeVisibilityIcon";
import EditProducttIcon from "../../features/ProductsTable/componenets/EditProducttIcon";

function ProductsTableView({ allProducts, setAllProducts }) {


  const deleteProduct = (id) => {
    let newProducts = allProducts.filter((product) => product.id != id);

    setAllProducts(newProducts);
  };

  const changeVisibility = (id) => {
    let newProducts = allProducts.map((product) => {
      if (product.id == id) {
        product.isPublished = !product.isPublished;
      }
      return product;
    });

    setAllProducts(newProducts);
  };

  return (
    <div className="w-full rounded-md bg-[var(--bg-card)] border-[1px] border-[var(--border-light)] p-8 mt-12 ">
      <Table
        header={{ title: "لیست کامل محصولات", Botton: "" }}
        pagination={{
          items: products,
          setItems: setAllProducts,
          itemsPerPage: 12,
        }}
      >
        <TableHead>
          {productsAllTableHeadRow.map((item) => (
            <TableHeadCell key={item}>{item}</TableHeadCell>
          ))}
        </TableHead>

        <TableBody>
          {allProducts.map((product, index) => (
            <TableRow isEven={index % 2 === 0} key={product.id}>
              <TableCell>...{product.id.slice(0, 10)}</TableCell>
              <TableCell>{product.title}</TableCell>
              <TableCell>
                <img
                  className="w-[100px] h-12 rounded-md"
                  src={product.img}
                  alt=""
                />
              </TableCell>
              <TableCell>
                {product.isPublished ? (
                  <p className="inline text-sm  p-2 border rounded-md border-green-400 text-green-400 bg-green-400/10">
                    عمومی
                  </p>
                ) : (
                  <p className="inline text-sm  p-2 border rounded-md border-red-400 text-red-400 bg-red-400/10">
                    خصوصی
                  </p>
                )}
              </TableCell>
              <TableCell>
                <div>{product.price.toLocaleString("fa-IR")}</div> <p>تومان</p>
              </TableCell>
              <TableCell>
                <div>{product.entity}</div>
              </TableCell>
              <TableCell>
                <div className="flex justify-center items-center gap-2">
                  <RemoveProductIcon
                    product={product}
                    handler={deleteProduct}
                  />
                  <ChangeVisibilityIcon
                    product={product}
                    handler={changeVisibility}
                  />
                  <EditProducttIcon product={product} />
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

export default ProductsTableView;
