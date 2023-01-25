import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { useFormik } from "formik";
import { AiOutlineExclamationCircle } from "react-icons/ai";
import * as Yup from "yup";


import {Row, Col, Input, Select} from 'antd'

import Alert from '../components/Alert'
const { TextArea } = Input;

const SendLetterSchema = Yup.object().shape({
  fullName: Yup.string().required("Required"),
  company: Yup.string(),
  email: Yup.string().email("invalid email format").required("Required"),
  phone: Yup.string(),
  message: Yup.string().required("Required message"),
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

  const formik = useFormik({
    initialValues: {
      fullName: "",
      company: "",
      email: "",
      phone: "",
      message: "",
      suggestion: "Please let us know where you found us"
    },
    validationSchema: SendLetterSchema,
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
      handleSubmit(values)
    },
  });
  return (
    <>
      {alertInfo.show && (
        <Alert variant={alertInfo.variant} text={alertInfo.text} />
      )}
      <form onSubmit={formik.handleSubmit}>
        <Row gutter={[20, 10]}>
          <Col span={12}>
            <Input
              size="large"
              placeholder="Name"
              id="fullName"
              type="text"
              {...formik.getFieldProps("fullName")}
            />
            {formik.touched.fullName && formik.errors.fullName ? (
              <div>{formik.errors.fullName}</div>
            ) : null}
          </Col>

          <Col span={12}>
            <Input
              size="large"
              placeholder="Business/Organisation"
              id="company"
              type="text"
              {...formik.getFieldProps("company")}
            />
            {formik.touched.company && formik.errors.company ? (
              <div>{formik.errors.company}</div>
            ) : null}
          </Col>

          <Col span={12}>
            <Input
              size="large"
              placeholder="Phone"
              id="phone"
              type="text"
              {...formik.getFieldProps("phone")}
            />
            {formik.touched.phone && formik.errors.phone ? (
              <div>{formik.errors.phone}</div>
            ) : null}
          </Col>

          <Col span={12}>
            <Input
              size="large"
              placeholder="Email Address"
              id="email"
              type="text"
              {...formik.getFieldProps("email")}
            />
            {formik.touched.email && formik.errors.email ? (
              <div>{formik.errors.email}</div>
            ) : null}
          </Col>

          <Col span={24}>
            <TextArea
            id="message"
              maxLength={500}
              style={{
                height: 120,
                resize: "none",
              }}
              // onChange={onChange}
              placeholder="Message"
              {...formik.getFieldProps("message")}
            />
            {formik.touched.message && formik.errors.message ? (
              <div>{formik.errors.message}</div>
            ) : null}
          </Col>
          <Col span={24}>
            <Select
             id="suggestion"
              size="large"
              placeholder="Please let us know where you found us"
              style={{ width: "100%" }}
              //onChange={handleChange}
              options={[
                {
                  value: "option one",
                  label: "option one",
                },
                {
                  value: "option two",
                  label: "option two",
                },
                {
                  value: "option three",
                  label: "option three",
                },
              ]}
              {...formik.getFieldProps("suggestion")}
            />
                {formik.touched.suggestion && formik.errors.suggestion ? (
              <div>{formik.errors.suggestion}</div>
            ) : null}
          </Col>

          <Col span={24}>
            <button
              type="submit"
              className="button-solid"
              style={{ width: "100%", height:"50px" }}
            >
              Submit email
            </button>
          </Col>
        </Row>
      </form>
    </>
  );
}

export default ContactUs;
