import React from 'react'
import { ListGroup, CloseButton } from 'react-bootstrap'

const ToDoList = (props) => {

  return (
    <ListGroup.Item className='list d-flex justify-content-between' variant='light'>
      <div id={props.id}>
        {props.item}
      </div>
      <div className='delete-icon' onClick={props.onClick} >
        <CloseButton className='ms-1' />
      </div>
    </ListGroup.Item>

  )
}

export default ToDoList