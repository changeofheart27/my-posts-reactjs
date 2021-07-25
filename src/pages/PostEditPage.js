import axios from "axios";
import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";
import { Formik } from "formik";
import {Form, Button, Row} from "react-bootstrap"

const PostEditPage = ({ currentUser }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [post, setPost] = useState([]);
  const { id } = useParams();
  let history = useHistory();

  useEffect(() => {
    setIsLoading(false);
    axios
      .get(`http://localhost:8080/api/v1/posts/${id}`, {
        headers: {
          Authorization: "Bearer " + currentUser.token,
        },
      })
      .then((response) => {
        console.log(response.data);
        setPost(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id, currentUser.token]);

  if (isLoading) {
    return <h3>Loading...</h3>;
  }

  const initialValues = {
    title: post.title,
    description: post.description,
    content: post.content
  };

  const validateValues = (values) => {
    const errors = {};
    //test validation for title field
    if (!values.title) {
      errors.title = "Title is required";
    }
    //test validation for description field
    if (!values.description) {
      errors.description = "Description is required";
    }
    //test validation for content field
    if (!values.content) {
      errors.content = "Content is required";
    }
    return errors;
  };

  const onSubmit = (values, { setSubmitting }) => {
    axios
      .put(`http://localhost:8080/api/v1/posts/${post.id}`, {
        title: values.title,
        description: values.description,
        content: values.content
      })
      .then(response => {
        console.log(response.data);
        setSubmitting(false);
        history.push("/home");
      });
  };

  return (
    <div className="app container">
      <Formik
        initialValues={initialValues}
        validate={validateValues}
        onSubmit={onSubmit}
        enableReinitialize
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
            <h3 className="login-from--title">Edit Post</h3>
            <br />
            {/* {console.log("errors = ", errors)} */}
            <Form noValidate onSubmit={handleSubmit}>
              <Row className="mb-3">
                <Form.Group controlId="validationFormik01">
                  <Form.Label>Title</Form.Label>
                  <Form.Control
                    type="text"
                    name="title"
                    value={values.title}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    isValid={touched.title && !errors.title}
                    isInvalid={touched.title && errors.title}
                    className="login-input"
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.title}
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group controlId="validationFormik02">
                  <Form.Label>Description</Form.Label>
                  <Form.Control
                    type="text"
                    name="description"
                    value={values.description}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    isValid={touched.description && !errors.description}
                    isInvalid={touched.description && errors.description}
                    className="login-input"
                  />

                  <Form.Control.Feedback type="invalid">
                    {errors.description}
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group controlId="validationFormik03">
                  <Form.Label>Content</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={5}
                    name="content"
                    value={values.content}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    isValid={touched.content && !errors.content}
                    isInvalid={touched.content && errors.content}
                    className="login-input"
                  />

                  <Form.Control.Feedback type="invalid">
                    {errors.content}
                  </Form.Control.Feedback>
                </Form.Group>
              </Row>

              <Button type="submit">Update</Button>
            </Form>
          </div>
        )}
      </Formik>
    </div>
  );
};

export default PostEditPage;