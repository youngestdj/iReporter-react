import React from 'react';
import Header from '../components/header';
import Button from '../components/button';

const Signup = () => (
  <>
    <Header />
    <section className="signup">
      <div className="container">
        <h2>Sign up</h2>
        <form name="signup">
          <div id="error" />
          <div id="success" />
          <input type="text" name="firstname" placeholder="First name" />
          <input type="text" name="lastname" placeholder="Last name" />
          <input type="text" name="othernames" placeholder="Other names" />
          <input type="email" name="email" placeholder="Email" />
          <input type="phone" name="phone" placeholder="Phone number" />
          <input type="text" name="username" placeholder="Username" />
          <input type="password" name="password" placeholder="password" />
          <Button text="Submit" type="submit" id="submit" />
        </form>
      </div>
    </section>
  </>
);

export default Signup;
