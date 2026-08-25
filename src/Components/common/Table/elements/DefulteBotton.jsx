import { FiSearch, FiFilter } from "react-icons/fi";

const DefulteBotton = ({ placeholder = "جستجو کنید..." }) => {
  return (
    <div className="w-full max-w-xl flex items-center gap-3 dir-rtl font-sans">

      <button className="flex items-center gap-2 bg-[#16161a] hover:bg-[#1f1f24] text-slate-300 text-sm rounded-lg border border-slate-800/80 px-4 py-2.5 transition-colors focus:outline-none focus:border-[#00e676] cursor-pointer">

        <FiFilter className="w-4 h-4 text-slate-400" />
        <span>فیلتر</span>
      </button>

      <div className="relative flex-1">
        <input
          type="text"
          placeholder={placeholder}
          className="w-full bg-[#16161a] text-slate-200 placeholder-slate-500 text-sm rounded-lg border border-slate-800/80  pr-9 py-2.5 focus:outline-none focus:border-[#00e676] focus:ring-1 focus:ring-[#00e676] transition-colors"
        />

        <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
          <FiSearch className="w-5 h-5 text-slate-400" />
        </div>
      </div>
    </div>
  );
};

export default DefulteBotton;
