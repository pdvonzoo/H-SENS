import React, { useState } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import { SignInForm, SignNav, SignLogo, Container } from './SignForm.jsx';
import useFetch from '../fetch.js';

const SignIn = props => {
  const [id, setId] = useState({ b: false, data: '' });
  const [pw, setPw] = useState({ b: false, data: '' });
  const [submitBtn, setSubmitBtn] = useState({
    bLoading: false,
    bCorrect: true,
  });

  const getId = e => {
    const curVal = e.target.value;
    setId({ b: true, data: curVal });
  };

  const getPw = e => {
    const curVal = e.target.value;
    setPw({ b: true, data: curVal });
  };

  const submit = async e => {
    setSubmitBtn({ bLoading: true, bCorrect: true });
    const jsonHeader = {
      'Accept' : 'application/json',
      'Content-Type': 'application/json',
    };
    const userData = {
      userid: id.data,
      password: pw.data,
    };
    const signInUrl = 'https://hea-b.herokuapp.com/users/signin';
    const res = await useFetch(
      signInUrl,
      'POST',
      jsonHeader,
      JSON.stringify(userData)
    );
    console.log(res);
    if (res.error) {
      // window.location.replace('http://localhost:3000');
    } else {
      setSubmitBtn({ bLoading: false, bCorrect: false });
    }
  };

  return (
    <>
      <SignLogo as={Link} to="/" />
      <Container>
        <SignInForm
          Fns={{ getId, getPw, submit }}
          Datas={{ id, pw, submitBtn }}
        />
        <SignNav />
      </Container>
    </>
  );
};

export default SignIn;