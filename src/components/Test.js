import React from 'react'

function Test(props) {
  return (
    <div>Test {props.name}
    {props.children}
    </div>
  )
}

export default Test