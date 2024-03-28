import React from "react"
import { createBrowserRouter } from 'react-router-dom'
const Layout = React.lazy(() => import("../Layout"))
const Login = React.lazy(() => import("../components/auth/Login"))
const Register = React.lazy(() => import("../components/auth/Authhome"))
const About = React.lazy(() => import("../components/pages/About"))
const Profile = React.lazy(() => import("../components/pages/Profile"))
const Home = React.lazy(() => import("../components/pages/Home"))
const ErrorPage = React.lazy(() => import("../error-page"))

export const router = createBrowserRouter([
    {
        path: "",
        Component: Layout,
        children: [
            {
                path: "",
                Component: Home,
            },
            {
                path: "/login",
                Component: Login,
            },
            {
                path: "/register",
                Component: Register,
            },
            {
                path: "/about",
                Component: About,
            },
            {
                path: "/profile",
                Component: Profile,
            },


        ]
    }
])
