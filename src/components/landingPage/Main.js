import React, { useState, useEffect, useContext } from "react";
import { FilledBtn, HollowedBtn, UnderlinedBtn } from "../common/Button";
import happyFace from "../../assets/icon/happy_face.svg";
import handshake from "../../assets/icon/handshake.svg";
import crying from "../../assets/icon/crying.svg";
import Dialog from "../common/Dialog";
import axios from "axios";
import { LogOut } from "feather-icons-react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../login/AuthContext";
import kofi from "../../assets/icon/kofi.webp";

export default function Main() {
  const [amount, setAmount] = useState("");
  const [openDialog, setOpenDialog] = useState(false);
  const [teamName, setTeamName] = useState("");
  const navigate = useNavigate();
  const { isLogged } = useContext(AuthContext);

  useEffect(() => {
    const fetchData = async () => {
      let kudos_data;
      let team_name;
      try {
        const requestOptions = {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
          body: JSON.stringify({}),
        };
        const response = await axios(
          "http://localhost:3001/api/readnewkudos",
          requestOptions,
        );
        console.log(response);
        const data = await response.data;
        kudos_data = data.kudos_data;
        team_name = data.team_name;
        sessionStorage.setItem("kudos", JSON.stringify(kudos_data));
        setTeamName(team_name);
      } catch (e) {
        kudos_data = [];
        sessionStorage.setItem("kudos", JSON.stringify([]));
      }
      const result = kudos_data.filter((kudo) => !kudo.isKudoReaded);
      setAmount(result.length || 0);
    };
    fetchData();
    isLogged();
  }, []);

  const closeDialogHandler = () => {
    setOpenDialog(false);
  };

  const openDialogHandler = () => {
    setOpenDialog(true);
  };

  const signoutBtn = async () => {
    const requestOptions = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    };
    await fetch("http://localhost:3001/api/auth/signout", requestOptions);
    navigate("/login");
  };

  const openInNewTab = (url) => {
    window.open(url, "_blank", "noreferrer");
  };

  return (
    <div className="bg-gradient-to-r from-gray-900 to-dark h-screen flex flex-col items-center justify-center">
      <button
        className="absolute top-8 right-28 rounded bg-gray-900 shadow-dark drop-shadow-md hover:scale-105 hover:drop-shadow-lg py-1 flex items-center justify-center"
        onClick={() => openInNewTab("https://ko-fi.com/ramonlacerda")}
      >
        <img src={kofi} className="h-3.5 pl-2 pt-[2px]" alt="" />
        <span className="pr-2 pl-1 text-sm text-gray-600">Buy me a Ko-fi!</span>
      </button>
      <button
        className="absolute top-7 right-8 text-gray-400 bg-transparent hover:bg-gray-800
            hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center"
        onClick={signoutBtn}
      >
        <LogOut className="stroke-[2.5] text-gray-200 w-5 h-5" />
      </button>
      {teamName && (
        <h4 className="text-white mb-6 flex justify-center items-center">
          <span className="opacity-50 pr-2">
            Welcome to the {teamName} team platform
          </span>
          <img src={handshake} className="h-3.5" alt="" />
        </h4>
      )}
      <h1 className="flex items-center justify-center">
        {amount !== 0 ? (
          <p className="w-144 text-center text-8xl font-medium text-white mb-10">
            We have <span className="text-primary underline">{amount}</span> new
            Kudos!
          </p>
        ) : (
          <p className="w-3/5 text-center text-8xl font-medium text-white mb-10">
            We don't have new Kudos
            <img src={crying} className="h-[5.2rem] inline pb-2 pl-5" alt="" />
          </p>
        )}
      </h1>
      <FilledBtn
        path="/newkudo"
        classBtn="w-72"
        content="New Kudo"
        icon={happyFace}
      />
      <div className="mt-8">
        <HollowedBtn
          onClick={openDialogHandler}
          content="It's Retro time!"
          className="w-72 p-3"
        />
      </div>
      <UnderlinedBtn
        path="/archivedkudos"
        content="Archived Kudos"
        className="mt-8"
      />
      <Dialog
        className="bg-primary"
        open={openDialog}
        close={closeDialogHandler}
        title="Start to read team Kudos!"
        primaryBtn_path="/readkudos"
        primaryBtn_content="Read Kudos anyway"
        content="Are you sure that you want to read team new Kudos? We advise for you to 
      read with the whole team, because once you read them, the Team new kudos moves to the Archived Kudos section."
      />
    </div>
  );
}
