import React from "react";
import menus from "../../data/menus.js";
import MenuTitel from "./Components/MenuTitel.jsx";
import SubMenu from "./Components/SubMenu.jsx";

function Sidebar() {

  let subMenu = menus[0].items

  
  return (
    <div className="w-[274px] h-[90vh] z-10  fixed bottom-0 right-0 bg-[var(--bg-secondary)] border-[var(--border-light)] border-l-2 flex flex-col justify-start items-center">
      <div className=" w-[80%] mt-[30px]">

          {menus.map((menuTitle)=> <MenuTitel key={menuTitle.id} {...menuTitle}/>)}

          <div className="w-full mt-3 flex flex-col justify-start items-center gap-3">
               {subMenu.map((data)=><SubMenu key={data.id} {...data}/>)}
          </div>
      </div>
    </div>
  );
}

export default Sidebar;
