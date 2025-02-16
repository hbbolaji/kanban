import { ErrorMessage, useField } from "formik";
import React from "react";

interface Props {
  label: string;
  name: string;
  hideLabel?: boolean;
}

const TextInput: React.FC<Props> = ({ ...props }) => {
  const { label, name, hideLabel } = props;
  const [field, meta] = useField(props);
  return (
    <div className="space-y-1">
      <div className="space-y-2">
        {hideLabel ? null : (
          <label
            className="block text-xs md:text-sm text-gray-700 dark:text-gray-300 font-semibold"
            htmlFor={name}
          >
            {label}
          </label>
        )}
        <input
          className="block w-full text-sm md:text-base bg-transparent border-2 p-2 border-gray-300 dark:border-gray-500 dark:text-gray-200 rounded outline-none"
          placeholder={label}
          id={name}
          {...field}
        />
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

export default TextInput;
