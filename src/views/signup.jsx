/* eslint-disable react/jsx-no-bind */
import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Header from '../components/header';
import Button from '../components/button';
import { signUserUp } from '../redux/actions/auth';

const Signup = (props) => {
  const [state, setState] = useState({
    email: null,
    password: null,
    firstname: null,
    lastname: null,
    othernames: null,
    phonenumber: null,
    username: null,
    error: null,
    message: null
  });

  const updateEmail = (event) => {
    setState({
      ...state,
      email: event.target.value,
      message: null,
      error: null
    });
  };
  const updatePassword = (event) => {
    setState({
      ...state,
      password: event.target.value,
      message: null,
      error: null
    });
  };
  const updateFirstname = (event) => {
    setState({
      ...state,
      firstname: event.target.value,
      message: null,
      error: null
    });
  };
  const updateLastname = (event) => {
    setState({
      ...state,
      lastname: event.target.value,
      message: null,
      error: null
    });
  };
  const updateOthernames = (event) => {
    setState({
      ...state,
      othernames: event.target.value,
      message: null,
      error: null
    });
  };
  const updatePhone = (event) => {
    setState({
      ...state,
      phonenumber: event.target.value,
      message: null,
      error: null
    });
  };
  const updateUsername = (event) => {
    setState({
      ...state,
      username: event.target.value,
      message: null,
      error: null
    });
  };

  const completeRequest = async (event) => {
    event.preventDefault();
    const res = await props.signUserUp(state);
    if (res.error) setState({ ...state, error: res.error });
    else if (res.status === 201) setState({ ...state, message: 'Account registered successfully' });
  };

  return (
    <>
      <Header />
      <section className="signup">
        <div className="container">
          <h2>Sign up</h2>
          <form name="signup">
            {
              state.error ? <div id="error">{state.error}</div> : null
            }
            {
              state.message ? <div id="success">{state.message}</div> : null
            }
            <input type="text" name="firstname" placeholder="First name" onChange={updateFirstname} />
            <input type="text" name="lastname" placeholder="Last name" onChange={updateLastname} />
            <input type="text" name="othernames" placeholder="Other names" onChange={updateOthernames} />
            <input type="email" name="email" placeholder="Email" onChange={updateEmail} />
            <input type="text" name="phone" placeholder="Phone number" onChange={updatePhone} />
            <input type="text" name="username" placeholder="Username" onChange={updateUsername} />
            <input type="password" name="password" placeholder="password" onChange={updatePassword} />
            <Button text="Submit" type="submit" id="submit" onClick={completeRequest} />
          </form>
        </div>
      </section>
    </>
  );
};

Signup.propTypes = {
  signUserUp: PropTypes.func.isRequired
};


export default connect(() => ({}), { signUserUp })(Signup);
