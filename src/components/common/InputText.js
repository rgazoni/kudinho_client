import React from "react";

export function InputText(props) {
  return (
    <input
      className="p-2 pl-4 rounded w-9/12 bg-gray-800 text-gray-300 focus:outline-none
                  focus:outline-3 focus:outline-primary focus:outline-offset-1 placeholder:text-white"
      type="text"
      placeholder={props.placeholder}
      id={props.id}
      name={props.name}
      form={props.form || ""}
      required={props.required || true}
      onChange={props.onChange}
      defaultValue={props.defaultValue}
    />
  );
}
