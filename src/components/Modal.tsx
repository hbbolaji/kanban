import React from "react";

interface Props {
  open: boolean;
  close: () => void;
  children: JSX.Element;
}

const Modal: React.FC<Props> = ({ open, close, children }) => {
  return (
    <>
      {open ? (
        <div
          className="w-full h-screen fixed top-0 left-0 bg-gray-900 bg-opacity-60 z-30 overflow-hidden flex items-center justify-center"
          onClick={close}
        >
          <div
            className="w-[450px] min-h-45 bg-gray-50 dark:bg-slate-700 p-4 rounded-lg"
            onClick={(e) => e.stopPropagation()}
          >
            {children}
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Modal;
