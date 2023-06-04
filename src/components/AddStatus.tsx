import { Form, Formik } from "formik";
import * as yup from "yup";
import React from "react";
import TextInput from "./TextInput";

interface Props {
  onAddStatus: (status: string) => void;
  close: () => void;
}

const initial = { status: "" };

const AddStatus: React.FC<Props> = ({ onAddStatus, close }) => {
  return (
    <div className="space-y-4">
      <p className="text-gray-700 dark:text-gray-100">Add Status</p>
      <Formik
        initialValues={initial}
        validationSchema={validation}
        onSubmit={(values) => {
          onAddStatus(values.status);
          close();
        }}
      >
        {(formik) => (
          <Form className="space-y-4">
            <TextInput label="Status" name="status" />
            <button
              className="w-full flex justify-center text-sm md:text-base text-center py-2 px-4 md:py-3 md:px-2 bg-indigo-500 rounded-full text-gray-100 flex items-center font-semibold"
              type="submit"
            >
              Add Status
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

const validation = yup.object({
  status: yup.string().required("Status is Required"),
});

export default AddStatus;
