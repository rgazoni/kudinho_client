import React from "react";
import closeModal from "../../assets/icon/close_modal.svg";
import { FilledBtn } from "./Button";

export default function Modal(props) {
  const classes =
    "relative bg-bg_card_top w-1/3 h-fit rounded-lg shadow-sm shadow-gray-950 " +
    props.className;

  return (
    <>
      <div className={classes}>
        {/* Modal Header */}
        <div className="flex justify-start items-center">
          <h1 className="text-3xl font-medium my-5 pl-8 text-white w-fit">
            {props.title || "Empty Title"}
          </h1>
          <img src={props.titleIcon} alt="" className="h-7 pl-2" />
        </div>
        <button
          onClick={props.onClickExitBtn}
          className="absolute top-5.5 right-8 text-gray-400 bg-transparent hover:bg-gray-800
            hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center"
        >
          <img src={closeModal} className="h-4" alt="Close modal" />
        </button>
        <div className="h-px w-full bg-gray-600" />
        {/* Modal Body */}
        {props.children}
        {/* Modal Footer */}
        <div className="flex justify-center mt-7 mb-9">
          <FilledBtn
            form={props.form}
            classBtn="h-11 w-28 rounded-lg"
            classTxt="text-xl"
            content={props.primaryBtn_content || "Empty Button"}
          />
        </div>
      </div>
    </>
  );
}
