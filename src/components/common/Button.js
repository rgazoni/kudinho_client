import React from 'react'

export function FilledBtn(props) {
    const classesBtn = 'flex space-x-3.5 items-center justify-center bg-gradient-to-r from-primary to-fuchsia-700 hover:to-fuchsia-600 p-5 rounded-2xl ' + props.classBtn;
    const classesTxt = 'text-white font-medium text-3xl ' + props.classTxt;

    const iconImage = <img
        className='h-11'
        alt={props.altIcon || ''}
        src={props.icon}
    />;

    return (
        <button className={classesBtn}>
            <span className={classesTxt}>{props.content}</span>
            {props.icon && iconImage}
        </button>
    )
}

export function HollowedBtn(props) {
    return (
        <div className='mt-8'>
            <button className='w-72 p-3 border-2 border-white rounded-2xl hover:border-primary hover:bg-primary'>
                <span className='text-white font-medium text-xl'>{props.content}</span>
            </button>
        </div>
    )
}

export function UnderlinedBtn(props) {
    return (
        <div className='mt-8'>
            <button>
                <span className='underline text-white text-lg'>{props.content}</span>
            </button>
        </div>
    )
}