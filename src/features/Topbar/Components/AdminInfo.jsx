import React from "react";

function AdminInfo() {
  return (
    <div  className=" flex justify-center items-center gap-3 h-[75%] px-3  hover:bg-[#8b8b8b11] rounded-md cursor-pointer">
      <img className="w-[40px] h-[40px] rounded-full" src="./images/profile.jpg"  />
      <div className="flex flex-col justify-between py-2">
        <h1 className="text-md text-[var(--text-primary)]">محمد حسین ایرانی</h1>
        <h6 className="text-[13px] font-light text-[var(--text-muted)]">برنامه نویس</h6>
      </div>
    </div>
  );
}

export default AdminInfo;
