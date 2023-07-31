import React, { useState, useEffect, useContext } from "react";
import { LogOut } from "feather-icons-react";
import { FilledBtn } from "./common/Button";
import Logo from "../assets/icon/happy_face.svg";
import { useNavigate } from "react-router-dom";

export default function PageNotFound() {
  const navigate = useNavigate();

  const header = (
    <div className="sticky top-0 z-40 flex items-center w-full h-16 px-4 bg-dark/90">
      <button
        className="flex justify-center items-center gap-2"
        onClick={() => {
          navigate("/");
        }}
      >
        <img src={Logo} className="h-8 ml-3" alt="Logo" />
        <label className="text-white font-medium text-3xl">Kudinho</label>
      </button>
      <div className="ml-4 mr-4 w-0.5 h-10 rounded-full bg-gray-500"></div>
      <FilledBtn
        path="/"
        content="It's time to go home! Bye Jantino :)"
        classTxt="text-base"
        classBtn="h-10 w-fit rounded-lg"
      />
    </div>
  );

  return (
    <div className="h-full w-full bg-dark">
      <div className="h-1/4">{header}</div>
      <div className="h-2/4 flex justify-center overflow-y-hidden overscroll-y-none">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-white w-2/3 text-base text-center opacity-40">
            You seen to be lost!
          </h1>
          <h1 className="text-white w-2/3 text-base text-center opacity-40">
            How did you get here in so outer space?
          </h1>
          <span className="text-7xl my-4">👽</span>
          <h1 className="text-white/40 w-2/3 text-base text-center">
            Since you are here, have you met{" "}
            <span className="text-white/60">Jantino</span>, our best Martian
            developer?
          </h1>
        </div>
      </div>
    </div>
  );
}
