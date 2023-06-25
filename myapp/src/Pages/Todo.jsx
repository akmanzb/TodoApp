import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

function Todo() {
    return (
        <div className='todoAppArea'>
            <FontAwesomeIcon icon={faPlus} />
        </div>
    )
}

export default Todo