import React, { useState, useEffect } from "react";
import { FilledBtn, HollowedBtn, UnderlinedBtn } from "../common/Button";
import happyFace from "../../assets/icon/happy_face.svg";
import Dialog from "../common/Dialog";

export default function Main() {
  const [amount, setAmount] = useState("");
  const [openDialog, setOpenDialog] = useState(false);

  useEffect(() => {
    console.log(JSON.parse(sessionStorage.getItem("kudos")));
    const unreadedKudos = JSON.parse(sessionStorage.getItem("kudos"));
    unreadedKudos.filter((kudo) => !kudo.isKudoReaded);
    console.log(unreadedKudos.length);
    setAmount(unreadedKudos.length);
  }, []);

  const closeDialogHandler = () => {
    setOpenDialog(false);
  };

  const openDialogHandler = () => {
    setOpenDialog(true);
  };

  return (
    <div className="bg-gradient-to-r from-gray-900 to-dark h-screen flex flex-col items-center justify-center">
      <h1 className="flex items-center justify-center">
        {amount !== 0 ? (
          <p className="w-144 text-center text-8xl font-medium text-white mb-6">
            We have <span className="text-primary underline">{amount}</span> new
            Kudos!
          </p>
        ) : (
          <p className="w-3/5 text-center text-8xl font-medium text-white mb-6">
            We don't have new Kudos <span className="text-7xl">😢</span>
          </p>
        )}
      </h1>
      <FilledBtn
        path="/newkudo"
        classBtn="w-72"
        content="New Kudo"
        icon={happyFace}
      />
      <HollowedBtn onClick={openDialogHandler} content="Read New Kudos" />
      <UnderlinedBtn
        path="/archivedkudos"
        content="Archived Kudos"
        className="mt-8"
      />
      <Dialog
        className="bg-indigo-700"
        open={openDialog}
        close={closeDialogHandler}
        title="Start to read team Kudos!"
        primaryBtn_path="/readkudos"
        primaryBtn_content="Read Kudos"
        content="Are you sure that you want to close New Kudos? When you close it, your content is saved as a draft."
      />
    </div>
  );
}
