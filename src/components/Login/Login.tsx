import React from "react";
import {useFormik} from "formik";
import axios from "axios";

type initialValuesType = {
        email: string,
        password: string,
        rememberMe: boolean,
        captcha: boolean,

}

type ErrorsType = {
    password?: string,
    email?: string
}

const validate = (values: initialValuesType )=> {
    const errors: ErrorsType = {};

   if (!values.password) {
        errors.password = 'Before sending, you must fill in this field';
    }

    if (!values.email) {
        errors.email = 'Before sending, you must fill in this field';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address';
    }

    return errors;
};

export const LoginForm = () => {
    // const instance = axios.create({
    //         baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    //         withCredentials: true,
    //         headers: {
    //             "API-KEY": "cdcf9189-0a6c-4ea6-a766-22c26d9d1d3e"
    //         }
    //     }
    // )

    const formik = useFormik({

        initialValues: {
            email: '',
            password: '',
            rememberMe: false,
            captcha: true,
        },
        validate,
        onSubmit: (values:initialValuesType) => { //автоматически передается в кнопку, здесь моно сделать запрос на сервер

            alert(JSON.stringify(values, null, 2));
            // instance.post("/auth/login", values)
            //     .then(res => console.log(res)) запрос работает, все хорошо, логинит.
            //     Также уже установлен  yup - через него можно делать валидацию
        },
    });
    let errorsPassword: string = !!(formik.touched.password && formik.errors.password) ? "pink" : ""
    let errorsEmail: string = !!(formik.touched.email && formik.errors.email) ? "pink" : ""


    return (
        <form onSubmit={formik.handleSubmit}>
            <div>
                <input placeholder={"Login"}
                       onChange={formik.handleChange}
                       value={formik.values.email}
                       id="email"
                       name="email"
                       onBlur={formik.handleBlur}
                       style={{backgroundColor: errorsEmail}}

                />
                {errorsEmail ? (
                    <div style={{color: "red"}}>{formik.errors.email}</div>
                ) : null}
            </div>
            <div>
                <input placeholder={"Password"}
                       onChange={formik.handleChange}
                       value={formik.values.password}
                       id="password"
                       name="password"
                       onBlur={formik.handleBlur}
                       style={{backgroundColor: errorsPassword}}

                />
                {errorsPassword ? (
                    <div style={{color: "red"}}>{formik.errors.password}</div>
                ) : null}

            </div>
            <div>
                <input type={"checkbox"}
                       onChange={formik.handleChange}
                       checked={formik.values.rememberMe}
                       id="rememberMe"
                       name="rememberMe"


                /> remember me
            </div>
            <div>
                <button type={"submit"} disabled={!!(formik.errors.email || !!formik.errors.password)}>Login</button>
            </div>
        </form>

    )

}
export const Login = () => {
    return <div>
        <h2>Dear user, you need to log in</h2>
        <LoginForm/>


    </div>

}