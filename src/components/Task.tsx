import React from "react";
import { SubtaskType, TaskType } from "../context/boardContext";

interface Props {
  task: TaskType;
}

const Task: React.FC<Props> = ({ task }) => {
  return (
    <div className="cursor-pointer bg-gray-50 dark:bg-slate-700 p-4 rounded-lg space-y-2">
      <h3 className="text-gray-700 dark:text-gray-300">{task.title}</h3>
      <p className="text-xs text-gray-500 dark:text-gray-300">
        {task.subtasks.filter((sub: SubtaskType) => sub.done === true).length}{" "}
        of {task.subtasks.length} subtasks
      </p>
    </div>
  );
};

export default Task;
