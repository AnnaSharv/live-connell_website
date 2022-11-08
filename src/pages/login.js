import React, { useState, useEffect, useContext } from "react";
import { auth } from "./firebase/firebase-config";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { signInWithEmailAndPassword } from "firebase/auth";
import Authcontext from "./context/Authcontext";

const Login = () => {
  let navigate = useNavigate();
  const {userStatus, setUserStatus} = useContext(Authcontext)

  const [validationError, setValidationError] = useState({
    status: false,
    message: ""
  })
 

  
  const validate = (values) => {
    const errors = {};
    if (!values.email) {
      errors.email = "Required";
    }
    if (!values.password) {
      errors.password = "Password is required";
    }

    return errors;
  };


  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validate,
    onSubmit: (values) => {
      signInWithEmailAndPassword(auth, values.email, values.password)
      .then((userCredential) => {
        setUserStatus(true)
        localStorage.setItem("userStatus", true)
        navigate("/clare/dashboard")
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setValidationError({
          ...validationError,
          status: true,
          message: errorMessage
        })
      });
    }
  });
 
  return (
    <div>
      <form onSubmit={formik.handleSubmit} className="mt-5">
        <input type="email" name="email" {...formik.getFieldProps('email')} className="d-block mx-auto mb-1"/>
        <input type="password" name="password" {...formik.getFieldProps('password')} className="d-block mx-auto mb-1"/>
        <input type="submit" className="d-block mx-auto mt-1 mb-5"/>
      </form>

      <div className="mx-auto text-center mb-5"> {validationError.status === true && validationError.message} </div>
    </div>
  );
};

export default Login;
