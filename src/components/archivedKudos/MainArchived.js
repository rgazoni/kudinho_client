import React from 'react'
import { FilledBtn } from '../common/Button'

export default function MainArchived() {
    return (
        <div className='h-full w-full'>
            <div className='sticky top-0 flex items-center bg-gray-600 w-full h-16 px-4'>
                <label className='text-white font-medium text-3xl px-4'>Kudobox</label>
                <div className='ml-2 w-0.5 h-10 rounded-full bg-gray-500'></div>
                <FilledBtn content="Home" classTxt='text-lg' classBtn='ml-8 h-10 w-24 rounded-lg' />
            </div>
            <div className=''>
                <div className='bg-white'>
                    
                </div>
            </div>
        </div>
    )
}
