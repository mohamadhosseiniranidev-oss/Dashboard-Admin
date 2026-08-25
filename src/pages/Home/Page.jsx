import React from "react";

import SectionTitel from "../../Components/common/SectionTitel";
import Summaries from "../../features/Summaries/Summaries";
import DetailsChart from "../../features/DetailsChart/DetailsChart.jsx";
import ProductsTable from "../../features/ProductsTable/ProductsTable.jsx";
import QuickOverview from "../../features/QuickOverview/QuickOverview.jsx";
import { useState } from "react";
import { NavLink, useNavigate } from "react-router";
import clsx from "clsx";

function Home() {

  let Button = () => {
    let [isClicked, setIsClicked] = useState(false);

    let navigation = useNavigate();
    const clickHandler = () => {
      setIsClicked(!isClicked);

      setTimeout(() => {
        navigation("products");
      }, 2000);
    };
    return (
      <NavLink
        className={clsx(
          "px-4 py-3 cursor-pointer border-[var(--border-light)] rounded-md text-[var(--text-primary)] border-[1px] text-sm font-medium hover:bg-[#ffffff10]",
          isClicked && "bg-[#ffffff10] ",
        )}
        onClick={clickHandler}
      >
        {isClicked ? "در حال انتقال ..." : "ایجاد محصول"}
      </NavLink>
    );
  };


  
  return (
    <div className="w-full ">
      <SectionTitel
        title="داشبورد"
        Button={<Button />}
      />
      <Summaries />
      <DetailsChart />
      <ProductsTable />
      <QuickOverview />
    </div>
  );
}

export default Home;
