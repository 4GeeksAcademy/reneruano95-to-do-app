import React, { useState } from 'react'
import { ListGroup } from 'react-bootstrap'

import CloseButton from 'react-bootstrap/CloseButton';



const ToDoList = (props) => {

  return (
    <ListGroup className='mt-2 p-0'>
      {props.toDoItems.map((item, index) => {
        return (
          <ListGroup.Item className='list d-flex justify-content-between' >
            <div id={index} key={index}>{item}</div>

            <div className='delete-icon' onClick={props.onClick} >
              <CloseButton className='ms-1' />
            </div>

          </ListGroup.Item>
        )
      })}
    </ListGroup>
  )
}

export default ToDoList