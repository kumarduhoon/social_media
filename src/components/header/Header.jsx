import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <div>
            <Link to="/">Home</Link>
            {" "}
            <Link to="/register">Register</Link>
            {" "}
            <Link to="/login">Login</Link>
            {" "}
            <Link to="/about">about</Link>
            {" "}
            <Link to="/profile">profile</Link>

        </div>
    )
}

export default Header