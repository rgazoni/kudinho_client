import React from 'react'
import { FilledBtn, HollowedBtn, UnderlinedBtn } from '../common/Button'
import happyFace from '../../assets/icon/happy_face.svg'
import Modal from '../common/Modal'
import MainNewKudo from '../newKudo/MainNewKudo'

export default function Main() {

    return (
        <div className='bg-dark h-screen flex flex-col items-center justify-center'>
            {/* <h1 className='w-144 text-center text-8xl font-medium text-white mb-6'>We have <span className='text-primary underline'>10</span> new Kudos!</h1>
            <FilledBtn content="New Kudo" hasIcon={true} icon={happyFace}/>
            <HollowedBtn content="Read New Kudos"/>
            <UnderlinedBtn content="Archived Kudos"/> */}
            <MainNewKudo />
        </div>
    )
}
