import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faTrash } from '@fortawesome/free-solid-svg-icons'

function Todo() {
    return (
        <div className='todoAppArea'>
            <header>Todo App</header>
            <div className="inputField">
                <input type="text" placeholder='Add your new todo' />
                <button><FontAwesomeIcon icon={faPlus} /></button>
            </div>
            <ul className="todoList">
                <li>Buy a new apple macbook pro <span><FontAwesomeIcon icon={faTrash} /></span></li>
                <li>Complate a previous task <span><FontAwesomeIcon icon={faTrash} /></span></li>
                <li>Create a video for YouTube <span><FontAwesomeIcon icon={faTrash} /></span></li>
                <li>Create a new portfolio site <span><FontAwesomeIcon icon={faTrash} /></span></li>
            </ul>
            <div className="footer">
                <span>You have 4 pending tasks</span>
                <button>Clear All</button>
            </div>
        </div>
    )
}

export default Todo