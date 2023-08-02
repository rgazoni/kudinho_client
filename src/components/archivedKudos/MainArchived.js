import React, { useState, useEffect, useContext } from "react";
import { FilledBtn } from "../common/Button";
import AuthContext from "../login/AuthContext";
import ArchivedCard from "./ArchivedCard";
import Logo from "../../assets/icon/happy_face.svg";
import mindBlowing from "../../assets/icon/mind-blowing.svg";
import { useNavigate } from "react-router-dom";

export default function MainArchived() {
  const [archivedKudos, setArchivedKudos] = useState([]);
  let currentMonth = 0;
  const { isLogged } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const requestOptions = {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
        };
        const response = await fetch(
          "http://localhost:3001/api/archivedkudos",
          requestOptions,
        );
        const data = await response.json();
        setArchivedKudos(data.reverse() || []);
      } catch (e) {
        setArchivedKudos([]);
      }
    };
    fetchData();
    isLogged();
  }, []);

  const noArchivedKudos = (
    <div className="h-[92vh] flex justify-center overflow-y-hidden overscroll-y-none">
      <div className="flex flex-col items-center justify-center">
        <img className="h-[4.8rem] mb-4" src={mindBlowing} alt="" />
        <h1 className="text-white text-base text-center opacity-40">
          We have no archived Kudos yet
        </h1>
      </div>
    </div>
  );

  const archivedKudoCards = (
    <div className="h-fit bg-dark">
      <div className="pb-6 m-8 flex flex-grow flex-wrap gap-7">
        {archivedKudos.map((item) => {
          //Fetch date
          const date = new Date(item.timestamp);
          const month =
            date.getMonth() + 1 < 10
              ? "0" + (date.getMonth() + 1)
              : date.getMonth() + 1;
          const fullDate =
            date.getDate() + "/" + month + "/" + date.getFullYear();

          let divider;
          if (currentMonth !== date.getMonth() + 1) {
            currentMonth = date.getMonth() + 1;
            divider = (
              <div className="flex items-center w-full">
                <div className="h-[0.1rem] rounded bg-gray-800/30 w-10"></div>
                <p className="text-white italic font-semibold ml-4 rounded">
                  {date.toLocaleString("default", { month: "long" })}
                </p>
                <div className="h-[0.1rem] rounded bg-gray-800/30 w-full ml-4"></div>
              </div>
            );
          }
          return (
            <>
              {divider}
              <ArchivedCard
                key={item._id}
                message={item.message}
                date={fullDate}
                to={item.to}
                from={item.from}
              />
            </>
          );
        })}
      </div>
    </div>
  );

  const header = (
    <div className="sticky top-0 z-40 flex items-center w-full h-16 px-4 bg-dark/90">
      <button
        className="flex justify-center items-center gap-2"
        onClick={() => {
          navigate("/");
        }}
      >
        <img src={Logo} className="h-8 ml-3" alt="Logo" />
        <label className="text-white font-medium text-3xl">Kudinho</label>
      </button>
      <div className="ml-4 mr-4 w-0.5 h-10 rounded-full bg-gray-500"></div>
      <FilledBtn
        path="/"
        content="Home"
        classTxt="text-lg"
        classBtn="h-10 w-24 rounded-lg"
      />
    </div>
  );

  return (
    <div className="h-fit min-h-full w-full bg-dark">
      {header}
      {archivedKudos.length === 0 ? noArchivedKudos : archivedKudoCards}
    </div>
  );
}
