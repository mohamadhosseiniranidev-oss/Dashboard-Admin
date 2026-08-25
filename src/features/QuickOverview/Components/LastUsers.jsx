import React from "react";
import SectionTitel from "./../../../Components/common/SectionTitel";
import SectionFooter from "../../../Components/common/SectionFooter";
import users from "../../../data/users";

function LastUsers() {

  let lastUsers = users.filter((user) => user.role.value === "USER").slice(-5).reverse();
  return (
    <div className="rounded-md bg-[var(--bg-card)] border-[1px] border-[var(--border-light)] p-8">
      <SectionTitel title="آخرین کاربران" />

      <div className="flex flex-col justify-start items-center gap-4 mt-6 mb-10 ">
        {lastUsers.map((user) => (
          <div key={user.id} className=" w-full flex justify-start items-center rounded-md p-4 gap-4 border-[1px] border-[var(--border-light)] cursor-pointer hover:scale-[1.03] hover:border-[#8f8f8f] duration-300">
            <img className="w-14 h-14 rounded-full" src={user.profile} />

            <div className="flex flex-col justify-center items-start gap-2">
              <h1 className="text-[var(--text-primary)] text-shadow-md">کاربر <span className="text-green-600 text-shadow-sm text-shadow-green-500/20 font-bold text-lg px-1">{user.fullName}</span> در سایت ثبت نام کرد</h1>
              <h5 className="text-[var(--text-muted)] font-light">{user.email}</h5>
            </div>
          </div>
        ))}
      </div>
      <SectionFooter
        count={users.length}
        button={{ title: "نمایش تمام کاربران", link: "/users" }}
      />
    </div>
  );
}

export default LastUsers;
