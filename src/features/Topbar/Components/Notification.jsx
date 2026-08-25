import React from "react";
import { IoMdNotificationsOutline } from "react-icons/io";

function Notification() {
  return (
    <div
      className="w-[40px] h-[40px] flex justify-center items-center text-2xl  hover:bg-green-400/80 hover:border-green-400/80 duration-300 cursor-pointer 
      text-[var(--text-muted)] bg-[var(--bg-secondary)] border-[var(--border-light)] border-[1px] rounded-md hover:text-[var(--text-primary)] font-extrabold"
    >
      <IoMdNotificationsOutline />
    </div>
  );
}

export default Notification;
