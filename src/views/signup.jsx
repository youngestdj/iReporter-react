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

  const updateInput = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.value,
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
            <input type="text" name="firstname" placeholder="First name" onChange={updateInput} />
            <input type="text" name="lastname" placeholder="Last name" onChange={updateInput} />
            <input type="text" name="othernames" placeholder="Other names" onChange={updateInput} />
            <input type="email" name="email" placeholder="Email" onChange={updateInput} />
            <input type="text" name="phonenumber" placeholder="Phone number" onChange={updateInput} />
            <input type="text" name="username" placeholder="Username" onChange={updateInput} />
            <input type="password" name="password" placeholder="password" onChange={updateInput} />
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
