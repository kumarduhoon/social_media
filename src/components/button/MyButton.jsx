import React from 'react'
import "./Button.css"

function MyButton({ title, type, ...props }) {
    return (
        <button
            type={type}
            {...props}
            className='my-btn'
        >{title}</button>
    )
}

export default MyButton