import React from "react";
import Table from "../../Components/common/Table/Table";
import { Link } from "react-router";
import { FaExternalLinkAlt } from "react-icons/fa";
import { productsTableHeadRow, products } from "../../data/products";
import TableHead from "../../Components/common/Table/elements/TableHead";
import TableHeadCell from "../../Components/common/Table/elements/TableHeadCell";
import TableBody from "../../Components/common/Table/elements/TableBody";
import TableRow from "../../Components/common/Table/elements/TableRow";
import TableCell from "../../Components/common/Table/elements/TableCell";
import RemoveProductIcon from "../../features/ProductsTable/componenets/RemoveProductIcon";
import ChangeVisibilityIcon from "../../features/ProductsTable/componenets/ChangeVisibilityIcon";
import EditProducttIcon from "../../features/ProductsTable/componenets/EditProducttIcon";
import { useState } from "react";

function ProductsTable() {
  let [lastProducts, setLastProducts] = useState([...products]);

  const deleteProduct = (id) => {
    let newProducts = lastProducts.filter((product) => product.id != id);

    setLastProducts(newProducts);
  };

  const changeVisibility = (id) => {
    let newProducts = lastProducts.map((product) => {
      if (product.id == id) {
        product.isPublished = !product.isPublished;
      }
      return product;
    });

    setLastProducts(newProducts);
  };

  function Botton() {
    return (
      <Link to="/products" className="flex justify-center items-center gap-2">
        <span className="border-b-2" style={{ color: "blue" }}>
          مشاهده همه
        </span>{" "}
        <FaExternalLinkAlt style={{ color: "blue" }} />
      </Link>
    );
  }

  return (
    <div className="w-full rounded-md bg-[var(--bg-card)] border-[1px] border-[var(--border-light)] p-8 mt-12 ">
      <Table
        header={{ title: "آخرین محصولات", Botton: Botton() }}
        pagination={{
          items: products,
          setItems: setLastProducts,
          itemsPerPage: 5,
        }}
      >
        <TableHead>
          {productsTableHeadRow.map((item) => (
            <TableHeadCell key={item}>{item}</TableHeadCell>
          ))}
        </TableHead>

        <TableBody>
          {lastProducts.map((product, index) => (
            <TableRow isEven={index % 2 === 0} key={product.id}>
              <TableCell>...{product.id.slice(0, 10)}</TableCell>
              <TableCell>{product.title}</TableCell>
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

export default ProductsTable;
