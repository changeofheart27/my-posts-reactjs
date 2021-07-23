import { Formik } from "formik";
import axios from "axios";
import {Form, Button, Row} from "react-bootstrap";
import "../App.css";

const initialValues = {
  email: "",
  password: ""
};
const validateValues = (values) => {
  const errors = {};
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
  
  return errors;
};


const LoginPage = ({ currentUser, setCurrentUser, title }) => {
  const onSubmit = (values, { setSubmitting }) => {
    axios
      .get("https://60dff0ba6b689e001788c858.mockapi.io/token", {
        email: values.email,
        password: values.password,
      })
      .then(response => {
        console.log(response);
        setSubmitting(false);
        setCurrentUser({
          token: response.data.token,
          userId: response.data.userId
        });
        axios.defaults.headers.common["Authorization"] = response.data.token;
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
              <h3 className="login-from--title">Enter your credentials</h3><br/>
              {title && <h5>{title}</h5>}
              {/* {console.log("errors = ", errors)} */}
              <Form noValidate onSubmit={handleSubmit}>
                <Row className="mb-3">
                  <Form.Group controlId="validationFormik01">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type="text"
                      name="email"
                      value={values.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      isValid={touched.email && !errors.email}
                      isInvalid={touched.email && errors.email}
                      className="login-input"
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.email}
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
}

export default LoginPage;