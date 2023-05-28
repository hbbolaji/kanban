import React, { useContext } from "react";
import Logo from "./Logo";
import { TbLayoutBoardSplit } from "react-icons/tb";
import {
  BsFillSunFill,
  BsMoonStarsFill,
  BsEyeSlash,
  BsToggleOn,
  BsToggleOff,
} from "react-icons/bs";
import { UtilityContext } from "../context/utilityContext";
// import { useLocation } from "react-router-dom";

interface Props {
  closeSidebar?: () => void;
  closeMobileSidebar?: () => void;
}

const Sidebar: React.FC<Props> = ({ closeSidebar, closeMobileSidebar }) => {
  // const {} = useLocation()
  const { dark, toggleTheme } = useContext(UtilityContext);
  return (
    <div className="flex flex-col h-full pb-16">
      <Logo />
      <div className="flex flex-col justify-between h-full">
        <div className="space-y-4">
          <p className="uppercase text-gray-500 dark:text-gray-300 text-xs md:text-sm pt-3 px-10 font-semibold tracking-wide">
            All Board (3)
          </p>
          {/* boards */}
          <div className="space-y-2 md:space-y-1">
            <div className="flex space-x-2 items-center px-10 py-2 md:py-4 bg-indigo-500 mr-10 rounded-r-full">
              <TbLayoutBoardSplit className="text-gray-50 text-xl" />
              <p className="text-gray-50 text-sm md:text-base tracking-wide">
                Platform Launch
              </p>
            </div>
            <div className="flex space-x-2 items-center px-10 py-2 md:py-4 mr-10 rounded-r-full">
              <TbLayoutBoardSplit className="text-gray-500 dark:text-gray-400 text-xl" />
              <p className="text-gray-500 dark:text-gray-300 text-sm md:text-base tracking-wide">
                Marketing Plan
              </p>
            </div>
            <div className="flex space-x-2 items-center px-10 py-2 md:py-4 mr-10 rounded-r-full">
              <TbLayoutBoardSplit className="text-gray-500 dark:text-gray-400 text-xl" />
              <p className="text-gray-500 dark:text-gray-300 text-sm md:text-base tracking-wide">
                Roadmap
              </p>
            </div>
            <div className="flex space-x-2 items-center px-10 py-2 md:py-4 mr-10 rounded-r-full cursor-pointer">
              <TbLayoutBoardSplit className="text-indigo-500 text-xl" />

              <p className="text-indigo-500 text-sm md:text-base tracking-wide">
                <span>+</span>Create New Board
              </p>
            </div>
          </div>
        </div>
        {/* Sidebar setting */}
        <div className="space-y-4">
          <div className="bg-slate-200 dark:bg-slate-900 mx-5 rounded flex p-2 flex items-center justify-center space-x-6">
            <BsFillSunFill className="text-base md:text-xl text-gray-700 dark:text-gray-400" />
            <div className="cursor-pointer" onClick={toggleTheme}>
              {dark ? (
                <BsToggleOff className="text-2xl md:text-4xl text-indigo-500" />
              ) : (
                <BsToggleOn className="text-2xl md:text-4xl text-indigo-500" />
              )}
            </div>

            <BsMoonStarsFill className="text-base md:text-xl text-gray-700 dark:text-gray-400" />
          </div>
          <div
            className="mx-5 flex items-center space-x-4 cursor-pointer"
            onClick={closeSidebar || closeMobileSidebar}
          >
            <BsEyeSlash className="text-gray-500 dark:text-gray-300 text-lg" />
            <p className="text-gray-500 dark:text-gray-300 text-sm md:text-base">
              Hide Sidebar
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
