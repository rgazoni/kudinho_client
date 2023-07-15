import React from "react";
import { FilledBtn, UnderlinedBtn } from "./Button";

export default function Dialog(props) {
  const classes = `${
    !props.open && "hidden"
  } fixed z-10 left-0 top-0 w-full h-full bg-black/50 flex justify-center items-center`;

  const classNames = `bg-bg_card_top w-2/5 h-fit rounded-lg shadow-sm shadow-gray-950 ${props.className}`;

  return (
    <div className={classes}>
      <div className={classNames}>
        {/* Dialog Header */}
        <h1 className="text-3xl font-medium my-5 pl-8 text-white w-fit">
          {props.title || "Empty Title"}
        </h1>
        {/* Dialog Body */}
        <div className="mx-5 mt-2 p-5">
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
            classTxt="text-lg"
            content={props.ctaBtn || "ctaBtn Argument"}
            path={props.path}
          />
        </div>
      </div>
    </div>
  );
}
