import React from 'react'
import "./Login.css"
import Inputbox from '../Inputbox/Inputbox'
import MyButton from '../button/MyButton'
import { useFormik } from "formik";
import * as yup from "yup"
import { useDispatch, useSelector } from 'react-redux'
import { loginUser } from "../../redux/reducer/action/authAction"

const initialValues = {
    password: "",
    username: "",
}

const signInSchema = yup.object().shape({
    username: yup.string().required(" Username is Required"),
    password: yup.string().required("password is required")
})

function Login() {
    const { loading, error, userInfo } = useSelector((state) => (state.auth))
    console.log("userInfo", userInfo)
    const dispatch = useDispatch()
    const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
        useFormik({
            initialValues,
            validationSchema: signInSchema,
            onSubmit: (values, action) => {
                dispatch(loginUser({
                    username: values.username,
                    password: values.password
                }))
                action.resetForm();
            },
        });
    return (
        <>
            <div>Login</div>
            <form onSubmit={handleSubmit}>
                <div className='mb-10'>
                    <Inputbox
                        lable="Username"
                        id="user"
                        name="username"
                        placeholder="Enter the username"
                        type="text"
                        value={values.username}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={errors.username ? 'input-err' : ""}
                    />
                    {errors.username && touched.username ? (
                        <p className="text-red-600">{errors.username}</p>
                    ) : null}
                </div>
                <div className='mb-10'>
                    <Inputbox
                        lable="Password"
                        id="password"
                        name="password"
                        placeholder="Enter the Password"
                        type="password"
                        value={values.password}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={errors.password ? 'input-err' : ""}
                    />
                    {errors.password && touched.password ? (
                        <p className="text-red-600">{errors.password}</p>
                    ) : null}
                </div>
                <div>
                    <MyButton title="Submit" type="submit" />
                </div>
            </form>
        </>
    )
}

export default Login