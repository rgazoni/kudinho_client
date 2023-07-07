import React from 'react'
import Modal from '../common/Modal'
import FormNewKudo from './FormNewKudo'

export default function MainNewKudo() {
    return (
        <Modal title='New Kudos 🦄'>
            <div>
                <FormNewKudo />
            </div>
        </Modal>
    )
}
