import React from 'react'
import "./Inputbox.css"

function Inputbox({ lable, id, value, onChange, placeholder, className, ...props }) {
    return (
        <div>
            {lable && <b><p><label htmlFor={id}>{lable} :</label></p></b>}
            <input
                id={id}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                {...props}
                className={`input-box ${className}`}
            />
        </div>
    )
}

export default Inputbox