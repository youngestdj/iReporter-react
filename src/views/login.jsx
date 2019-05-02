/* eslint-disable react/jsx-no-bind */
import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Header from '../components/header';
import Button from '../components/button';
import { logUserIn } from '../redux/actions/auth';
import { setCookie } from '../assets/js/cookies';


const Login = (props) => {
  const [state, setState] = useState({
    email: null,
    password: null,
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

  const completeRequest = async (event) => {
    event.preventDefault();
    const res = await props.logUserIn(state);
    if (res.error) setState({ ...state, error: res.error });
    else if (res.status === 200) {
      const {
        username,
        firstname,
        lastname,
        othernames
      } = res.data[0].user;

      setState({ ...state, message: 'Login successful' });
      setCookie('iReporterToken', res.data[0].token, 30);
      setCookie('iReporterUsername', username, 30);
      setCookie('iReporterFirstname', firstname, 30);
      setCookie('iReporterLastname', lastname, 30);
      setCookie('iReporterOthernames', othernames, 30);
      return props.history.push('/create_record');
    }
  };
  return (
    <>
      <Header />
      <section className="login">
        <div className="container">
          <h2>Log in</h2>
          <form name="signup">
            {
              state.error ? <div id="error">{state.error}</div> : null
            }
            {
              state.message ? <div id="success">{state.message}</div> : null
            }
            <input type="email" name="email" placeholder="Email" onChange={updateEmail} />
            <input type="password" name="password" placeholder="password" onChange={updatePassword} />
            <Button type="submit" id="submit" text="Login" onClick={completeRequest} />
          </form>
        </div>
      </section>
    </>
  );
};

Login.propTypes = {
  logUserIn: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
};

export default connect(() => ({}), { logUserIn })(Login);
