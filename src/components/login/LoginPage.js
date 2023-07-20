import React from "react";
import Logo from "../../assets/icon/happy_face.svg";
import { FilledBtn, UnderlinedBtn } from "../common/Button";

import { useNavigate } from "react-router-dom";
import { useMutation } from "react-query";
import { toast } from "react-toastify";

export default function LoginPage() {
  const signupVerification = () => {
    const team_code = document.getElementById("team-code").value;
    console.log(team_code);
    mutation.mutate({
      team_code: team_code,
    });
  };

  const navigate = useNavigate();
  const mutation = useMutation({
    mutationFn: async (data) => {
      const requestOptions = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(data),
      };
      return await fetch(
        "http://localhost:3001/api/auth/signin",
        requestOptions,
      );
    },
    onError: (error, variables, context) => {
      toast.error("Server connection is down 😣. Try again later!", {
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
      const response = await data.json();
      if (response.status) {
        navigate("/");
      } else {
        toast.error("Team code provided is wrong or doesn't exists!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      }
    },
  });

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
