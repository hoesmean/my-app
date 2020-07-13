import React from "react";
import { useForm } from "react-hook-form";
import axios from 'axios';

export default function App() {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = data => { 

  console.log(errors);
  axios.post('http://localhost:5000/api/order')
        .then(res=> {
            console.log(res);
        })
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        type="text"
        placeholder="First name"
        name="ad"
        ref={register({ required: true, maxLength: 80 })}
      />
      <br/>
      <input
        type="text"
        placeholder="Last name"
        name="tel"
        ref={register({ required: true, maxLength: 100 })}
      />
      <input
        type="text"
        placeholder="Email"
        name="Email"
        ref={register({ required: true, pattern: /^\S+@\S+$/i })}
      />

      <input type="submit" />
    </form>
  );
}