import React from "react";
import { PiPlantFill } from "react-icons/pi";
import { NavLink } from "react-router";

function Logo() {
  return (
    <NavLink to={"/"} className="flex justify-center items-center gap-3">
      <div className="w-[40px] h-[40px] rounded-md bg-green-400/80 text-[var(--text-primary)] flex justify-center items-center text-2xl">
        <PiPlantFill />
      </div>
      <h1 className="text-xl text-[var(--text-primary)]">پنل سبز</h1>
    </NavLink>
  );
}

export default Logo;
