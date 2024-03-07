import React, { useState } from 'react'

import InputArea from './InputArea';
import ToDoList from './ToDoList';
import { ListGroup } from 'react-bootstrap';

const ToDoApp = () => {
    const [inputText, setInputText] = useState('')
    const [toDoItems, setToDoItems] = useState([])

    const addItem = (e) => {
        if (e.key === 'Enter' && e.target.value.trim() !== '') {
            setToDoItems((prev) => {
                return [inputText, ...prev]
            })
            setInputText('')
        }
    }

    const deleteItem = (id) => {
        setToDoItems((prev) => {
            const filterFn = prev.filter((item, index) => index !== id)
            return filterFn
        })

    }

    const remainingItems = toDoItems.length

    return (

        <div className='col-sm-12 col-md-6'>
            <InputArea
                placeholder="What needs to be done?"
                value={inputText}
                onChange={(e) => setInputText((prev) => prev = e.target.value)}
                onKeyDown={addItem}
            />
            {toDoItems.length > 0 ? (
                <>
                    <ListGroup className='mt-2 p-0'>
                        {toDoItems.map((item, index) => {
                            return (
                                < ToDoList
                                    key={index}
                                    id={index}
                                    item={item}
                                    onClick={() => deleteItem(index)}
                                />
                            )
                        })}
                    </ListGroup>
                    <p className='mt-2 ps-3'>{remainingItems}  item{remainingItems !== 1 && 's'} left</p>
                </>
            ) : <h2 className='text-center mt-4'> No tasks, add a task</h2>}
        </div>

    )
}

export default ToDoApp