import React from 'react'
import { FilledBtn } from '../common/Button'
import ArchivedCard from './ArchivedCard'

export default function MainArchived(props) {
    const message='Olá, muito obrigado pelo apoio durante a sprint!';
    const to='Gabriel';
    const from='Ramon';

    return (
        <div className='h-full w-full'>
            <div className='sticky top-0 flex items-center bg-gray-600 w-full h-16 px-4'>
                <label className='text-white font-medium text-3xl px-4'>Kudobox</label>
                <div className='ml-2 w-0.5 h-10 rounded-full bg-gray-500'></div>
                <FilledBtn content="Home" classTxt='text-lg' classBtn='ml-8 h-10 w-24 rounded-lg' />
            </div>
            <div className='m-8 flex flex-row flex-grow flex-wrap gap-6'>
                <ArchivedCard message={message} to={to} from={from}/>
                <ArchivedCard message={message} to={to} from={from}/>
                <ArchivedCard message={message} to={to} from={from}/>
                <ArchivedCard message={message} to={to} from={from}/>
            </div>
        </div>
    )
}
