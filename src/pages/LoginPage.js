import axios from "axios";
import React from "react";
import { Formik } from "formik";
import { Form, Button, Row } from "react-bootstrap";
import "../App.css";
import { useHistory } from "react-router";

const initialValues = {
  username: "",
  password: "",
};
const validateValues = (values) => {
  const errors = {};
  //test validation for username field
  if (!values.username) {
    errors.username = "Username is required";
  }
  //test validation for password field
  if (!values.password) {
    errors.password = "Password is required";
  }

  return errors;
};

const LoginPage = ({ currentUser, setCurrentUser, title, message }) => {
  let history = useHistory();

  const onSubmit = (values, { setSubmitting }) => {
    axios
      .post("http://localhost:8080/authenticate", {
        username: values.username,
        password: values.password,
      })
      .then((response) => {
        console.log(response.data);
        setSubmitting(false);
        setCurrentUser({
          token: response.data.jwttoken,
        });
        // must add token type before data
        axios.defaults.headers.common["Authorization"] =
          "Bearer " + response.data.jwttoken;
        localStorage.setItem("token", response.data.jwttoken);
        history.push("/home");
      });
  };
  console.log("Current User = ", currentUser);

  return (
    <div className="app container">
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
          <div className="login-form--container">
            <h3 className="login-from--title">Enter your credentials</h3>
            <br />
            {title && (
              <div class="alert alert-success" role="alert">
                {title}
              </div>
            )}
            {message && (
              <div class="alert alert-danger" role="alert">
                {message}
              </div>
            )}
            {/* {console.log("errors = ", errors)} */}
            <Form noValidate onSubmit={handleSubmit}>
              <Row className="mb-3">
                <Form.Group controlId="validationFormik01">
                  <Form.Label>Username</Form.Label>
                  <Form.Control
                    type="text"
                    name="username"
                    value={values.username}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    isValid={touched.username && !errors.username}
                    isInvalid={touched.username && errors.username}
                    className="login-input"
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.username}
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group controlId="validationFormik02">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    name="password"
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    isValid={touched.password && !errors.password}
                    isInvalid={touched.password && errors.password}
                    className="login-input"
                  />

                  <Form.Control.Feedback type="invalid">
                    {errors.password}
                  </Form.Control.Feedback>
                </Form.Group>
              </Row>

              <Button type="submit">Submit form</Button>
            </Form>
          </div>
        )}
      </Formik>
    </div>
  );
};

export default LoginPage;
