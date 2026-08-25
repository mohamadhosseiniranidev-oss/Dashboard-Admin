import clsx from "clsx";
import React from "react";

function SummaryCard({ id, title, value, Icon }) {
  let themeCrard =
    id == 1
      ? "text-green-400 bg-green-400/10"
      : id == 2
        ? "text-blue-400 bg-blue-400/10"
        : id == 3
          ? "text-orange-400 bg-orange-400/10"
          : id == 4
            ? "text-purple-400 bg-purple-400/10"
            : "";

  return (
    <div className="h-[150px] bg-[var(--bg-card)] border-[1px] border-[var(--border-light)] p-8 rounded-md flex flex-col justify-center gap-6 cursor-default">
      <div className=" flex justify-between items-center">
        <h4 className="text-[var(--text-faint)] text-lg">{title + " :"} </h4>
        <div
          className={clsx(
            "w-[40px] h-[40px] rounded-md flex justify-center items-center ",
            themeCrard,
          )}
        >
          <Icon size={20} />
        </div>
      </div>
      <h1 className="text-4xl font-bold text-[var(--text-primary)]">{value}</h1>
    </div>
  );
}

export default SummaryCard;
