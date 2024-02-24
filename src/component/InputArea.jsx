import React from 'react'
import { Form } from 'react-bootstrap'

const InputArea = (props) => {
    return (
        <Form.Control
            size="lg"
            type="text"
            placeholder={props.placeholder}
            value={props.value}
            onChange={props.onChange}
            onKeyDown={props.onKeyDown}
        />
    )
}

export default InputArea