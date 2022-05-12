import React from "react";
import {useFormik} from "formik";
import axios from "axios";
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";
import {authAPI} from "../../api/api";
import {Redirect} from "react-router-dom";
import {AppStateType} from "../../redux/redux-store";

export type initialValuesType = {
    email: string,
    password: string,
    rememberMe: boolean,
    captcha: boolean,

}

type ErrorsType = {
    password?: string,
    email?: string
}

const validate = (values: initialValuesType) => {
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

export const LoginForm = (props: any) => {

    const formik = useFormik({

        initialValues: {
            email: '',
            password: '',
            rememberMe: false,
            captcha: true,
        },
        validate,
        onSubmit: (values: initialValuesType, {setSubmitting, setStatus}) => { //автоматически передается в кнопку, здесь моно сделать запрос на сервер
            props.login(values, setStatus)
            setSubmitting(false);
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
                       type={"password"}

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
            <div style={{color: "red"}}>
                {formik.status}
            </div>


            <div>
                <button type={"submit"} disabled={!!(formik.errors.email || !!formik.errors.password)}>Login</button>
            </div>
        </form>

    )

}
const Login = (props: any) => {

    if (props.isAuth) {
        return <Redirect to={"/profile"}/>
    }

    return <div>
        <h2>Dear user, you need to log in</h2>
        <LoginForm login={props.login}/>
    </div>
}

const mapStateToProps = (state: AppStateType) => ({
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {login})(Login)

