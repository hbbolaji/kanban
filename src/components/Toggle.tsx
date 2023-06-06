import React from "react";

interface Props {
  click: () => void;
  off: boolean;
}

const Toggle: React.FC<Props> = ({ click, off }) => {
  return (
    <div
      className={`h-6 w-12 rounded-xl cursor-pointer border-2 border-indigo-500 flex items-center select-none ${
        off ? "justify-end bg-indigo-500" : "justify-start"
      }`}
      onClick={click}
    >
      <div
        className={`w-4 h-4 rounded-full select-none ${
          off ? "bg-gray-100" : "bg-indigo-500"
        } mx-1`}
      ></div>
    </div>
  );
};

export default Toggle;
