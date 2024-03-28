import React from 'react'
import { useSelector } from 'react-redux'

function Profile() {
    const { isAuthenticated } = useSelector((state) => (state.auth))
    console.log(isAuthenticated, "about")
    return (
        <div>Profile</div>
    )
}

export default Profile