import React, { useState, useEffect } from "react";
import { Carousel, Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import CarousselItem from "./CarousselItem";

import axios from "axios";

export default function MainReadNewKudos(props) {
  const [unreadedKudos, setUnreadedKudos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios("http://localhost:3001/api/readnewkudos");
        setUnreadedKudos(response.data);
      } catch (e) {
        setUnreadedKudos([]);
      }
    };
    fetchData();
  }, []);

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
    <Carousel>
      {unreadedKudos.length === 0
        ? noNewKudos
        : unreadedKudos.map((item, index) => {
            return (
              <CarousselItem
                key={item._id}
                message={item.message}
                to={item.to}
                from={item.from}
                itemNumber={index + 1}
                arrLen={unreadedKudos.length}
              />
            );
          })}
    </Carousel>
  );
}
