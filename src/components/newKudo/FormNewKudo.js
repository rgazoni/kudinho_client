import React from 'react'

export function InputText(props) {
    return (
        <div className='flex justify-center mt-6'>
            <input
                className='p-2 pl-4 rounded w-9/12 bg-gray-600 text-gray-300 focus:outline-none
                focus:outline-3 focus:outline-primary focus:outline-offset-1 placeholder:text-white'
                type="text"
                placeholder={props.placeholder}
                id={props.id}
                name={props.name}
                required={props.required || true}
            />
        </div>
    )
}

export default function FormNewKudo() {
    return (
        <form id="form_nk" className='pt-7'>
            <InputText placeholder='From' id='from' name='from' />
            <InputText placeholder='To' id='to' name='to' />
            <div className='flex justify-center mt-6'>
                <textarea
                    className='p-2 pl-4 rounded w-9/12 bg-gray-600 text-gray-300 focus:outline-none focus:outline-3
                    focus:outline-primary focus:outline-offset-1 resize-none placeholder:text-white'
                    maxLength={200}
                    type="text"
                    placeholder='Message'
                    rows='5'
                    spellCheck={true}
                    required={true}
                    id="message"
                    name="message"
                ></textarea>
            </div>
        </form>
    )
}
