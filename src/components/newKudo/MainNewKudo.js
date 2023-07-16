import React, { useState } from "react";
import Modal from "../common/Modal";
import FormNewKudo from "./FormNewKudo";

import { useMutation } from "react-query";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import Dialog from "../common/Dialog";
import { v4 as uuidv4 } from "uuid";

export default function MainNewKudo(props) {
  const [openDialog, setOpenDialog] = useState(false);
  const [hasContentForm, setHasContentForm] = useState(() => {});

  const navigate = useNavigate();
  const mutation = useMutation({
    mutationFn: async (formData) => {
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      };
      return await fetch("http://localhost:3001/api/newkudo", requestOptions);
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
        }
      );
    },
    onSuccess: (data, variables, context) => {
      const allKudos = JSON.parse(sessionStorage.getItem("kudos"));
      sessionStorage.setItem(
        "kudos",
        JSON.stringify([
          ...allKudos,
          { _id: uuidv4(), ...variables, isKudoReaded: false, _v: 0 },
        ])
      );
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

  const sleep = (ms) => new Promise((res) => setTimeout(res, ms));

  const saveNewKudoHandler = async (event) => {
    event.preventDefault();
    mutation.mutate({
      to: event.target.to.value,
      from: event.target.from.value,
      message: event.target.message.value,
    });
    await sleep(500);
    navigate("/");
  };

  const closeDialogHandler = () => {
    setOpenDialog(false);
  };

  const dialogHandler = () => {
    const result = hasContentForm;
    result ? setOpenDialog(true) : navigate("/");
  };

  return (
    <div className="bg-gradient-to-r from-primary to-indigo-900 h-screen flex flex-col items-center justify-center">
      <Modal title="New Kudos 🦄" form="form_nk" onClickExitBtn={dialogHandler}>
        <FormNewKudo
          onSaveKudo={saveNewKudoHandler}
          hasContentForm={setHasContentForm}
        />
      </Modal>
      <Dialog
        open={openDialog}
        hasExitBtn={true}
        close={closeDialogHandler}
        title="Close New Kudos"
        secondary_path="/"
        secondary_ctaBtn="Close"
        ctaBtn_path="/"
        ctaBtn="Save Draft"
        content="Are you sure that you want to close New Kudos? When you close it, your content is saved as a draft."
      />
    </div>
  );
}
