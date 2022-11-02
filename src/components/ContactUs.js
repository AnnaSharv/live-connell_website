import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { AiOutlineExclamationCircle } from "react-icons/ai";
import * as Yup from "yup";

import Button from "react-bootstrap/Button";
import TextField from "./TextField";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";


import Alert from '../components/Alert'


const SendLetterSchema = Yup.object().shape({
  fullName: Yup.string().required("Required"),
  company: Yup.string(),
  email: Yup.string().email("invalid email format").required("required"),
  phone: Yup.string(),
  message: Yup.string().required("required message"),
  suggestion: Yup.string()
});

function ContactUs() {
  const form = useRef();
  const [alertInfo, setAlertInfo] = useState({
    show: false,
    variant:"",
    text:""
  })
 
  let handleSubmit = (values, actions) => {
    emailjs.sendForm("service_mp47gja", "template_c0i9fcl", form.current, "oB8hfodng-2Fj2iGe")
    .then((result) => {
      setAlertInfo({
        show: true,
        variant:"success",
        text: "email sent"
      })
      setTimeout(() => {
        setAlertInfo({...alertInfo, show:false})
      }, 4000);
      actions.resetForm()
    },
    (error) => {
      setAlertInfo({
        show: true,
        variant:"danger",
        text: "SERVER ERROR. Please contact us directly from email"
      })

      setTimeout(() => {
        setAlertInfo({...alertInfo, show: false})
      }, 4000);


      console.log("error", error)
      actions.resetForm()
    });
  }
  return (
    <>
      {alertInfo.show && <Alert variant={alertInfo.variant} text={alertInfo.text}/>}
      <Formik
        initialValues={{
          fullName: "",
          company: "",
          phone: "",
          email: "",
          message: "",
          suggestion:""
        }}
        validationSchema={SendLetterSchema}
        onSubmit={handleSubmit}
      >
        {(formik) => (
          <Form ref={form} method="POST">
            {console.log(formik)}
            <Row style={{ gridRowGap: "30px" }}>
              <Col md={6} xs={6}>
                <Field placeholder="Name"  name="fullName"  type="text"  className={`contact-form-input`} />

                <ErrorMessage  name="fullName"
                  render={(msg) => (
                    <div className="text-danger position-absolute" style={{ fontSize: "12px" }}>
                      <AiOutlineExclamationCircle /> {msg}
                    </div>
                  )}
                />
              </Col>
              <Col md={6} xs={6}>
                <Field placeholder="Business/Organisation"  name="company"  type="text"  className={`contact-form-input`} />
                <ErrorMessage  name="company"
                  render={(msg) => <div className="text-danger position-absolute">{msg}</div>}
                />
              </Col>
              <Col md={6} xs={6}>
                <Field placeholder="Phone"  name="phone"  type="text"  className={`contact-form-input` } />
                <ErrorMessage  name="phone"
                  render={(msg) => (
                    <div className="text-danger position-absolute" style={{ fontSize: "12px" }}>
                      <AiOutlineExclamationCircle /> {msg}
                    </div>
                  )}
                />
              </Col>
              <Col md={6} xs={6}>
                <Field placeholder="Email Address"  name="email"
                  type="email"  className={`contact-form-input`} />
                <ErrorMessage  name="email"
                  render={(msg) => (
                    <div className="text-danger position-absolute" style={{ fontSize: "12px" }}>
                      <AiOutlineExclamationCircle /> {msg}
                    </div>
                  )}
                />
              </Col>
              <Col md={12} xs={12}>
                <Field as="textarea" placeholder="Message"  name="message"  type="text"  className={`contact-form-input`} />
                <ErrorMessage  name="message"
                  render={(msg) => (
                    <div className="text-danger position-absolute" style={{ fontSize: "12px" }}>
                      <AiOutlineExclamationCircle /> {msg}
                    </div>
                  )}
                />
              </Col>
              <Col md={12} xs={12}>
                <Field
                  as="textarea" placeholder="Please let us know where you found us"  name="suggestion"  type="text"  className={`contact-form-input`} />
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
    </>
  );
}

export default ContactUs;
