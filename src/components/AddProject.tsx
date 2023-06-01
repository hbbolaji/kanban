import React from "react";
import * as yup from "yup";
import TextInput from "./TextInput";
import { Form, Formik } from "formik";
import TextArea from "./TextArea";
import SelectInput from "./SelectInput";

const AddProject = () => {
  const initialValues = {
    test: "",
  };
  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={validation}
        onSubmit={(value) => {
          console.log(value);
        }}
      >
        {(formik) => (
          <Form className="space-y-4">
            <TextInput label="Test" name="test" />
            <SelectInput
              label="Status"
              name="status"
              data={["Todo", "Doing", "Done"]}
            />
            <TextArea label="Description" name="description" />
            <button
              className="py-1 px-2 md:py-3 md:px-5 bg-indigo-500 rounded-full text-gray-100 flex items-center"
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
  test: yup.string().required("Test field is required"),
  description: yup.string().required("Description is required"),
  status: yup.string().required("Status is required"),
});

export default AddProject;
