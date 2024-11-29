import React from "react";
import { ToggleThem } from "../ToggleTheme";
import { Search } from "lucide-react";
import SideBar from "./ToggleMenu";

const Nav = () => {
  return (
    <nav className= "px-5 py-3 bg-white dark:bg-[#334155] fixed w-full top-0 backdrop-filter bg-opacity-80 flex justify-end max-lg:justify-between items-end z-40">
      <SideBar className="lg:hidden "/>
      <div className="flex items-center justify-end space-x-4">
        <div className="relative w-full">
          <span className="absolute inset-y-0 left-3 flex items-center text-gray-400">
            <Search className="w-5 h-5" />
          </span>
          <input
            type="text"
            placeholder="Search..."
            className="pl-8 py-2 rounded-lg w-[100%]
            bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500 dark:border-2 "
          />
        </div>
        <ToggleThem />
      </div>
    </nav>
  );
};

export default Nav;
