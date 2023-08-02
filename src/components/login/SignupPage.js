import React, { useState } from "react";
import Modal from "../common/Modal";
import { InputText } from "../common/InputText";
import { useNavigate } from "react-router-dom";
import { useMutation } from "react-query";
import { toast } from "react-toastify";
import CodeSignupPage from "./CodeSignupPage";

export default function SignupPage() {
  const navigate = useNavigate();
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [generatedCode, setGeneratedCode] = useState("");

  const backToLogin = () => {
    navigate("/login");
  };

  const mutation = useMutation({
    mutationFn: async (data) => {
      const requestOptions = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      };
      return await fetch(
        "http://localhost:3001/api/auth/signup-team",
        requestOptions,
      );
    },
    onError: (error, variables, context) => {
      toast.error("Server connection is down. Try again later!", {
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
      if (!response.errors) {
        toast.success(`An email was sent to ${variables.email}!`, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
        setGeneratedCode(response.team_code);
        setIsDialogOpen(true);
      } else {
        signupErrorHandler(response.errors);
      }
    },
  });

  const signupErrorHandler = (errors) => {
    toast.info(`${errors[0].msg}`, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };

  const formSignupSumbit = (event) => {
    event.preventDefault();
    const formData = {
      email: event.target.email.value,
      teamName: event.target.teamName.value,
      companyName: event.target.companyName.value,
      teamSize: event.target.teamSize.value,
    };
    mutation.mutate(formData);
  };

  return (
    <div className="bg-gradient-to-r from-gray-900 to-dark h-screen flex flex-col items-center justify-center">
      <Modal
        title="Team Signup"
        primaryBtn_content="Signup"
        onClickExitBtn={backToLogin}
        form="form_signup"
      >
        <form
          className="mt-12 mb-9"
          id="form_signup"
          onSubmit={formSignupSumbit}
        >
          <div className="flex flex-col items-center justify-center gap-4">
            <InputText
              placeholder="Team Name"
              name="teamName"
              form="form_signup"
            />
            <InputText
              placeholder="Company Name"
              name="companyName"
              form="form_signup"
            />
            <InputText placeholder="Email" name="email" form="form_signup" />
            <div className="flex flex-col items-center">
              <p className="text-white mt-2">Size of your team</p>
              <select
                name="team-size"
                id="teamSize"
                className="my-2 p-1.5 rounded-sm bg-gray-800 text-white focus:outline-none
                  focus:outline-3 focus:outline-primary focus:outline-offset-1"
                form="form_signup"
              >
                <option value="1-4">1-4 colleagues</option>
                <option value="5-8">5-8 colleagues</option>
                <option value="9-15">9-15 colleagues</option>
                <option value="16-30">16-30 colleagues</option>
                <option value="30-more">30+ colleagues</option>
              </select>
            </div>
          </div>
        </form>
      </Modal>

      <CodeSignupPage
        className="bg-indigo-700"
        open={isDialogOpen}
        title="Generated code"
        primaryBtn_path="/login"
        generatedCode={generatedCode}
      />
    </div>
  );
}
