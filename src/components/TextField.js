import React from "react";
import { useField } from "formik";

function TextField({label, ...props }) {
  const [field, meta] = useField();


  console.log(field, "t")
  return (
    <div>
      <input type="text" 
      placeholder="Enter your digit" 
      {...field} {...props}
      />
    </div>
  );
}

export default TextField;
