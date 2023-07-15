import React, { useState, useEffect } from "react";
import { FilledBtn } from "../common/Button";
import ArchivedCard from "./ArchivedCard";

export default function MainArchived() {
  const [archivedKudos, setArchivedKudos] = useState([]);

  useEffect(() => {
    const allKudos = JSON.parse(sessionStorage.getItem("kudos"));
    setArchivedKudos(allKudos.filter((item) => item.isKudoReaded));
  }, []);

  const noArchivedKudos = (
    <div className="flex flex-col justify-center items-center h-3/4">
      <span className="text-7xl mb-4">🤯</span>
      <h1 className="text-white text-base text-center opacity-40">
        We have no archived Kudos yet
      </h1>
    </div>
  );

  const archivedKudoCards = (
    <div className="m-8 flex flex-row flex-grow flex-wrap gap-7">
      {archivedKudos.map((item) => {
        return (
          <ArchivedCard message={item.message} to={item.to} from={item.from} />
        );
      })}
    </div>
  );

  return (
    <div className="h-full w-full bg-dark">
      <div className="h-fit w-full bg-dark pb-6">
        <div className="sticky top-0 flex items-center w-full h-16 px-4">
          <label className="text-white font-medium text-3xl px-4">
            Kudobox
          </label>
          <div className="ml-2 mr-4 w-0.5 h-10 rounded-full bg-gray-500"></div>
          <FilledBtn
            path="/"
            content="Home"
            classTxt="text-lg"
            classBtn="h-10 w-24 rounded-lg"
          />
        </div>
        {archivedKudos.length === 0 ? noArchivedKudos : archivedKudoCards}
      </div>
    </div>
  );
}
