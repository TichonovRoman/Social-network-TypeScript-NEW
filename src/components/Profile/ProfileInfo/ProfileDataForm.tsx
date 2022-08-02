import React from "react";
import { useFormik } from "formik";

type initialValuesType = {
  fullName: string;
  lookingForAJob: boolean;
  mySkills: string;
  aboutMe: string;
};

type ErrorsType = {
  fullName?: string;
  email?: string;
};

const validate = (values: initialValuesType) => {
  const errors: ErrorsType = {};

  if (!values.fullName) {
    errors.fullName = "See the correct fullname";
  }

  // if (!values.email) {
  //     errors.email = 'Before sending, you must fill in this field';
  // } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
  //     errors.email = 'Invalid email address';
  // }

  return errors;
};

export const ProfileDataForm = ({ profile }: any) => {
  const formik = useFormik({
    initialValues: {
      fullName: "",
      lookingForAJob: false,
      mySkills: "",
      aboutMe: "",
    },
    validate,
    onSubmit: (values: initialValuesType, { setSubmitting, setStatus }) => {
      //автоматически передается в кнопку, здесь моно сделать запрос на сервер
      // props.login(values, setStatus)

      console.log(formik.values);
      setSubmitting(false);
    },
  });

  const isError = formik.touched.fullName && formik.errors.fullName;

  let errorsFullName: string = !!isError ? "pink" : "";

  return (
    <form onSubmit={formik.handleSubmit}>
      <div>
        <button onClick={() => {}}>Сохранить</button>
      </div>
      <div>
        <b>Меня зовут:</b>{" "}
        <input
          placeholder={"Full Name"}
          onChange={formik.handleChange}
          value={formik.values.fullName}
          id="fullName"
          name="fullName"
          onBlur={formik.handleBlur}
          style={{ backgroundColor: errorsFullName }}
        />
        {isError && formik.errors.fullName}
      </div>

      <div>
        <b>Ищу работу:</b>
        <input
          type={"checkbox"}
          onChange={formik.handleChange}
          checked={formik.values.lookingForAJob}
          id="lookingForAJob"
          name="lookingForAJob"
          onBlur={formik.handleBlur}
        />
      </div>

      <div>
        <b>Мои навыки:</b> {profile.lookingForAJobDescription}
        <textarea
          onChange={formik.handleChange}
          value={formik.values.mySkills}
          placeholder={"My skills"}
          id="mySkills"
          name="mySkills"
          onBlur={formik.handleBlur}
        />
      </div>
      <div>
        <b>Обо мне:</b> {profile.aboutMe}
        <textarea
          onChange={formik.handleChange}
          value={formik.values.aboutMe}
          placeholder={"About Me"}
          id="aboutMe"
          name="aboutMe"
          onBlur={formik.handleBlur}
        />
      </div>
      {/*<div>*/}
      {/*    <b>Контакты:</b> {Object.keys(profile.contacts).map(key => {*/}

      {/*    return <Contacts key={key} contactTitle={key} contactValue={profile.contacts[key]}/>*/}
      {/*})}*/}
      {/*</div>*/}
    </form>
  );
};
