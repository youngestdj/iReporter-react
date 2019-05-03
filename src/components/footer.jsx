import React from 'react';
import PropTypes from 'prop-types';
import '../assets/css/style.css';
import { Link } from 'react-router-dom';

const Footer = ({ isLoggedIn }) => (
  <footer>
    <div className="container">
      <div>© 2018 Samuel Jesudunsin. All rights reserved.</div>
      {
        isLoggedIn ? (
          <>
            <Link to="/admin">Administrator</Link>
            <Link to="/create_record">Create record</Link>
            <Link to="/profile">Profile</Link>
            <Link to="/user_records">My records</Link>
          </>
        ) : (
          <>
            <Link to="/login">Login</Link>
            <Link to="/signup">Signup</Link>
          </>
        )
      }
    </div>
  </footer>
);

Footer.propTypes = {
  isLoggedIn: PropTypes.bool,
};
Footer.defaultProps = {
  isLoggedIn: false,
};

export default Footer;
