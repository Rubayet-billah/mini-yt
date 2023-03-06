import React from "react";
import lwsLogo from "../../assets/lws.svg";
import serachSvg from "../../assets/search.svg";
import Search from "./Search";

const Navbar = () => {
  return (
    <nav class="bg-slate-100 shadow-md">
      <div class="max-w-7xl mx-auto px-5 lg:px-0 flex justify-between py-3">
        <a href="/">
          <img class="h-10" src={lwsLogo} alt="Learn with Sumit" />
        </a>
        <div class="border border-slate-200 flex items-center bg-white h-10 px-5 rounded-lg text-sm ring-emerald-200">
          <Search />
          <img class="inline h-4 cursor-pointer" src={serachSvg} alt="Search" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
