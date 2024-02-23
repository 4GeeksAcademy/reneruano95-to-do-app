import React from 'react'
import { ListGroup, Row } from 'react-bootstrap';

import { MdDelete } from "react-icons/md";
import InputArea from './InputArea';

const ToDoApp = () => {
    return (
        <Row>
            <InputArea />
            <ListGroup className='mt-2 p-0'>
                <ListGroup.Item className='d-flex justify-content-between'>
                    <div>Some content</div>
                    <div><MdDelete /></div>
                </ListGroup.Item>

                <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                <ListGroup.Item>Morbi leo risus</ListGroup.Item>
                <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
                <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
            </ListGroup>
        </Row>
    )
}

export default ToDoApp