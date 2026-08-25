import React from "react";
import { NavLink } from "react-router";
import { clsx } from "clsx";

function SubMenu({ id, href, title, icon }) {


  return (
    <NavLink
      to={href}
      className=""
      className={({ isActive }) =>
        clsx(
          isActive
            ? "flex justify-start items-center gap-3 px-3 rounded-md w-full h-[50px] bg-[#1a2e22] text-green-400 cursor-pointer"
            : "flex justify-start items-center gap-3 px-3 rounded-md w-full h-[50px] hover:bg-[#ffffff10] cursor-pointer text-[var(--text-muted)] hover:text-[var(--text-secondary)]",
        )
      }
      end
    >
      <div className="text-xl">{icon()}</div>
      {title}
    </NavLink>
  );
}

export default SubMenu;
