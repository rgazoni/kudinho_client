import React, { useState, useEffect, useContext } from "react";
import closeModal from "../assets/icon/close_modal.svg";
import { LogOut } from "feather-icons-react";
import { FilledBtn } from "./common/Button";
import { InputText } from "./common/InputText";
import Modal from "./common/Modal";
import { toast } from "react-toastify";
import { useMutation } from "react-query";

export default function SupportFeedback() {
  const [isOpen, setIsOpen] = useState(false);
  const mutation = useMutation({
    mutationFn: async (formData) => {
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      };
      return await fetch(
        "http://localhost:3001/api/user/feedback",
        requestOptions,
      );
    },
    onError: (error, variables, context) => {
      toast.error(
        "Server connection is down 😣 Your Kudo was save as a draft, please try again later.",
        {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        },
      );
    },
    onSuccess: (data, variables, context) => {
      toast("Thank you for giving a feedback!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    },
  });
  const submitHandler = (event) => {
    event.preventDefault();
    mutation.mutate({
      title: event.target.title.value,
      type: event.target.type.value,
      message: event.target.message.value,
    });
    setIsOpen(false);
    console.log({
      title: event.target.title.value,
      type: event.target.type.value,
      message: event.target.message.value,
    });
  };

  return (
    <div className="fixed z-50 bottom-8 right-0">
      {isOpen && (
        <div className="relative right-4 bottom-10 bg-bg_card_top w-fit h-fit  rounded-lg shadow-sm shadow-gray-95 drop-shadow-md mb-2">
          {/* Modal Header */}
          <div className="flex items-center py-3">
            <h1 className="text-lg font-medium pl-5 text-white w-fit">
              Feedback
            </h1>
            <button
              className="absolute top-2.5 right-2 text-gray-400 bg-transparent hover:bg-gray-800
            hover:text-gray-900 rounded-full text-sm w-8 h-8 ml-auto inline-flex justify-center items-center"
              onClick={() => {
                setIsOpen(false);
              }}
            >
              <img src={closeModal} className="h-3" alt="Close modal" />
            </button>
          </div>
          <div className="h-px w-full bg-gray-600" />
          {/* Modal Body */}
          <form
            className="flex flex-col m-6 gap-2"
            id="form_feedback"
            onSubmit={submitHandler}
          >
            <input
              type="text"
              name="title"
              placeholder="Title"
              className="rounded p-1 pl-2 bg-gray-800 text-gray-300 focus:outline-none
          focus:outline-3 focus:outline-primary focus:outline-offset-1 resize-none
          placeholder:text-white"
              form="form_feedback"
              required={true}
            />
            <select
              name="type"
              placeholder="Title"
              className="rounded p-1 bg-gray-800 text-gray-300 focus:outline-none
          focus:outline-3 focus:outline-primary focus:outline-offset-1 resize-none
          placeholder:text-white"
              form="form_feedback"
            >
              <option value="bug">Bug</option>
              <option value="message">Message</option>
              <option value="tip">Tip</option>
              <option value="other">Other</option>
            </select>
            <textarea
              className="p-1 pl-2 rounded bg-gray-800 text-gray-300 focus:outline-none
          focus:outline-3 focus:outline-primary focus:outline-offset-1 resize-none
          placeholder:text-white"
              maxLength={200}
              type="text"
              placeholder="Message"
              rows="4"
              spellCheck={true}
              required={true}
              id="message"
              name="message"
              form="form_feedback"
            ></textarea>
          </form>

          {/* Modal Footer */}
          <div className="flex justify-center pb-4">
            <button
              type="submit"
              className="h-1 w-fit rounded-lg flex space-x-3.5 items-center justify-center bg-primary hover:bg-secondary p-5"
              form="form_feedback"
            >
              <span className="text-white font-medium">Report</span>
            </button>
          </div>
        </div>
      )}
      <FilledBtn
        content="Feedback"
        classBtn="fixed bottom-8 right-24 px-3 py-2 bg-secondary rounded-lg drop-shadow-md hover:drop-shadow-xl hover:scale-105"
        classTxt="text-sm"
        onClick={() => {
          setIsOpen(true);
        }}
      />
    </div>
  );
}
