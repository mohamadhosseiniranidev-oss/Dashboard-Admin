import React from "react";
import TableHeader from "./elements/TableHeader";
import Pagination from "./elements/Pagination";


function Table({
  header,
  children,
  pagination = { items: null, setItems: null, itemsPerPage: null },
}) {


  let { title, Botton = undefined } = header;

  return (
    <div className=" flex-col flex justify-center items-center ">
      <TableHeader title={title} Botton={Botton} />
      <div className="w-full border border-[var(--border-light)] mt-10 rounded-md ">
        {children}
      </div>
      <Pagination {...pagination} />
    </div>
  );
}

export default Table;
