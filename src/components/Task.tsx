import React, { useState } from "react";
import { SubtaskType, TaskType } from "../context/boardContext";
import DisplayTask from "./DisplayTask";
import Modal from "./Modal";

interface Props {
  task: TaskType;
  statuses: string[];
}

const Task: React.FC<Props> = ({ task, statuses }) => {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <>
      <div
        className="cursor-pointer bg-gray-50 dark:bg-slate-700 p-4 rounded-lg space-y-2"
        onClick={() => setOpen(true)}
      >
        <h3 className="text-gray-700 dark:text-gray-300">{task.title}</h3>
        <p className="text-xs text-gray-500 dark:text-gray-300">
          {task.subtasks.filter((sub: SubtaskType) => sub.done === true).length}{" "}
          of {task.subtasks.length} subtasks
        </p>
      </div>
      <Modal open={open} close={() => setOpen(false)}>
        <DisplayTask task={task} statuses={statuses} />
      </Modal>
    </>
  );
};

export default Task;
