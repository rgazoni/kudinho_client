import React from "react";
import { FilledBtn, HollowedBtn, UnderlinedBtn } from "./Button";
import closeModal from "../../assets/icon/close_modal.svg";

export default function Dialog(props) {
  const classes = `${
    !props.open && "hidden"
  } fixed z-10 left-0 top-0 w-full h-full bg-black/50 flex justify-center items-center`;

  const classNames = `bg-bg_card_top w-2/5 h-fit rounded-lg shadow-sm shadow-gray-950 ${props.className}`;

  return (
    <div className={classes}>
      <div className={classNames}>
        {/* Dialog Header */}
        <div className="flex flex-row">
          <h1 className="text-3xl font-medium my-7 pl-8 text-white w-fit">
            {props.title || "Empty Title"}
          </h1>
          {props.hasExitBtn && (
            <button
              onClick={props.close}
              className="relative top-c19 right-8 text-gray-400 bg-transparent hover:bg-gray-800
            hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center"
            >
              <img src={closeModal} className="h-4" alt="Close modal" />
            </button>
          )}
        </div>
        {/* Dialog Body */}
        <div className="mx-5 p-5">
          <p className="text-white text-lg">
            {props.content || "Insert some text here with content argument"}
          </p>
        </div>
        {/* Dialog Footer */}
        <div className="flex justify-end items-center mt-7 mb-9 gap-6 mr-8">
          <UnderlinedBtn
            content={props.secondaryBtn_content || "Cancel"}
            onClick={props.close}
            path={props.secondaryBtn_path}
          />
          <FilledBtn
            form={props.form}
            classBtn="h-11 w-fit rounded-lg"
            classTxt="text-lg"
            content={props.primaryBtn_content || "Next"}
            path={props.primaryBtn_path}
            onClick={props.primaryBtn_onClick}
          />
        </div>
      </div>
    </div>
  );
}
