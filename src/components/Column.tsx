import React from "react";
import { TaskType } from "../context/boardContext";
import Task from "./Task";

interface Props {
  tasks: TaskType[];
  status: string;
  statuses: string[];
}

const Column: React.FC<Props> = ({ statuses, tasks, status }) => {
  return (
    <div className="w-80 space-y-6">
      <div className="flex items-center space-x-2 px-2">
        <div className={`w-3 h-3 rounded-full bg-purple-500`}></div>
        <p className="text-gray-500 dark:text-gray-300 uppercase text-sm">
          {status} ({tasks.length})
        </p>
      </div>
      <div>
        {tasks.map((task: TaskType) => (
          <div key={task.taskId} className="p-2">
            <Task task={task} statuses={statuses} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Column;
