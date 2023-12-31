import React, { useContext, useState } from "react";
import Modal from "../common/Modal";
import FormNewKudo from "./FormNewKudo";

import { useMutation } from "react-query";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import Dialog from "../common/Dialog";
import { v4 as uuidv4 } from "uuid";
import AuthContext from "../login/AuthContext";
import unicorn from "../../assets/icon/unicorn.svg";

export default function MainNewKudo(props) {
  const [openDialog, setOpenDialog] = useState(false);
  const [hasContentForm, setHasContentForm] = useState(() => {});
  const [dataBeStored, setDataBeStored] = useState({
    to: "",
    from: "",
    message: "",
  });
  const { isLogged } = useContext(AuthContext);

  const navigate = useNavigate();
  const mutation = useMutation({
    mutationFn: async (formData) => {
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify(formData),
      };
      return await fetch("http://localhost:3001/api/newkudo", requestOptions);
    },
    onError: (error, variables, context) => {
      toast.error(
        "Server connection is down. Your Kudo was save as a draft, please try again later.",
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
      toast.success("Congratulations for sending a Kudo!!!", {
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
    flushCurrentData();
    await sleep(500);
    navigate("/");
  };

  const closeDialogHandler = () => {
    setOpenDialog(false);
  };

  const dialogHandler = () => {
    const result = hasContentForm || { hasContent: false };
    const draft = JSON.parse(localStorage.getItem("nk_draft"));
    console.log("result");
    console.log(result);
    if (result.hasContent) {
      setDataBeStored({
        to: result.to,
        from: result.from,
        message: result.message,
      });
      setOpenDialog(true);
    } else if (
      draft.to.length !== 0 ||
      draft.from.length !== 0 ||
      draft.message.length !== 0
    ) {
      setDataBeStored({
        to: draft.to,
        from: draft.from,
        message: draft.message,
      });
      setOpenDialog(true);
    } else navigate("/");
  };

  const storeData = () => {
    console.log("dataBeStored");
    console.log(dataBeStored);
    localStorage.setItem("nk_draft", JSON.stringify(dataBeStored));
  };

  const flushCurrentData = () => {
    setDataBeStored({
      to: "",
      from: "",
      message: "",
    });
    localStorage.setItem(
      "nk_draft",
      JSON.stringify({ to: "", from: "", message: "" }),
    );
  };

  return (
    <div className="bg-gradient-to-r from-secondary to-primary h-screen flex flex-col items-center justify-center">
      <Modal
        title="New Kudos "
        titleIcon={unicorn}
        form="form_nk"
        onClickExitBtn={dialogHandler}
        primaryBtn_content="Save"
      >
        <FormNewKudo
          onSaveKudo={saveNewKudoHandler}
          hasContentForm={setHasContentForm}
        />
      </Modal>
      <Dialog
        open={openDialog}
        hasExitBtn={true}
        close={() => {
          closeDialogHandler();
          flushCurrentData();
        }}
        title="Close New Kudos"
        secondaryBtn_path="/"
        secondaryBtn_content="Close"
        primaryBtn_path="/"
        primaryBtn_content="Save Draft"
        primaryBtn_onClick={storeData}
        content="Are you sure that you want to close New Kudos? If you want to, you can save as a draft."
      />
    </div>
  );
}
