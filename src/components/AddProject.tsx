import React, { useContext, useState } from "react";
import { v4 as uuid } from "uuid";
import * as yup from "yup";
import TextInput from "./TextInput";
import { Form, Formik } from "formik";
import { BsCheck, BsX } from "react-icons/bs";
import { BoardContext } from "../context/boardContext";
import { useNavigate } from "react-router-dom";

const generateId = () => {
  return `b${uuid()}`.replaceAll("-", "");
};

interface Props {
  close?: () => void;
}

const AddProject: React.FC<Props> = ({ close }) => {
  const navigate = useNavigate();
  const { createProject } = useContext(BoardContext);
  const [statuses, setStatuses] = useState<string[]>(["Todo", "Doing", "Done"]);
  const initialValues = {
    title: "",
    status: "",
  };
  const id = generateId();
  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={validation}
        onSubmit={(value) => {
          createProject(
            {
              title: value.title,
              id,
              statuses,
              tasks: {},
            },
            id
          );
          navigate(`/${id}`);
          close && close();
        }}
      >
        {(formik) => (
          <Form className="space-y-4">
            <TextInput label="Title" name="title" />
            <div className="space-y-2">
              {statuses.map((status) => (
                <div
                  key={status}
                  className="flex items-center bg-slate-200 dark:bg-slate-800 text-gray-600 dark:text-gray-200 p-2 rounded"
                >
                  <p className="flex-1 text-sm md:text-base">{status}</p>
                  <BsX
                    className="text-2xl cursor-pointer"
                    onClick={() =>
                      setStatuses((prop) =>
                        prop.filter((stat) => status !== stat)
                      )
                    }
                  />
                </div>
              ))}
            </div>
            <div className="flex items-end space-x-3">
              <div className="flex-1">
                <TextInput label="Status" name="status" />
              </div>
              <div
                onClick={() => {
                  if (formik.values.status !== "") {
                    setStatuses((prop) => [...prop, formik.values.status]);
                    formik.values.status = "";
                  }
                }}
              >
                <BsCheck className="text-4xl text-gray-200 bg-indigo-500 rounded-full p-1 cursor-pointer" />
              </div>
            </div>
            <button
              className="w-full flex justify-center text-sm md:text-base text-center py-1 px-2 md:py-3 md:px-5 bg-indigo-500 rounded-full text-gray-100 flex items-center"
              type="submit"
            >
              Create Project
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

const validation = yup.object({
  title: yup.string().required("Title field is required"),
});

export default AddProject;
