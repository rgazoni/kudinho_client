import React, { useState, useEffect } from "react";
import { Carousel, Button, IconButton } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import CarousselItem from "./CarousselItem";

import { ChevronRight } from "feather-icons-react";
import { ChevronLeft } from "feather-icons-react/build/IconComponents";

export default function MainReadNewKudos() {
  const [unreadedKudos, setUnreadedKudos] = useState([]);
  const [readedKudos, setReadedKudos] = useState([]);
  const [currentKudo, setCurrentKudo] = useState(0);

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
  }, []);

  const onHomeClick = async (currentIndex) => {
    const amountKudos =
      currentIndex + 1 > currentKudo ? currentIndex + 1 : currentKudo;
    unreadedKudos.map((item, index) => {
      if (index + 1 <= amountKudos) item.isKudoReaded = true;
    });

    sessionStorage.setItem(
      "kudos",
      JSON.stringify(readedKudos.concat(unreadedKudos))
    );
    console.log("all kudos");
    console.log(JSON.parse(sessionStorage.getItem("kudos")));
  };

  const noNewKudos = (
    <div className="bg-gradient-to-r from-primary to-indigo-900 h-full flex flex-col justify-center items-center">
      <span className="text-8xl mb-6">😔</span>
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
