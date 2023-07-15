import React, { useState, useEffect } from "react";
import { FilledBtn, HollowedBtn, UnderlinedBtn } from "../common/Button";
import happyFace from "../../assets/icon/happy_face.svg";

export default function Main() {
  const [amount, setAmount] = useState("");

  useEffect(() => {
    const unreadedKudos = JSON.parse(
      sessionStorage.getItem("kudos") || []
    ).filter((kudo) => !kudo.isKudoReaded);
    setAmount(unreadedKudos.length);
  }, []);

  return (
    <div className="bg-gradient-to-r from-gray-900 to-dark h-screen flex flex-col items-center justify-center">
      <h1 className="w-144 text-center text-8xl font-medium text-white mb-6">
        We have <span className="text-primary underline">{amount}</span> new
        Kudos!
      </h1>
      <FilledBtn
        path="/newkudo"
        classBtn="w-72"
        content="New Kudo"
        icon={happyFace}
      />
      <HollowedBtn path="/readkudos" content="Read New Kudos" />
      <UnderlinedBtn
        path="/archivedkudos"
        content="Archived Kudos"
        className="mt-8"
      />
    </div>
  );
}
