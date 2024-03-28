import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <div>
            <Link to="/login">Login</Link>
            {" "}
            <Link to="/about">about</Link>
            {" "}
            <Link to="/profile">profile</Link>

        </div>
    )
}

export default Header