import React from "react";
import { Link } from "react-router-dom";

export function FilledBtn(props) {
  const classesBtn =
    "flex space-x-3.5 items-center justify-center bg-primary hover:bg-secondary p-5 rounded-2xl " +
    props.classBtn;
  const classesTxt = "text-white font-medium text-3xl " + props.classTxt;

  const iconImage = (
    <img className="h-11" alt={props.altIcon || ""} src={props.icon} />
  );

  return (
    <Link to={props.path} style={{ textDecoration: "none" }}>
      <button className={classesBtn} onClick={props.onClick || null}>
        <span className={classesTxt}>{props.content}</span>
        {props.icon && iconImage}
      </button>
    </Link>
  );
}

export function HollowedBtn(props) {
  return (
    <div className="mt-8">
      <Link to={props.path} style={{ textDecoration: "none" }}>
        <button className="w-72 p-3 border-2 border-white rounded-2xl hover:border-primary hover:bg-primary">
          <span className="text-white font-medium text-xl">
            {props.content}
          </span>
        </button>
      </Link>
    </div>
  );
}

export function UnderlinedBtn(props) {
  return (
    <div className="mt-8">
      <Link to={props.path} style={{ textDecoration: "none" }}>
        <button>
          <span className="underline text-white text-lg">{props.content}</span>
        </button>
      </Link>
    </div>
  );
}
