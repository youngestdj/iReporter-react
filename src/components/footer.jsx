import React from 'react';
import '../assets/css/style.css';

const Footer = () => (
  <footer>
    <div className="container">
      <div>© 2018 Samuel Jesudunsin. All rights reserved.</div>
      <a href="/admin">Administrator</a>
      <a href="/create_record">Create record</a>
      <a href="/login">Login</a>
      <a href="/signup">Signup</a>
      <a href="/profile">Profile</a>
      <a href="/user_records">My records</a>
    </div>
  </footer>
);

export default Footer;
