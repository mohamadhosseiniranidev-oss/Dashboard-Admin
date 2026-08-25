import React from "react";
import SearchBar from "./Components/SearchBar";
import Logo from "./Components/Logo";
import Notification from "./Components/Notification";
import AdminInfo from "./Components/AdminInfo.jsx";

function Topbar() {
  return (
    <div className="bg-[var(--bg-primary)] z-10 w-full h-[10vh] fixed top-0 flex justify-between px-10 border-[var(--border-light)] border-b-2">
      <Logo />

      <SearchBar />

      <div className="h-full  flex justify-center items-center">
        <Notification />
        <div className="w-[2px] h-[38px] bg-[var(--border-light)] mr-4 ml-2"></div>
        <AdminInfo />
      </div>
    </div>
  );
}

export default Topbar;
