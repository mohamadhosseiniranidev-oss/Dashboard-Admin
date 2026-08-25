import React from "react";
import LastProducts from "./Components/LastProducts";
import LastUsers from "./Components/LastUsers";

function QuickOverview() {
  return (
    <div className="grid grid-cols-[5fr_3fr] gap-6 mt-12 w-full ">
      <LastProducts />
      <LastUsers />
    </div>
  );
}

export default QuickOverview;
