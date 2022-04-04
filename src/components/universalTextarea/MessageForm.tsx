import React from 'react';
import {useFormik} from "formik";


type initialValuesType = {
    textMessage: string,
}
type AddMessageFormPropsType = {
    onSubmit: (text: string) => void,
    placeholderText: string,
    textMaxLength: number
}

type ErrorsType = {
    textMessage?: string,
}


export const AddMessageForm = (props: AddMessageFormPropsType) => {

    const validate = (values: initialValuesType) => {
        const errors: ErrorsType = {};
        if (!values.textMessage) {
            errors.textMessage = 'Before sending, you must fill in this field';
        } else if (values.textMessage.length > props.textMaxLength) {
            errors.textMessage = `Must be ${props.textMaxLength} characters or less`;
        }

        return errors;
    };

    const formik = useFormik({

        initialValues: {
            textMessage: '',
        },
        validate,
        onSubmit: (values: initialValuesType) => { //автоматически передается в кнопку, здесь можно сделать запрос на сервер
            props.onSubmit(values.textMessage)
            formik.resetForm() //очищаем форму после сабмита
        },
    });


    return  (
        <form onSubmit={formik.handleSubmit}>
            <div>

                <textarea placeholder={props.placeholderText}
                          onChange={formik.handleChange}
                          value={formik.values.textMessage}
                          id="textMessage"
                          name="textMessage"
                          style={{backgroundColor :formik.errors.textMessage ? "pink" : ""}}
                />
                {formik.errors.textMessage ? <div style={{color: "red"}}>{formik.errors.textMessage}</div> : null}
            </div>

            <div>
                <button type={"submit"}>Add Message</button>
            </div>
        </form>

    )
}



export default AddMessageForm;