import React from 'react'
import { Typography, Button, Alert } from "@material-tailwind/react";
import { Link } from 'react-router-dom';

export default function CarousselItem(props) {
    const unreaden = props.unreadenKudos ? `${props.unreadenKudos} unreaden Kudos!` : "";
    return (
        <div className="relative h-full w-full bg-gradient-to-r from-primary to-indigo-900">
            <div className="absolute inset-0 grid h-full w-full place-items-center">
                <div className="w-3/4 text-center md:w-2/4">
                    <Typography
                        variant="h1"
                        color="white"
                        className="mb-3 text-3xl md:text-4xl lg:text-5xl"
                    >
                        🎉 Read new kudos 🎉
                    </Typography>
                    <Typography
                        variant="h6"
                        color="white"
                        className='mb-8'
                    >
                        {unreaden}
                    </Typography>
                    <Typography
                        variant="lead"
                        color="white"
                        className="mb-12 opacity-80"
                    >
                        {props.message}
                    </Typography>
                    <div className='flex space-x-4'>
                        <Alert color='blue' variant="ghost" className='pl-5'>
                            <span className='text-white mr-10'>From: {props.from}</span>
                        </Alert>
                        <Alert color='blue' variant="ghost" className='pl-5'>
                            <span className='text-white'>To: {props.to}</span>
                        </Alert>
                    </div>
                    <div className="flex justify-center mt-10">
                        <Link to='/' style={{ textDecoration: 'none' }}>
                            <Button size="lg" color="white" variant="text">
                                Home
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
