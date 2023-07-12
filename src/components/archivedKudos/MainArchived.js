import React, { useState, useEffect } from "react";
import { FilledBtn } from "../common/Button";
import ArchivedCard from "./ArchivedCard";

import axios from "axios";

export default function MainArchived(props) {
  const [archivedKudos, setArchivedKudos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios("http://localhost:3001/api/archivedkudos");
      setArchivedKudos(response.data);
    };
    fetchData();
  }, []);

  return (
    <div className="h-full w-full bg-dark">
      <div className="sticky top-0 flex items-center bg-black w-full h-16 px-4">
        <label className="text-white font-medium text-3xl px-4">Kudobox</label>
        <div className="ml-2 mr-4 w-0.5 h-10 rounded-full bg-gray-500"></div>
        <FilledBtn
          path="/"
          content="Home"
          classTxt="text-lg"
          classBtn="h-10 w-24 rounded-lg"
        />
      </div>
      <div className="m-8 flex flex-row flex-grow flex-wrap gap-7">
        {archivedKudos.map((item) => {
          return (
            <ArchivedCard
              message={item.message}
              to={item.to}
              from={item.from}
            />
          );
        })}
      </div>
    </div>
  );
}
