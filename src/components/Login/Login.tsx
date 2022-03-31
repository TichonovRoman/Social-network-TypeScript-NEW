import React from "react";
import {useFormik} from "formik";
import axios from "axios";

type initialValuesType = {
        email: string,
        password: string,
        rememberMe: boolean,
        captcha: boolean,

}

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
        onSubmit: (values:initialValuesType) => { //автоматически передается в кнопку, здесь моно сделать запрос на сервер

            alert(JSON.stringify(values, null, 2));
            // instance.post("/auth/login", values)
            //     .then(res => console.log(res)) запрос работает, все хорошо, логинит.
            //     Также уже установлен  yup - через него можно делать валидацию
        },
    });


    return (
        <form onSubmit={formik.handleSubmit}>
            <div>
                <input placeholder={"Login"}
                       onChange={formik.handleChange}
                       value={formik.values.email}
                       id="email"
                       name="email"

                />
            </div>
            <div>
                <input placeholder={"Password"}
                       onChange={formik.handleChange}
                       value={formik.values.password}
                       id="password"
                       name="password"

                />
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
                <button type={"submit"}>Login</button>
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