
import React from "react";


function SectionTitel({ title, Button = undefined }) {

   
   
  
  return (
    <div className=" flex justify-between items-center ">
      <div className="text-2xl text-[var(--text-primary)]">
        <h1>{title}</h1>
      </div>

      {Button || ""}
    </div>
  );
}

export default SectionTitel;
