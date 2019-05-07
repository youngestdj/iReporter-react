/* eslint-disable react/jsx-no-bind */
/* eslint-disable no-unused-expressions */
import React from 'react';
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';
import { logout } from '../assets/js/cookies';

const Header = (props) => {
  const { isLoggedIn, username } = props;

  const navigateToPage = (event) => {
    event.preventDefault();
    if (event.target.value === '/logout') {
      logout();
      return props.history.push('/login');
    }
    return props.history.push(event.target.value);
  };

  return (
    <>
      <nav>
        <div className="container">
          <div className="logo"><Link to="/">iReporter</Link></div>
          {
            isLoggedIn ? (
              <>
                <ul className="links">
                  <li><Link to="/profile"><span className="username">{`@${username}`}</span></Link></li>
                  <li><Link to="/create_record"><span className="username">Create record</span></Link></li>
                  <li><Link to="/user_records"><span className="username">My records</span></Link></li>
                  <li><a href="" onClick={logout}>Logout</a></li>
                </ul>
                <select name="destination" onChange={navigateToPage}>
                  <option value="">Go to...</option>
                  <option value="/profile">{`@${username}`}</option>
                  <option value="/create_record">Create record</option>
                  <option value="/user_records">My records</option>
                  <option value="/logout" name="logout">Logout</option>
                </select>
              </>
            ) : (
              <>
                <ul className="links">
                  <li><Link to="/login">Login</Link></li>
                  <li><Link to="/signup">Signup</Link></li>
                </ul>
                <select name="destination" onChange={navigateToPage}>
                  <option value="">Go to...</option>
                  <option value="/login" name="login">Login</option>
                  <option value="/signup" name="signup">Signup</option>
                </select>
              </>
            )
          }
        </div>
      </nav>
    </>
  );
};

Header.propTypes = {
  isLoggedIn: PropTypes.bool,
  username: PropTypes.string,
  history: PropTypes.object.isRequired
};
Header.defaultProps = {
  isLoggedIn: false,
  username: ''
};
export default withRouter(Header);
