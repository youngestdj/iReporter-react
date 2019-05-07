/* eslint-disable react/jsx-no-bind */
import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import Header from '../components/header';
import Button from '../components/button';
import { logUserIn } from '../redux/actions/auth';
import { setCookie, getCookie } from '../assets/js/cookies';


const Login = (props) => {
  if (getCookie('iReporterToken')) return <Redirect to="/create_record" />;
  const [state, setState] = useState({
    email: null,
    password: null,
    error: null,
    message: null,
    loading: false
  });


  const updateInput = (event) => {
    setState({
      ...state, [event.target.name]: event.target.value, message: null, error: null, loading: false
    });
  };

  const completeRequest = async (event) => {
    event.preventDefault();
    setState({
      ...state, loading: true, error: null, message: null
    });
    const res = await props.logUserIn(state);
    if (res.error) setState({ ...state, error: res.error, loading: false });
    else if (res.status === 200) {
      const {
        username,
        firstname,
        lastname,
        othernames
      } = res.data[0].user;

      await setState({ ...state, message: 'Login successful', loading: false });
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
            {
              state.loading ? <div className="loading">Loading please wait....</div> : null
            }
            <input type="email" name="email" placeholder="Email" onChange={updateInput} />
            <input type="password" name="password" placeholder="password" onChange={updateInput} />
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
