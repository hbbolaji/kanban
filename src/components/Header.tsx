import React, { useContext } from "react";
import { BsThreeDotsVertical, BsPlus } from "react-icons/bs";
import LogoIcon from "./LogoIcon";
import { useLocation } from "react-router-dom";
import { BoardContext } from "../context/boardContext";

interface Props {
  sidebar: boolean;
  openSidebar?: () => void;
  openMobileSidebar?: () => void;
  openNewTask: () => void;
}

const Header: React.FC<Props> = ({
  sidebar,
  openSidebar,
  openMobileSidebar,
  openNewTask,
}) => {
  const { pathname } = useLocation();
  let id = pathname.split("/")[1];
  const { boards } = useContext(BoardContext);
  return (
    <div className="h-16 md:h-20 flex items-center justify-between px-5 relative">
      <div className="flex items-center space-x-3">
        <div className="cursor-pointer" onClick={openSidebar}>
          {sidebar ? null : <LogoIcon />}
        </div>
        <div className="cursor-pointer md:hidden" onClick={openMobileSidebar}>
          <LogoIcon />
        </div>
        <h2 className="text-gray-500 dark:text-gray-200 text-xl font-medium md:text-2xl">
          {boards[id]?.title}
        </h2>
      </div>
      {id !== "" ? (
        <div className="flex items-center space-x-3">
          <button
            className="py-1 px-2 md:py-3 md:px-5 bg-indigo-500 rounded-full text-gray-100 flex items-center"
            onClick={openNewTask}
          >
            <span className="text-2xl text-white">
              <BsPlus />
            </span>{" "}
            <span className="hidden md:inline">Add New Task</span>
          </button>
          <BsThreeDotsVertical className="cursor-pointer text-xl dark:text-gray-100 text-gray-700" />
        </div>
      ) : null}
    </div>
  );
};

export default Header;
