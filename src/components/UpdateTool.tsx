import React from "react";
import { BsPen, BsTrash } from "react-icons/bs";

interface Props {
  deleteFn: () => void;
  edit: () => void;
  icon?: boolean;
}

const UpdateTool: React.FC<Props> = ({ deleteFn, edit, icon }) => {
  return (
    <div
      className={`absolute ${
        icon ? "flex items-center top-8 right-0" : "top-16 right-3"
      } rounded bg-slate-200 dark:bg-slate-900 shadow-lg`}
    >
      <div
        className="cursor-pointer p-4 border-r border-r-slate-300 dark:border-r-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800"
        onClick={edit}
      >
        {icon ? (
          <BsPen className="text-xl text-gray-500 dark:text-gray-300" />
        ) : (
          <p className="text-gray-500 dark:text-gray-300 px-4 font-semibold">
            Edit
          </p>
        )}
      </div>
      <div
        className="cursor-pointer p-4 hover:bg-slate-50 dark:hover:bg-slate-800"
        onClick={deleteFn}
      >
        {icon ? (
          <BsTrash className="text-xl text-gray-500 dark:text-gray-300" />
        ) : (
          <p className="text-gray-500 dark:text-gray-300 px-4 font-semibold">
            Delete
          </p>
        )}
      </div>
    </div>
  );
};

export default UpdateTool;
