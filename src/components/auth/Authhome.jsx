import React from 'react'
import Inputbox from '../Inputbox/Inputbox'
import MyButton from '../button/MyButton'
import { useFormik } from "formik";
import * as yup from "yup"
import "./Authhome.css"
const initialValues = {
    username: "",
    admin: "",
    email: "",
    password: ""
}

const signUpSchema = yup.object().shape({
    username: yup.string().matches(/^[a-zA-Z][A-Za-z0-9_.-]{2,54}$/,
        "Create a username between 3-55 characters using A-Z, a-z, 0-9, the underscore (_), the hyphen (-), and the dot (.).").required(" Username is Required"),
    admin: yup.string().min(2, 'admin name must be minimum 2')
        .max(15, 'admin name must not be more than 15 characters')
        .required('admin name is required'),
    email: yup.string().email('Invalid email').required('Email is required').matches(/^[\w\-.]+@([\w-]+\.)+[\w-]{2,}$/gm, { message: 'Invalid email', excludeEmptyString: true }),
    password: yup.string().matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{5,15})/,
        "Password should be between 6 to 16 characters including 1 uppercase, 1 lowercase, 1 special character, and 1 digit."
    ).required("password is required")
})
function Authhome() {
    const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
        useFormik({
            initialValues,
            validationSchema: signUpSchema,
            onSubmit: (values, action) => {
                let formData = new FormData();
                formData.append("username", values.username)
                formData.append("admin", values.admin)
                formData.append("email", values.email)
                formData.append("password", values.password)
                action.resetForm();
            },
        });
    return (
        <>
            <div className='flex flex-row '>
                <div className="basis-1/2 p-2">
                    <img src='/logo.svg' alt='my-logo' className='object-fill h-96 w-96 mt-30 ml-30' />
                </div>
                <div className="basis-1/2 mt-20">
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
                                className={errors.username && 'input-err'}
                            />
                            {errors.username && touched.username ? (
                                <p className="text-red-600">{errors.username}</p>
                            ) : null}
                        </div>
                        <div className='mb-10'>
                            <Inputbox
                                lable="Admin"
                                id="admin"
                                name="admin"
                                placeholder="Enter the Admin name"
                                type="text"
                                value={values.admin}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                className={errors.admin && 'input-err'}
                            />
                            {errors.admin && touched.admin ? (
                                <p className="text-red-600">{errors.admin}</p>
                            ) : null}
                        </div>
                        <div className='mb-10'>
                            <Inputbox
                                lable="Email"
                                id="email"
                                name="email"
                                placeholder="Enter the Email"
                                type="text"
                                value={values.email}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                className={errors.email && 'input-err'}
                            />
                            {errors.email && touched.email ? (
                                <p className="text-red-600">{errors.email}</p>
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
                                className={errors.password && 'input-err'}
                            />
                            {errors.password && touched.password ? (
                                <p className="text-red-600">{errors.password}</p>
                            ) : null}
                        </div>
                        <div>
                            <MyButton title="Submit" type="submit" />
                        </div>

                    </form>
                </div>
            </div >
        </>
    )
}

export default Authhome