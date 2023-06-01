import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { BoardContext } from "../context/boardContext";
import Column from "../components/Column";

const Board = () => {
  const { id } = useParams();
  const { boards } = useContext(BoardContext);
  const board = boards[id as string];
  return (
    <div className="flex items-start">
      <div className="flex p-4">
        {board?.statuses.map((status: string) => (
          <div key={status} className="px-1">
            <Column
              statuses={board.statuses}
              tasks={board.tasks.filter((task) => task.status === status)}
              status={status}
            />
          </div>
        ))}
      </div>
      <div className="my-16 rounded-lg bg-slate-300 dark:bg-slate-800 h-screen flex justify-center items-center cursor-pointer mr-12">
        <p className="text-base md:text-3xl font-semibold text-gray-400 dark:text-gray-500 tracking-wide w-80 text-center">
          + New Column
        </p>
      </div>
    </div>
  );
};

export default Board;
