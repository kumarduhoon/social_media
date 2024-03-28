import React from 'react'
import { useSelector } from 'react-redux'

function About() {
    const { isAuthenticated } = useSelector((state) => (state.auth))
    console.log(isAuthenticated, "about")
    return (
        <div>About</div>
    )
}

export default About