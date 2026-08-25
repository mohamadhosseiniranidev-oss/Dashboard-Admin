
import React from "react";
import { FaSearch } from "react-icons/fa";


function SearchBar() {
  return (
    <div className="flex items-center gap-2 bg-[var(--bg-input)] border border-[var(--border-light)] rounded-lg px-3 h-[40px] w-[350px] self-center">
      <FaSearch size={15} color="var(--text-faint)" />
      <input
        type="text"
        placeholder="جستجو کنید ..."
        className="bg-transparent outline-none border-none text-[var(--text-muted)] text-sm w-full text-right placeholder:text-[var(--text-faint)] font-[Vazirmatn]"
      />
      <div className="flex gap-1">
        <span className="bg-[var(--bg-hover)] pt-1 border border-[var(--border-light)] rounded px-1.5 py-0.5 text-[10px] text-[var(--text-faint)]">K</span>
        <span className="bg-[var(--bg-hover)] pt-1 border border-[var(--border-light)] rounded px-1.5 py-0.5 text-[10px] text-[var(--text-faint)]">⌘</span>
      </div>
    </div>
  );
}

export default SearchBar;