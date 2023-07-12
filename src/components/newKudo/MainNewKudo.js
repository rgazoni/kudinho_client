import React, { useState } from "react";
import Modal from "../common/Modal";
import FormNewKudo from "./FormNewKudo";

import { useMutation } from "react-query";
import { toast } from "react-toastify";

export default function MainNewKudo() {
  const [to, setTo] = useState("");
  const [from, setFrom] = useState("");
  const [message, setMessage] = useState("");

  const mutation = useMutation({
    mutationFn: async (formData) => {
      console.log(formData);
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      };
      return await fetch("http://localhost:3001/api/newkudo", requestOptions);
    },
    onError: (error, variables, context) => {
      toast.error("Something went wrong!", {
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
    onSuccess: (data, variables, context) => {
      toast("🦄 Your Kudo was sent!", {
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

  const saveNewKudoHandler = () => {
    const response = mutation.mutate({
      to: to,
      from: from,
      message: message,
    });
    console.log(response);
  };

  const changeTo = (event) => {
    setTo(event.target.value);
  };

  const changeFrom = (event) => {
    setFrom(event.target.value);
  };

  const changeMessage = (event) => {
    setMessage(event.target.value);
  };

  return (
    <div className="bg-gradient-to-r from-primary to-indigo-900 h-screen flex flex-col items-center justify-center">
      <Modal title="New Kudos 🦄" onSave={saveNewKudoHandler}>
        <div>
          <FormNewKudo
            cTo={changeTo}
            cFrom={changeFrom}
            cMess={changeMessage}
          />
        </div>
      </Modal>
    </div>
  );
}
