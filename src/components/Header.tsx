import React, { useContext, useState } from "react";
import { BsThreeDotsVertical, BsPlus, BsX } from "react-icons/bs";
import LogoIcon from "./LogoIcon";
import { useLocation, useNavigate } from "react-router-dom";
import { BoardContext } from "../context/boardContext";
import UpdateTool from "./UpdateTool";
import { Form, Formik } from "formik";
import TextInput from "./TextInput";

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
  const [show, setShow] = useState<boolean>(false);
  const [edit, setEdit] = useState<boolean>(false);
  const { pathname } = useLocation();
  const navigate = useNavigate();
  let id = pathname.split("/")[1];
  const { boards, updateBoard } = useContext(BoardContext);

  const deleteBoard = () => {
    const newBoard = { ...boards };
    delete newBoard[id];
    updateBoard(newBoard);
    navigate("/");
  };

  const editBoard = (title: string) => {
    const currentBoard = { ...boards[id], title: title };
    updateBoard({ ...boards, [currentBoard.id]: currentBoard });
  };

  return (
    <div className="h-16 md:h-20 flex items-center justify-between px-5 relative">
      <div className="flex items-center space-x-3">
        <div className="cursor-pointer" onClick={openSidebar}>
          {sidebar ? null : <LogoIcon />}
        </div>
        <div className="cursor-pointer md:hidden" onClick={openMobileSidebar}>
          <LogoIcon />
        </div>
        {edit ? (
          <Formik
            initialValues={{ title: boards[id].title }}
            onSubmit={(values) => {
              editBoard(values.title);
              setEdit(false);
            }}
          >
            {(formik) => (
              <Form>
                <TextInput name="title" label="Title" hideLabel />
              </Form>
            )}
          </Formik>
        ) : (
          <h2 className="text-gray-500 dark:text-gray-200 text-xl font-medium md:text-2xl">
            {boards[id]?.title}
          </h2>
        )}
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
          {show ? (
            <BsX
              className="cursor-pointer text-3xl text-gray-500 dark:text-gray-300"
              onClick={() => setShow(false)}
            />
          ) : (
            <BsThreeDotsVertical
              className="cursor-pointer text-xl dark:text-gray-100 text-gray-700"
              onClick={() => setShow(true)}
            />
          )}
        </div>
      ) : null}
      {show ? (
        <UpdateTool
          deleteFn={() => {
            deleteBoard();
            setShow(false);
          }}
          edit={() => {
            setEdit(true);
            setShow(false);
          }}
        />
      ) : null}
    </div>
  );
};

export default Header;
