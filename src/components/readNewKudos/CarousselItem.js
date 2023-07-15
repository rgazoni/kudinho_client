import React from "react";
import { Typography, Button, Alert, Chip } from "@material-tailwind/react";
import { Link } from "react-router-dom";

export default function CarousselItem(props) {
  return (
    <div className="relative h-full w-full bg-gradient-to-r from-primary to-indigo-900">
      <div className="absolute inset-0 grid h-full w-full place-items-center">
        <div className="w-3/4 text-center md:w-2/4 flex flex-col justify-center items-center">
          <Typography
            variant="h1"
            color="white"
            className="mb-4 text-xl md:text-2xl lg:text-3xl font-bold opacity-80"
          >
            Read new kudos 🥳
          </Typography>

          {!(props.currentIndex + 1 <= props.isNew) ? (
            <Chip color="indigo" value="✨ New" className="mb-9" />
          ) : (
            <div className="mb-9" />
          )}

          <div className="bg-[#23347b] rounded-xl w-4/5 mb-11 shadow-sm shadow-gray-950">
            <Typography
              variant="lead"
              color="white"
              className="text-lg p-5 text-start w-full mb-3 text-white"
            >
              {props.message}
            </Typography>
          </div>

          <div className="flex w-4/5 gap-4">
            <Alert color="blue" variant="ghost" className="">
              <p className="text-white text-start text-sm h-fit">
                From: {props.from}
              </p>
            </Alert>
            <Alert color="blue" variant="ghost">
              <p className="text-white text-start text-sm h-fit">
                To: {props.to}
              </p>
            </Alert>
          </div>
          <div className="flex justify-center mt-10">
            <Link to="/" style={{ textDecoration: "none" }}>
              <Button
                size="lg"
                color="white"
                variant="text"
                onClick={() => {
                  props.onHomeClick(props.currentIndex);
                }}
              >
                Home
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
