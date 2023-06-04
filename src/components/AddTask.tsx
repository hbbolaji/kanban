import React, { useContext } from "react";
import { FieldArray, Form, Formik } from "formik";
import * as yup from "yup";
import { v4 as uuid } from "uuid";
import { BoardContext, SubtaskType, TaskType } from "../context/boardContext";
import TextInput from "./TextInput";
import TextArea from "./TextArea";
import SelectInput from "./SelectInput";
import { BsX } from "react-icons/bs";

interface Props {
  boardId: string;
  close: () => void;
  edit?: boolean;
  task?: TaskType;
}

const AddTask: React.FC<Props> = ({ boardId, close, task, edit }) => {
  const initialValues = {
    title: task?.title || "",
    description: task?.description || "",
    status: task?.status || "",
    subtasks: task?.subtasks || [],
  };
  const { boards, updateBoard } = useContext(BoardContext);
  const board = boards[boardId];
  const taskId = () => `t${uuid()}`.replaceAll("-", "");

  const createTask = (newTask: TaskType) => {
    const updateTasks = { ...board.tasks, [newTask.taskId]: newTask };
    const updatedBoard = { ...board, tasks: updateTasks };
    updateBoard({ ...boards, [newTask.boardId]: updatedBoard });
  };
  return (
    <div className="space-y-6">
      <p className="font-semibold tracking-wide text-gray-700 dark:text-gray-100 text-base md:text-xl">
        {edit ? "Update Task" : "Add New Task"}
      </p>
      <Formik
        initialValues={initialValues}
        validationSchema={validation}
        onSubmit={(values) => {
          if (edit) {
            createTask({
              ...values,
              boardId: board.id,
              taskId: task?.taskId || "",
            });
          } else {
            createTask({ ...values, boardId: board.id, taskId: taskId() });
          }
          close();
        }}
      >
        {({ values }) => (
          <Form className="space-y-4">
            <TextInput name="title" label="Title" />
            <TextArea name="description" label="Description" />
            <FieldArray name="subtasks">
              {({ push, remove }) => (
                <div className="space-y-2">
                  <p className="block text-xs md:text-sm text-gray-700 dark:text-gray-300 font-semibold">
                    Subtasks
                  </p>
                  {values.subtasks.map((sub: SubtaskType, index) => {
                    const title = `subtasks[${index}].title`;
                    return (
                      <div key={sub.id} className="flex items-center space-x-2">
                        <div className="flex-1">
                          <TextInput
                            name={title}
                            label="Title"
                            hideLabel={true}
                          />
                        </div>
                        <BsX
                          className="text-3xl cursor-pointer text-gray-600 dark:text-gray-200"
                          onClick={() => remove(index)}
                        />
                      </div>
                    );
                  })}
                  <button
                    type="button"
                    onClick={() => push({ id: uuid(), title: "", done: false })}
                    className="w-full flex justify-center text-sm md:text-base text-center py-2 px-4 md:py-2 md:px-2 text-indigo-500 rounded-full bg-slate-200 flex items-center font-semibold"
                  >
                    + Add New Subtask
                  </button>
                </div>
              )}
            </FieldArray>
            <SelectInput name="status" label="Status" data={board.statuses} />
            <button
              className="w-full flex justify-center text-sm md:text-base text-center py-2 px-4 md:py-2 md:px-2 bg-indigo-500 rounded-full text-gray-100 flex items-center font-semibold"
              type="submit"
            >
              {edit ? "Update Task" : "Create Task"}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

const validation = yup.object().shape({
  title: yup.string().required("Task title is required"),
  status: yup.string().required("Task status is required"),
  subtasks: yup.array().of(
    yup.object().shape({
      title: yup.string().required("Subtask title is required"),
      done: yup.boolean(),
    })
  ),
});

export default AddTask;
