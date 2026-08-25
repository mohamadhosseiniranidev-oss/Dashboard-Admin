import clsx from "clsx";
import React, { useEffect } from "react";
import { useState } from "react";
function Pagination({ items, setItems, itemsPerPage }) {
  const [crurrentPage, setCurrentPage] = useState(1);
  let countPage = Math.ceil(items.length / itemsPerPage);

  useEffect(() => {
    setItems(
      items.slice(
        (crurrentPage - 1) * itemsPerPage,
        crurrentPage * itemsPerPage,
      ),
    );
  }, [crurrentPage]);

  const renderPagenation = () => {
    let pageNumbers = [];

    for (let i = 1; i <= countPage; i++) {
      pageNumbers.push(
        <button
          key={i}
          onClick={() => setCurrentPage(i)}
          className={clsx(
            "px-3 py-1 pt-1.5 text-[var(--text-muted)] border border-[var(--text-muted)] cursor-pointer rounded-md hover:bg-white/10 duration-200",
            { "bg-green-500/10 text-white border-white": crurrentPage === i },
          )}
        >
          {i}
        </button>,
      );
    }

    return pageNumbers;
  };

  return (
    <div className="w-full flex justify-center items-center gap-2 mt-6">
      <button
        disabled={crurrentPage === 1}
        onClick={() => setCurrentPage(crurrentPage - 1)}
        className={clsx(
          "px-3 py-1 text-[var(--text-muted)] border border-[var(--text-muted)] cursor-pointer rounded-md hover:bg-white/10 duration-200",
          { "opacity-20": crurrentPage === 1 },
        )}
      >
        قبلی
      </button>
      {renderPagenation().map((item) => item)}
      <button
        disabled={crurrentPage === countPage}
        onClick={() => setCurrentPage(crurrentPage + 1)}
        className={clsx(
          "px-3 py-1  text-[var(--text-muted)] border border-[var(--text-muted)] cursor-pointer rounded-md hover:bg-white/10 duration-200",
          { "opacity-20": crurrentPage === countPage },
        )}
      >
        بعدی
      </button>
    </div>
  );
}

export default Pagination;
