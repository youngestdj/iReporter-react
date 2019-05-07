/* eslint-disable react/jsx-no-bind */
import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Header from '../components/header';
import Button from '../components/button';
import { signUserUp } from '../redux/actions/auth';
import { setCookie } from '../assets/js/cookies';

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
    message: null,
    loading: false
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
    setState({
      ...state, loading: true, message: null, error: null
    });
    const res = await props.signUserUp(state);
    if (res.error) setState({ ...state, error: res.error, loading: false });
    else if (res.status === 201) {
      setState({ ...state, message: 'Account registered successfully', loading: false });
      const {
        username, firstname, lastname, othernames
      } = res.data[0].user;
      await setCookie('iReporterToken', res.data[0].token, 30);
      await setCookie('iReporterUsername', username, 30);
      await setCookie('iReporterFirstname', firstname, 30);
      await setCookie('iReporterLastname', lastname, 30);
      await setCookie('iReporterOthernames', othernames, 30);
      return props.history.push('/create_record');
    }
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
            {
              state.loading ? <div className="loading">Loading please wait...</div> : null
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
  signUserUp: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
};


export default connect(() => ({}), { signUserUp })(Signup);
