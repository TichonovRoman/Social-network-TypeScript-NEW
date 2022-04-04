import React from 'react';
import {useFormik} from "formik";

type initialValuesType = {
    textMessage: string,
}
type AddMessageFormPropsType = {
    onSubmit: (text: string) => void,
    placeholderText: string
}

export const MessageForm = (props: AddMessageFormPropsType) => {
    const formik = useFormik({

        initialValues: {
            textMessage: '',
        },
        onSubmit: (values: initialValuesType) => { //автоматически передается в кнопку, здесь можно сделать запрос на сервер
            props.onSubmit(values.textMessage)
            formik.resetForm()
        },
    });


    return (
        <form onSubmit={formik.handleSubmit}>
            <div>
                <textarea placeholder={props.placeholderText}
                          onChange={formik.handleChange}
                          value={formik.values.textMessage}
                          id="textMessage"
                          name="textMessage"

                />
            </div>

            <div>
                <button type={"submit"}>Add Message</button>
            </div>
        </form>

    )
}

export default MessageForm;