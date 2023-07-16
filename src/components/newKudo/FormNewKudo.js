import React, { useState, useEffect } from "react";

export function InputText(props) {
  return (
    <div className="flex justify-center mt-6">
      <input
        className="p-2 pl-4 rounded w-9/12 bg-gray-800 text-gray-300 focus:outline-none
                focus:outline-3 focus:outline-primary focus:outline-offset-1 placeholder:text-white"
        type="text"
        placeholder={props.placeholder}
        id={props.id}
        name={props.name}
        form={props.form || ""}
        required={props.required || true}
        onChange={props.onChange}
        defaultValue={props.defaultValue}
      />
    </div>
  );
}

export default function FormNewKudo(props) {
  const [textLeft, setTextLeft] = useState(200);
  const [draft, setDraft] = useState({});

  const onChangeTxtLeft = (event) => {
    setTextLeft(200 - event.target.value.length);
  };

  useEffect(() => {
    const fetchData = async () => {
      const draft = JSON.parse(localStorage.getItem("nk_draft"));
      setDraft(draft);
      console.log("draft on form");
      console.log(draft);
    };
    fetchData();
  }, []);

  const checkContent = () => {
    if (
      document.getElementById("to").value.length !== 0 ||
      document.getElementById("from").value.length !== 0 ||
      document.getElementById("message").value.length !== 0
    ) {
      return {
        to: document.getElementById("to").value,
        from: document.getElementById("from").value,
        message: document.getElementById("message").value,
        hasContent: true,
      };
    } else {
      return { hasContent: false };
    }
  };

  const onUpdate = () => {
    props.hasContentForm(checkContent);
  };

  return (
    <form className="pt-3" id="form_nk" onSubmit={props.onSaveKudo}>
      <InputText
        placeholder="From"
        id="from"
        name="from"
        form="form_nk"
        defaultValue={draft.from !== "" ? draft.from : ""}
        onChange={onUpdate}
      />
      <InputText
        placeholder="To"
        id="to"
        name="to"
        form="form_nk"
        defaultValue={draft.to !== "" ? draft.to : ""}
        onChange={onUpdate}
      />
      <div className="flex flex-col items-center justify-center mt-6">
        <textarea
          className="p-2 pl-4 rounded w-9/12 bg-gray-800 text-gray-300 focus:outline-none
          focus:outline-3 focus:outline-primary focus:outline-offset-1 resize-none
          placeholder:text-white"
          maxLength={200}
          type="text"
          placeholder="Message"
          rows="5"
          spellCheck={true}
          required={true}
          id="message"
          name="message"
          form="form_nk"
          onChange={(event) => {
            onChangeTxtLeft(event);
            onUpdate();
          }}
          defaultValue={draft.message !== "" ? draft.message : ""}
        ></textarea>
        <p className="w-9/12 text-end pr-2 pt-1 opacity-60 text-gray-100 font-light text-xs italic">
          {textLeft}/200
        </p>
      </div>
    </form>
  );
}
