import React from "react";
import { FilledBtn, UnderlinedBtn } from "./Button";

export default function Dialog(props) {
  const classes = `${
    !props.open && "hidden"
  } fixed z-10 left-0 top-0 w-full h-full bg-black/50 flex justify-center items-center ${
    props.className
  }`;

  return (
    <div className={classes}>
      <div className="bg-bg_card_top w-2/4 h-fit rounded-lg shadow-sm shadow-gray-950">
        {/* Dialog Header */}
        <h1 className="text-3xl font-medium my-5 pl-8 text-white w-fit">
          {props.title || "Empty Title"}
        </h1>
        <div className="h-px w-full bg-gray-600" />
        {/* Dialog Body */}
        <div className="ml-5 mt-2 p-5">
          <p className="text-white text-lg">
            {props.content || "Insert some text here with content argument"}
          </p>
        </div>
        {/* Dialog Footer */}
        <div className="flex justify-end items-center mt-7 mb-9 gap-6 mr-8">
          <UnderlinedBtn
            content="Cancel"
            className="flex justify-center"
            onClick={props.close}
          />
          <FilledBtn
            form={props.form}
            classBtn="h-11 w-fit rounded-lg"
            classTxt="text-sm"
            content="Save draft"
            path={props.path}
          />
        </div>
      </div>
    </div>
  );
}
