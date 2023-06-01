import { ErrorMessage, useField } from "formik";
import React from "react";

interface Props {
  label: string;
  name: string;
  data: string[];
}

const SelectInput: React.FC<Props> = ({ ...props }) => {
  const { label, name, data } = props;
  const [field, meta] = useField(props);
  return (
    <div className="space-y-1">
      <div className="space-y-2">
        <label
          className="block text-sm text-gray-700 dark:text-gray-300"
          htmlFor={name}
        >
          {label}
        </label>
        <select
          className="block w-full bg-transparent border-2 p-2 border-gray-300 dark:border-gray-500 dark:text-gray-200 rounded outline-none"
          placeholder={label}
          {...field}
        >
          <option value="">Choose a {label}</option>
          {data.map((dat) => (
            <option key={dat} className="capitalize" value={dat}>
              {dat}
            </option>
          ))}
        </select>
      </div>
      {meta.touched && meta.error ? (
        <div>
          <p className="text-sm text-red-500">
            <ErrorMessage name={field.name} />
          </p>
        </div>
      ) : null}
    </div>
  );
};

export default SelectInput;
