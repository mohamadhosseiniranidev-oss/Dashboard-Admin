import React from "react";

import DefulteBotton from "./DefulteBotton";

function TableHeader({ title, Botton }) {
  
  return (
    <div className="w-full flex justify-between items-center">
      <h1 className="text-lg font-bold text-[var(--text-secondary)] ">
        {title}
      </h1>

      <div>
        {Botton || <DefulteBotton />} 
      </div>
    </div>
  );
}

export default TableHeader;
