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
  boards: BoardType[];
}

const initialSubtask: SubtaskType = { title: "", done: false };
const initialTask: TaskType = {
  title: "",
  subtasks: [initialSubtask],
  status: "",
  taskId: "",
  description: "",
};
const initialBoards: BoardType = {
  title: "",
  tasks: [initialTask],
  id: "",
  statuses: [""],
};

export const BoardContext = createContext<Props>({ boards: [initialBoards] });

const BoardProvider = ({ children }: { children: JSX.Element }) => {
  const [boards, setBoards] = useState<BoardType[]>([]);
  useEffect(() => {
    setBoards(data);
  }, []);
  return (
    <BoardContext.Provider value={{ boards }}>{children}</BoardContext.Provider>
  );
};

export default BoardProvider;
