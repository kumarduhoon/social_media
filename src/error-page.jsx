import { useRouteError } from "react-router-dom";
import React from 'react'

function ErrorPage() {
    const error = useRouteError();
    return (
        <div>{error.message || error.statusText}</div>
    )
}

export default ErrorPage