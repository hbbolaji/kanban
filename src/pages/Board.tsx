import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { BoardContext } from "../context/boardContext";
import Column from "../components/Column";
import Modal from "../components/Modal";
import AddStatus from "../components/AddStatus";

const Board = () => {
  const [open, setOpen] = useState(false);
  const { id } = useParams();
  const { boards, updateBoard } = useContext(BoardContext);
  const board = boards[id as string];
  const addStatus = (status: string) => {
    const newStatuses = [...board.statuses, status];
    const updatedBoard = { ...board, statuses: newStatuses };
    updateBoard({ ...boards, [board.id]: updatedBoard });
  };

  return (
    <div className="flex items-start">
      <div className="flex p-4">
        {board?.statuses.map((status: string) => (
          <div key={status} className="px-1">
            <Column
              tasks={Object.values(board.tasks).filter(
                (task) => task.status === status
              )}
              status={status}
            />
          </div>
        ))}
      </div>
      <div
        className="my-16 rounded-lg bg-slate-300 dark:bg-slate-800 h-screen flex justify-center items-center cursor-pointer mr-12 select-none"
        onClick={() => setOpen(true)}
      >
        <p className="text-base md:text-3xl font-semibold text-gray-400 dark:text-gray-500 tracking-wide w-80 text-center">
          + New Column
        </p>
      </div>
      <Modal open={open} close={() => setOpen(false)}>
        <div className="">
          <AddStatus onAddStatus={addStatus} close={() => setOpen(false)} />
        </div>
      </Modal>
    </div>
  );
};

export default Board;
