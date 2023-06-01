import React, { createContext, useEffect, useState } from "react";
import data from "../data";

export interface SubtaskType {
  title: string;
  done: boolean;
}

export interface TaskType {
  title: string;
  description: string;
  status: string;
  taskId: string;
  subtasks: any[];
  due?: any;
}

export interface BoardType {
  title: string;
  tasks: TaskType[];
  id: string;
  statuses: string[];
}

interface Props {
  boards: {
    [key: string]: BoardType;
  };
  createProject: (board: BoardType, id: string) => void;
}

const initialSubtask: SubtaskType = { title: "", done: false };
const initialTask: TaskType = {
  title: "",
  subtasks: [initialSubtask],
  status: "",
  taskId: "",
  description: "",
};
const initialBoards: { [key: string]: BoardType } = {
  b: {
    title: "",
    tasks: [initialTask],
    id: "",
    statuses: [""],
  },
};

export const BoardContext = createContext<Props>({
  boards: initialBoards,
  createProject: (board: BoardType, id: string) => {},
});

const BoardProvider = ({ children }: { children: JSX.Element }) => {
  const [boards, setBoards] = useState<{ [key: string]: BoardType }>({});

  const createProject = (board: BoardType, id: string) => {
    setBoards({ ...boards, [id]: board });
  };

  useEffect(() => {
    setBoards(data);
  }, []);

  return (
    <BoardContext.Provider value={{ boards, createProject }}>
      {children}
    </BoardContext.Provider>
  );
};

export default BoardProvider;
