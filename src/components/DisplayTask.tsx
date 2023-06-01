import React from "react";
import { SubtaskType, TaskType } from "../context/boardContext";
import { BsThreeDotsVertical } from "react-icons/bs";
import SelectInput from "./SelectInput";
import { Form, Formik } from "formik";

interface Props {
  task: TaskType;
  statuses: string[];
}

const DisplayTask: React.FC<Props> = ({ task, statuses }) => {
  return (
    <div className="space-y-4">
      <div className="flex items-center">
        <p className="flex-1 font-semibold tracking-wide text-gray-700 dark:text-gray-100 text-base md:text-xl">
          {task.title}
        </p>
        <BsThreeDotsVertical className="cursor-pointer text-xl text-gray-500 dark:text-gray-300" />
      </div>
      <p className="text-gray-500 dark:text-gray-400 text-sm md:text-sm leading-relaxed">
        {task.description}
      </p>
      <div className="space-y-2">
        <h4 className="text-gray-700 dark:text-gray-100 text-sm md:text-base tracking-wide font-semibold">
          Subtasks (
          {task.subtasks.filter((sub: SubtaskType) => sub.done === true).length}{" "}
          of {task.subtasks.length})
        </h4>
        <div className="space-y-2">
          {task.subtasks.map((sub) => (
            <div
              className="flex items-center bg-slate-200 dark:bg-slate-800 space-x-3 p-3 rounded"
              key={sub.title}
            >
              <input
                type="checkbox"
                className="accent-indigo-500 inline-block text-xl"
                value={sub.done}
                name={sub.title}
              />
              <p
                className={`flex-1 text-sm text-gray-600 dark:text-gray-200 ${
                  sub.done ? "line-through" : ""
                }`}
              >
                {sub.title}
              </p>
            </div>
          ))}
        </div>
        <Formik initialValues={{ status: task.status }} onSubmit={() => {}}>
          {(formik) => (
            <Form>
              <SelectInput name="status" label="Status" data={statuses} />
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default DisplayTask;
