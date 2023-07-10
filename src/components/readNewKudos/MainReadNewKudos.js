import React from "react";
import { Carousel } from "@material-tailwind/react";
import CarousselItem from "./CarousselItem";

export default function MainReadNewKudos() {
  const message =
    "It is not so much for its beauty that the forest makes a claim upon men&apos;s hearts, as for that subtle something, that quality of air that emanation from old trees, that so wonderfully changes and renews a weary spirit.";

  return (
    <Carousel>
      <CarousselItem message={message} to="Gabriel" from="Ramon" />
      <CarousselItem message={message} to="Gabriel" from="Ramon" />
    </Carousel>
  );
}
