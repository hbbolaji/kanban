import React, { useContext, useEffect, useState } from "react";
import { BoardContext, SubtaskType, TaskType } from "../context/boardContext";
import { BsThreeDotsVertical, BsX } from "react-icons/bs";
import SelectInput from "./SelectInput";
import { Form, Formik } from "formik";
import AddTask from "./AddTask";
import UpdateTool from "./UpdateTool";

interface Props {
  task: TaskType;
}

const DisplayTask: React.FC<Props> = ({ task }) => {
  const [edit, setEdit] = useState<boolean>(false);
  const [show, setShow] = useState<boolean>(false);
  const { getActiveBoard, activeBoard, updateBoard, boards } =
    useContext(BoardContext);

  const setSubtaskToDone = (id: string) => {
    const updatedsub = task.subtasks.find((sub) => sub.id === id);
    const sub = [
      { ...updatedsub, done: !updatedsub.done },
      ...task.subtasks.filter((sub) => sub.id !== id),
    ];
    const updatedTask = { ...task, subtasks: sub };
    const updateTasks = { ...activeBoard.tasks, [task.taskId]: updatedTask };
    const updatedBoard = { ...activeBoard, tasks: updateTasks };
    updateBoard({ ...boards, [task.boardId]: updatedBoard });
  };

  const changeStatus = (status: string) => {
    const updatedTask = { ...task, status: status };
    const updateTasks = { ...activeBoard.tasks, [task.taskId]: updatedTask };
    const updatedBoard = { ...activeBoard, tasks: updateTasks };
    updateBoard({ ...boards, [task.boardId]: updatedBoard });
  };

  const deleteTask = (taskId: string) => {
    const newTasks = { ...activeBoard.tasks };
    delete newTasks[taskId];
    const updatedBoard = { ...activeBoard, tasks: newTasks };
    updateBoard({ ...boards, [task.boardId]: updatedBoard });
  };

  useEffect(() => {
    getActiveBoard(task.boardId);
  }, [getActiveBoard, task.boardId]);

  return (
    <>
      {edit ? (
        <div>
          <AddTask
            close={() => setEdit(false)}
            boardId={task.boardId}
            task={task}
            edit={true}
          />
        </div>
      ) : (
        <div className="space-y-4">
          <div className="flex items-center relative">
            <p className="flex-1 font-semibold tracking-wide text-gray-700 dark:text-gray-100 text-base md:text-xl">
              {task.title}
            </p>
            {show ? (
              <BsX
                className="cursor-pointer text-3xl text-gray-500 dark:text-gray-300"
                onClick={() => setShow(false)}
              />
            ) : (
              <BsThreeDotsVertical
                className="cursor-pointer text-xl text-gray-500 dark:text-gray-300"
                onClick={() => setShow(true)}
              />
            )}
            {show ? (
              <UpdateTool
                edit={() => {
                  setShow(false);
                  setEdit(true);
                }}
                deleteFn={() => deleteTask(task.taskId)}
                icon
              />
            ) : null}
          </div>
          <p className="text-gray-500 dark:text-gray-400 text-sm md:text-sm leading-relaxed">
            {task.description}
          </p>
          <div className="space-y-2">
            <h4 className="text-gray-700 dark:text-gray-100 text-sm md:text-base tracking-wide font-semibold">
              Subtasks (
              {
                task.subtasks.filter((sub: SubtaskType) => sub.done === true)
                  .length
              }{" "}
              of {task.subtasks.length})
            </h4>
            <div className="space-y-2">
              {task.subtasks.map((sub) => (
                <div
                  className="flex items-center bg-slate-200 dark:bg-slate-800 space-x-3 p-3 rounded"
                  key={sub.id}
                >
                  <input
                    type="checkbox"
                    className="accent-indigo-500 inline-block text-xl"
                    name={sub.title}
                    checked={sub.done}
                    onChange={() => setSubtaskToDone(sub.id)}
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
                  <SelectInput
                    name="status"
                    label="Status"
                    data={activeBoard.statuses}
                    onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
                      changeStatus(e.target.value);
                    }}
                  />
                </Form>
              )}
            </Formik>
          </div>
        </div>
      )}
    </>
  );
};

export default DisplayTask;
