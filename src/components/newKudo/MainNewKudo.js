import React from "react";
import Modal from "../common/Modal";
import FormNewKudo from "./FormNewKudo";

export default function MainNewKudo() {
  return (
    <div className="bg-gradient-to-r from-primary to-indigo-900 h-screen flex flex-col items-center justify-center">
      <Modal title="New Kudos 🦄">
        <div>
          <FormNewKudo />
        </div>
      </Modal>
    </div>
  );
}
