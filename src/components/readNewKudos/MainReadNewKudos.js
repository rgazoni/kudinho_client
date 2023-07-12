import React, { useState, useEffect } from "react";
import { Carousel } from "@material-tailwind/react";
import CarousselItem from "./CarousselItem";

import axios from "axios";

export default function MainReadNewKudos(props) {
  const [unreadedKudos, setUnreadedKudos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios("http://localhost:3001/api/readnewkudos");
      setUnreadedKudos(response.data);
    };
    fetchData();
  }, []);

  return (
    <Carousel>
      {unreadedKudos.map((item, index) => {
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
