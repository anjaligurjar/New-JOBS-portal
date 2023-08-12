import * as React from 'react';
import {useState} from 'react'
export default function Login() {
  const [inputs, setInput]=useState({
    mobile: '',
    username: '',
    email: '',
    password: '',
    confirmPassword:""
  })

  const handleChange=(e)=>{
    const name=e.target.value
  setInput({...inputs,[name]: name})
  }
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <input onChange={handleChange} > name</input>
    </div>
  );
}