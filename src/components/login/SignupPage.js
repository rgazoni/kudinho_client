import React from "react";
import Modal from "../common/Modal";
import { InputText } from "../common/InputText";
import { Copy } from "feather-icons-react";
import { useNavigate } from "react-router-dom";

export default function SignupPage() {
  const navigate = useNavigate();

  const backToLogin = () => {
    navigate("/login");
  };

  return (
    <div className="bg-gradient-to-r from-gray-900 to-dark h-screen flex flex-col items-center justify-center">
      <Modal
        title="Team Signup"
        primaryBtn_content="Signup"
        onClickExitBtn={backToLogin}
      >
        <div className="flex flex-col mt-6 text-white justify-center items-center">
          <h4 className="text-center text-lg mb-1">Generated code</h4>
          <div className="relative flex justify-center items-center gap-2 mt-2">
            <p className="text-center opacity-70 fixed" id="code-gen">
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
              platform. So please write it down and don't lose it!
            </p>
          </div>
        </div>
        <div className="mt-8 mb-9">
          <InputText placeholder="Team Name" />
        </div>
      </Modal>
    </div>
  );
}
