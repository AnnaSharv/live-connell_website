import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import Button from "react-bootstrap/Button";
import TextField from "./TextField";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function ContactUs() {
  return (
    <Formik
      initialValues={{
        fullName: "",
        company: "",
        number: "",
        email: "",
        message: "",
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {(formik) => (
        <Form>
          <Row style={{"gridRowGap": "30px"}}>
            <Col md={6} xs={6}>
              <Field
                placeholder="Name"
                name="fullName"
                type="text"
                className="contact-form-input"
              />
            </Col>
            <Col md={6} xs={6}>
              <Field
                placeholder="Business/Organisation"
                name="company"
                type="text"
                className="contact-form-input"
              />
            </Col>
            <Col md={6} xs={6}>
              <Field
                placeholder="Phone"
                name="phone"
                type="text"
                className="contact-form-input"
              />
            </Col>
            <Col md={6} xs={6}>
              <Field placeholder="Email Address" name="email" type="email"  className="contact-form-input"/>
            </Col>
            <Col md={12} xs={12}>
              <Field
              as="textarea"
                placeholder="Message"
                name="message"
                type="text"
                className="contact-form-input"
              />
            </Col>
            <Col md={12} xs={12}>
              <Field
                as="textarea"
                placeholder="Please let us know where you found us"
                name="info"
                type="text"
                className="contact-form-input"
              />
            </Col>
            <Col md={12} xs={12}>
              <button
                type="submit"
                disabled={formik.isSubmitting}
                className="border-0 btn-custom w-100"
              >
                Submit email
              </button>
            </Col>
          </Row>
        </Form>
      )}
    </Formik>
  );
}

export default ContactUs;
