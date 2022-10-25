import React, { useState, useEffect, useRef } from "react";
import emailjs from '@emailjs/browser'

export default function Form() {
  const form = useRef()
  const [user, setUser] = useState({
    name: "a",
    email: "b",
    message: "c",
  });

  function sendInfo(e) {
    e.preventDefault();
    emailjs.sendForm('service_mzku9ks', 'template_34yn1oc', form.current, 'oB8hfodng-2Fj2iGe')
    .then(function(response) {
        console.log('SUCCESS!', response.status, response.text);
     }, function(error) {
        console.log('FAILED...', error);
     });


    e.target.reset();
    Object.values(user).forEach(val => {
        setUser({...user, name: "", email: "", message: ""})
    });


    console.log(form.current);

  }

  useEffect(() => {
    console.log();
  }, [])
  
  return (
    <form onSubmit={sendInfo} ref={form}>
      <input type="text" name="name" placeholder="enter your name" onChange={(e) => setUser({...user, name: e.target.value})}/>
      <input type="text" name="email" placeholder="enter your email"  onChange={(e) => setUser({...user, email: e.target.value})}/>
      <textarea name="message" onChange={(e) => setUser({...user, message: e.target.value})}/>
      <input type="submit" />
    </form>
  );
}
