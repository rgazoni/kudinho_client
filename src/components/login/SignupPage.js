import React from "react";
import Modal from "../common/Modal";
import { InputText } from "../common/InputText";
import { Copy } from "feather-icons-react";
import { useNavigate } from "react-router-dom";

import { toast } from "react-toastify";

export default function SignupPage() {
  const navigate = useNavigate();

  const backToLogin = () => {
    navigate("/login");
  };
  const formSignupSumbit = (event) => {
    const formData = {
      email: event.target.email.value,
      teamName: event.target.teamName.value,
      companyName: event.target.companyName.value,
      teamSize: event.target.teamSize.value,
    };
    console.log(formData);
    toast(`🦄 An email was sent to ${formData.email}!`, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });

    navigate("/login");
  };

  return (
    <div className="bg-gradient-to-r from-gray-900 to-dark h-screen flex flex-col items-center justify-center">
      <Modal
        title="Team Signup"
        primaryBtn_content="Signup"
        onClickExitBtn={backToLogin}
        form="form_signup"
      >
        <div className="flex flex-col mt-6 text-white justify-center items-center">
          <h4 className="text-center text-lg mb-1">Generated code</h4>
          <div className="relative flex justify-center items-center gap-2 mt-2">
            <p className="text-center opacity-70 absolute" id="code-gen">
              H3W12D
            </p>
            <div
              className="absolute left-9 p-1 rounded hover:bg-black/30 group"
              onClick={() => {
                const code = document.getElementById("code-gen");
                navigator.clipboard.writeText(code.innerHTML);
              }}
            >
              <Copy className="h-3.5 w-3.5 group-hover:w-4 group-hover:h-4" />
            </div>
          </div>
          <div className="w-3/4 mt-5">
            <p className="text-sm opacity-40 text-center">
              This generated code will give you and your team access to the
              platform. So please write it down and don't lose it! Also Kudinho
              will send you an email with the code.
            </p>
          </div>
        </div>
        <form
          className="mt-6 mb-9"
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
    </div>
  );
}
