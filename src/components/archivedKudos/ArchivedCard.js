import React from 'react'
import Card from '../common/Card'

export default function ArchivedCard(props) {
    return (
        <Card className='w-80 grow h-44 max-w-sm'>
            <div className='px-6 mt-3 max-w-sm h-2/3'>
                <p className='text-white'>{props.message}</p>
            </div>
            <div className='flex flex-col h-1/3 bg-bg_card_bottom pl-3 py-1 rounded-b-lg justify-center'>
                <p className='text-sm text-white'>From: {props.from}</p>
                <p className='text-sm text-white'>To: {props.to}</p>
            </div>
        </Card>
    )
}
