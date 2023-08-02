import React, { useState, useEffect, useContext } from "react";
import { Carousel, Button, IconButton } from "@material-tailwind/react";
import { Link, useNavigate } from "react-router-dom";
import CarousselItem from "./CarousselItem";

import { toast } from "react-toastify";
import sad from "../../assets/icon/sad.svg";

import { ChevronRight } from "feather-icons-react";
import { ChevronLeft } from "feather-icons-react/build/IconComponents";
import AuthContext from "../login/AuthContext";

export default function MainReadNewKudos() {
  const [unreadedKudos, setUnreadedKudos] = useState([]);
  const [readedKudos, setReadedKudos] = useState([]);
  const [currentKudo, setCurrentKudo] = useState(0);
  const navigate = useNavigate();
  const { isLogged } = useContext(AuthContext);
  const sleep = (ms) => new Promise((res) => setTimeout(res, ms));

  useEffect(() => {
    const unreaded = [];
    const readed = [];
    const allKudos = JSON.parse(sessionStorage.getItem("kudos"));
    allKudos.forEach((kudo) => {
      if (kudo.isKudoReaded) {
        readed.push(kudo);
      } else {
        unreaded.push(kudo);
      }
    });
    setUnreadedKudos(unreaded);
    setReadedKudos(readed);
    isLogged();
  }, []);

  const onHomeClick = async (currentIndex) => {
    const amountKudos =
      currentIndex + 1 > currentKudo ? currentIndex + 1 : currentKudo;
    const readedkudos = unreadedKudos.filter((item, index) => {
      return index + 1 <= amountKudos && item;
    });
    const readedIds = readedkudos.map((item) => item._id);
    try {
      const requestOptions = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ids: readedIds }),
      };
      await fetch("http://localhost:3001/api/updatekudos", requestOptions);
      toast.info("You can check your readed Kudos on Archived Kudos!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      await sleep(500);
      navigate("/");
    } catch (e) {
      toast.error("Error updating Kudos!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
  };

  const noNewKudos = (
    <div className="bg-gradient-to-r from-secondary to-primary h-full flex flex-col justify-center items-center">
      <img className="mb-6" src={sad} alt="" />
      <h1 className="text-white text-lg w-1/5 text-center opacity-70">
        We have no new Kudos
      </h1>
      <div className="flex justify-center mt-5">
        <Link to="/" style={{ textDecoration: "none" }}>
          <Button size="lg" color="white" variant="text">
            Home
          </Button>
        </Link>
      </div>
    </div>
  );

  return (
    <Carousel
      prevArrow={({ handlePrev, activeIndex }) => (
        <IconButton
          disabled={activeIndex === 0}
          variant="text"
          color="white"
          size="lg"
          onClick={handlePrev}
          className="!absolute top-2/4 -translate-y-2/4 left-4 rounded-full select-none
          transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none
          w-12 max-w-[48px] h-12 max-h-[48px] text-white hover:bg-white/10 active:bg-white/30
          grid place-items-center"
        >
          <ChevronLeft className="stroke-[4] h-7 w-7" />
        </IconButton>
      )}
      nextArrow={({ handleNext, activeIndex }) => {
        return (
          <IconButton
            disabled={activeIndex >= unreadedKudos.length - 1}
            variant="text"
            color="white"
            size="lg"
            onClick={() => {
              handleNext();
              if (activeIndex + 1 > currentKudo)
                setCurrentKudo(activeIndex + 1);
            }}
            className="!absolute top-2/4 -translate-y-2/4 !right-4 rounded-full select-none
          transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none
          w-12 max-w-[48px] h-12 max-h-[48px] text-white hover:bg-white/10 active:bg-white/30
          grid place-items-center"
          >
            <ChevronRight className="stroke-[4] h-7 w-7" />
          </IconButton>
        );
      }}
    >
      {unreadedKudos.length === 0
        ? noNewKudos
        : unreadedKudos.map((item, index) => {
            return (
              <CarousselItem
                isNew={currentKudo}
                onHomeClick={onHomeClick}
                key={item._id}
                message={item.message}
                to={item.to}
                from={item.from}
                currentIndex={index}
              />
            );
          })}
    </Carousel>
  );
}
