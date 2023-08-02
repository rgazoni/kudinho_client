import React, { useContext, useEffect } from "react";
import Logo from "../../assets/icon/happy_face.svg";
import { FilledBtn, UnderlinedBtn } from "../common/Button";
import { useNavigate } from "react-router-dom";
import { useMutation } from "react-query";
import { toast } from "react-toastify";
import AuthContext from "./AuthContext";
import kofi from "../../assets/icon/kofi.webp";

export default function LoginPage() {
  const { login, isLogged } = useContext(AuthContext);

  const signupVerification = async () => {
    const team_code = document.getElementById("team-code").value;
    mutation.mutate({
      team_code: team_code,
    });
  };

  const navigate = useNavigate();

  const mutation = useMutation({
    mutationFn: async (payload) => {
      const res = await login(payload);
      return res.json();
    },
    onError: (error, variables, context) => {
      toast.error("Server connection is down, try again later!", {
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
    onSuccess: async (data, variables, context) => {
      console.log(data, variables);
      if (data.status) {
        navigate("/");
      } else {
        toast.error(
          `Team code provided ${data.team_code} is wrong or doesn't exists!`,
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
      }
    },
  });
  const openInNewTab = (url) => {
    window.open(url, "_blank", "noreferrer");
  };
  return (
    <div className="bg-gradient-to-r from-gray-900 to-dark h-screen flex flex-col items-center justify-center">
      <button
        className="absolute top-8 right-28 rounded bg-gray-900 shadow-dark drop-shadow-md hover:scale-105 hover:drop-shadow-lg py-1 flex items-center justify-center"
        onClick={() => openInNewTab("https://ko-fi.com/ramonlacerda")}
      >
        <img src={kofi} className="h-3.5 pl-2 pt-[2px]" alt="" />
        <span className="pr-2 pl-1 text-sm text-gray-600">Buy me a Ko-fi!</span>
      </button>
      <div className="flex justify-center gap-1 mb-7">
        <img src={Logo} className="h-24 hover:animate-spin" alt="" />
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
            id="team-code"
          />
          <FilledBtn
            content="Enter"
            classBtn="py-2 rounded-lg"
            classTxt="text-xl"
            onClick={signupVerification}
          />
        </div>
      </div>
      <div className="mt-6">
        <UnderlinedBtn content="Signup your team" path="/signup" />
      </div>
    </div>
  );
}
