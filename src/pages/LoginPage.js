import { Formik } from "formik";
import { useState } from "react";
import axios from "axios";

const initialValues = {
  username: "",
  gender: "",
  email: "",
  password: "",
  confirmPassword: "",
  checked: false,
};
const validateValues = (values) => {
  const errors = {};
  //test validation for username field
  if (!values.username) {
    errors.username = "Username is required";
  } else if (values.username.length < 4) {
    errors.username = "Username must be at least 4 characters";
  } else if (!/^[0-9a-zA-Z]+$/.test(values.username)) {
    errors.username = "Username can contain numbers and characters only";
  }
  //test validation for gender field
  if (!values.gender) {
    errors.gender = "Gender is required";
  }
  //test validation for email field
  if (!values.email) {
    errors.email = "Email is required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }
  //test validation for password field
  if (!values.password) {
    errors.password = "Password is required";
  } else if (values.password.length < 8) {
    errors.password = "Password must be at least 8 characters";
  }
  //test validation for confirm password field
  if (values.confirmPassword !== values.password) {
    errors.confirmPassword = "Passwords must match";
  }
  //test validation for checkbox field
  if (!values.checked) {
    errors.checked = "You must check the agreement";
  }
  return errors;
};


const LoginPage = ({currentUser, setCurrentUser}) => {
  

  const onSubmit = (values, { setSubmitting }) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 400);

    axios
      .get("https://60dff0ba6b689e001788c858.mockapi.io/token", {
        email: values.email,
        password: values.password,
      })
      .then((response) => {
        setCurrentUser({
          token: response.data.token,
          userId: response.data.userId,
        });
      });
      
  };

  console.log("Current User = ", currentUser);

    return (
      <div>
        <h1>Login Form with Formik</h1>
        <Formik
          initialValues={initialValues}
          validate={validateValues}
          onSubmit={onSubmit}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
          }) => (
            <form onSubmit={handleSubmit}>
              <div>
                <label htmlFor="username">Username: </label>
                <input
                  type="text"
                  name="username"
                  value={values.username}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.username && touched.username && errors.username}
              </div>

              <div>
                <label htmlFor="gender">Gender: </label>
                <select
                  name="gender"
                  value={values.gender}
                  onChange={handleChange}
                  onBlur={handleBlur}
                >
                  <option selected value="" label="Choose a gender" />
                  <option value="male" label="Male" />
                  <option value="female" label="Female" />
                </select>
                {errors.gender && touched.gender && errors.gender}
              </div>

              <div>
                <label htmlFor="email">Email: </label>
                <input
                  type="email"
                  name="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                />
                {errors.email && touched.email && errors.email}
              </div>

              <div>
                <label htmlFor="password">Password: </label>
                <input
                  type="password"
                  name="password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                />
                {errors.password && touched.password && errors.password}
              </div>

              <div>
                <label htmlFor="confirmPassword">Confirm Password: </label>
                <input
                  type="password"
                  name="confirmPassword"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.confirmPassword}
                />
                {errors.confirmPassword &&
                  touched.confirmPassword &&
                  errors.confirmPassword}
              </div>

              <div>
                <input
                  type="checkbox"
                  name="checked"
                  value={values.checked}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <label htmlFor="checked">I have read the agreement</label>
                {errors.checked && touched.checked && errors.checked}
              </div>

              <button type="submit" disabled={isSubmitting}>
                Submit
              </button>
            </form>
          )}
        </Formik>
      </div>
    );
}

export default LoginPage;