import React from 'react';
import Header from '../components/header';
import Button from '../components/button';

const Login = () => (
  <>
    <Header />
    <section className="login">
      <div className="container">
        <h2>Log in</h2>
        <form name="signup">
          <div id="error" />
          <div id="success" />
          <input type="email" name="email" placeholder="Email" />
          <input type="password" name="password" placeholder="password" />
          <Button type="submit" id="submit" text="Login" />
        </form>
      </div>
    </section>
  </>
);
export default Login;
