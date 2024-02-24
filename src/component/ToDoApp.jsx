import React, { useState } from 'react'
import { Row } from 'react-bootstrap';

import InputArea from './InputArea';
import ToDoList from './ToDoList';

const ToDoApp = () => {
    const [inputText, setInputText] = useState('')
    const [toDoItems, setToDoItems] = useState([])

    const handleFnInputArea = (e) => {
        if (e.key === 'Enter') {
            setToDoItems((prev) => {
                return [...prev, inputText]
            })
            setInputText('')
        }
    }

    const deleteItem = () => {
        setToDoItems((prev) => {
            return prev.filter((item, index) => index)
        })
    }

    const remainingItems = toDoItems.filter((item) => toDoItems).length

    return (
        <Row>
            <InputArea
                placeholder="What needs to be done?"
                value={inputText}
                onChange={(e) => setInputText((prev) => prev = e.target.value)}
                onKeyDown={handleFnInputArea}
            />
            {toDoItems.length > 0 ? (
                <>
                    < ToDoList
                        toDoItems={toDoItems}
                        onClick={deleteItem}
                    />
                    <p className='mt-2'>{remainingItems}  item{remainingItems !== 1 && 's'} left</p>
                </>
            ) : <h1 className='text-center mt-4'> No tasks, add a task</h1>}
        </Row>
    )
}

export default ToDoApp