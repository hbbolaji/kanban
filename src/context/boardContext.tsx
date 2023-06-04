import React, { createContext, useEffect, useState } from "react";
import data from "../data";

export interface SubtaskType {
  title: string;
  done: boolean;
  id: string;
}

export interface TaskType {
  title: string;
  description: string;
  status: string;
  taskId: string;
  subtasks: any[];
  boardId: string;
  due?: any;
}

export interface BoardType {
  title: string;
  tasks: { [key: string]: TaskType };
  id: string;
  statuses: string[];
}

interface Props {
  boards: {
    [key: string]: BoardType;
  };
  activeBoard: BoardType;
  createProject: (board: BoardType, id: string) => void;
  checkSubtask: (boardId: string) => void;
  getActiveBoard: (boardId: string) => void;
  updateBoard: (boards: { [key: string]: BoardType }) => void;
}

const initialSubtask: SubtaskType = { title: "", done: false, id: "" };
const initialTask: TaskType = {
  title: "",
  subtasks: [initialSubtask],
  status: "",
  taskId: "",
  description: "",
  boardId: "",
};
const initialBoards: { [key: string]: BoardType } = {
  b: {
    title: "",
    tasks: { key: initialTask },
    id: "",
    statuses: [""],
  },
};

export const BoardContext = createContext<Props>({
  boards: initialBoards,
  activeBoard: initialBoards.b,
  createProject: (board: BoardType, id: string) => {},
  checkSubtask: (boardId: string) => {},
  getActiveBoard: (boardId: string) => {},
  updateBoard: (boards: { [key: string]: BoardType }) => {},
});

const BoardProvider = ({ children }: { children: JSX.Element }) => {
  const [boards, setBoards] = useState<{ [key: string]: BoardType }>({});
  const [activeBoard, setActiveBoard] = useState<BoardType>(initialBoards.b);

  const createProject = (board: BoardType, id: string) => {
    setBoards({ ...boards, [id]: board });
  };

  const checkSubtask = (boardId: string) => {};

  const getActiveBoard = (boardId: string) => {
    setActiveBoard(boards[boardId]);
  };

  const updateBoard = (boards: { [key: string]: BoardType }) => {
    setBoards(boards);
  };

  useEffect(() => {
    updateBoard(data);
  }, []);

  return (
    <BoardContext.Provider
      value={{
        boards,
        activeBoard,
        createProject,
        checkSubtask,
        getActiveBoard,
        updateBoard,
      }}
    >
      {children}
    </BoardContext.Provider>
  );
};

export default BoardProvider;
