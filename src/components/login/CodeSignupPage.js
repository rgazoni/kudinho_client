import React, { useState } from "react";
import { FilledBtn } from "../common/Button";
import { Copy } from "feather-icons-react";
import closeModal from "../../assets/icon/close_modal.svg";
import { toast } from "react-toastify";
import { CopyToClipboard } from "react-copy-to-clipboard";

export default function CodeSignupPage(props) {
  const classes = `${
    !props.open && "hidden"
  } fixed z-10 left-0 top-0 w-full h-full bg-black/50 flex justify-center items-center`;

  const classNames = `bg-bg_card_top w-2/5 h-fit rounded-lg shadow-sm shadow-gray-950 ${props.className}`;

  const copyCodeHandler = () => {
    const code = document.getElementById("code-gen");
    navigator.clipboard.writeText(code.innerHTML);
    toast.info("🦄 Your code was copied to clipboard!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };

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
        <div className="mx-5 p-3">
          <div className="flex flex-col text-white justify-center items-center">
            <div className="relative flex justify-center items-center gap-2 mt-2">
              <p
                className="text-center absolute text-white text-lg"
                id="code-gen"
              >
                {props.generatedCode.toUpperCase()}
              </p>
              <button
                className="absolute left-10 p-1 rounded hover:bg-black/30 group"
                onClick={copyCodeHandler}
              >
                <Copy className="h-3.5 w-3.5 group-hover:w-4 group-hover:h-4" />
              </button>
            </div>
            <div className="w-4/5 mt-9">
              <p className="text-center">
                This generated code will give you and your team access to the
                platform. So please write it down and don't lose it! Also
                Kudinho will send you an email with the code.
              </p>
            </div>
          </div>
        </div>
        {/* Dialog Footer */}
        <div className="flex justify-center items-center mt-7 mb-9">
          <FilledBtn
            form={props.form}
            classBtn="h-11 w-fit rounded-lg"
            classTxt="text-lg"
            content="Login"
            path={props.primaryBtn_path}
            onClick={props.primaryBtn_onClick}
          />
        </div>
      </div>
    </div>
  );
}
