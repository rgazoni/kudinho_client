import React from "react";
import { Typography, Button, Alert } from "@material-tailwind/react";
import { Link } from "react-router-dom";

export default function CarousselItem(props) {
  const unreaden = props.unreadenKudos
    ? `${props.unreadenKudos} unreaden Kudos!`
    : "";
  return (
    <div className="relative h-full w-full bg-gradient-to-r from-primary to-indigo-900">
      <div className="absolute inset-0 grid h-full w-full place-items-center">
        <div className="w-3/4 text-center md:w-2/4 flex flex-col justify-center items-center">
          <Typography
            variant="h1"
            color="white"
            className="mb-3 text-3xl md:text-4xl lg:text-5xl"
          >
            🎉 Read new kudos 🎉
          </Typography>

          <Typography variant="h6" color="white" className="mb-8">
            {unreaden}
          </Typography>

          <Typography
            variant="lead"
            color="white"
            className="mb-12 opacity-80 w-4/5"
          >
            {props.message}
          </Typography>

          <div className="flex flex-col w-4/5">
            <Alert color="blue" variant="ghost" className="mb-6">
              <p className="text-white text-start h-fit">From: {props.from}</p>
            </Alert>
            <Alert color="blue" variant="ghost">
              <p className="text-white text-start h-fit">To: {props.to}</p>
            </Alert>
          </div>
          <div className="flex justify-center mt-10">
            <Link to="/" style={{ textDecoration: "none" }}>
              <Button size="lg" color="white" variant="text">
                Home
              </Button>
            </Link>
          </div>
          <div className="absolute bottom-10">
            <p className="text-white font-light opacity-70">
              {props.itemNumber}/{props.arrLen}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
