import React from "react";
import Logo from "../../assets/icon/happy_face.svg";
import { FilledBtn, UnderlinedBtn } from "../common/Button";

export default function LoginPage() {
  return (
    <div className="bg-gradient-to-r from-gray-900 to-dark h-screen flex flex-col items-center justify-center">
      <div className="flex justify-center gap-1 mb-7">
        <img src={Logo} className="h-24 hover:animate-spin" />
        <div>
          <h1 className="text-7xl text-primary font-bold">Kudinho</h1>
          <h3 className="text-white text-base opacity-40 pl-1">
            Your team recognition platform
          </h3>
        </div>
      </div>
      <div className="mt-3">
        <div className="flex justify-center mt-2 mb-4 gap-4">
          <input
            className="rounded-sm p-2 focus:outline-none
            focus:outline-3 focus:outline-primary focus:outline-offset-1"
            placeholder="Enter your team code"
          />
          <FilledBtn
            content="Enter"
            classBtn="py-2 rounded-lg"
            classTxt="text-xl"
          />
        </div>
      </div>
      <div className="mt-6">
        <UnderlinedBtn content="Signup your team" path="/signup" />
      </div>
    </div>
  );
}
