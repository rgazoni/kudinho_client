import React, { useState } from "react";
import Modal from "../common/Modal";
import FormNewKudo from "./FormNewKudo";

import { useMutation } from "react-query";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import Dialog from "../common/Dialog";

export default function MainNewKudo(props) {
  const [openDialog, setOpenDialog] = useState(false);

  const navigate = useNavigate();
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

  const saveNewKudoHandler = (event) => {
    event.preventDefault();
    const response = mutation.mutate({
      to: event.target.to.value,
      from: event.target.from.value,
      message: event.target.message.value,
    });
    console.log("response");
    console.log(response);
    navigate("/");
  };

  const closeDialogHandler = () => {
    setOpenDialog(false);
  };

  const openDialogHandler = () => {
    setOpenDialog(true);
  };

  return (
    <div className="bg-gradient-to-r from-primary to-indigo-900 h-screen flex flex-col items-center justify-center">
      <Modal
        title="New Kudos 🦄"
        form="form_nk"
        onClickExitBtn={openDialogHandler}
      >
        <FormNewKudo onSaveKudo={saveNewKudoHandler} />
      </Modal>
      <Dialog
        open={openDialog}
        close={closeDialogHandler}
        title="Close New Kudos"
        path="/"
        content="Are you sure that you want to close New Kudos? When you close it, your content is saved as a draft."
      />
    </div>
  );
}
